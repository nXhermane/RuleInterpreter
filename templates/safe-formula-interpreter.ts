// Types de base et énumérations (comme précédemment)
type UUID = string;

enum Sexe { Homme = 'H', Femme = 'F' }
enum NiveauActivite { Sedentaire = 1, PeuActif = 1.2, Actif = 1.4, TresActif = 1.6 }

interface DonneesPatient {
  id: UUID;
  dateNaissance: Date;
  sexe: Sexe;
  taille: number;
  poids: number;
  niveauActivite: NiveauActivite;
  [key: string]: any;
}

interface RegleCalcul {
  nutriment: string;
  formule: string;
  conditions?: Array<{
    champ: string;
    operateur: '==' | '!=' | '>' | '<' | '>=' | '<=';
    valeur: any;
  }>;
}

// Classe pour l'interprétation sécurisée des formules
class InterpreteurFormuleSec {
  private static operateursComparaison: { [key: string]: (a: any, b: any) => boolean } = {
    '==': (a, b) => a == b,
    '!=': (a, b) => a != b,
    '>': (a, b) => a > b,
    '<': (a, b) => a < b,
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b
  };

  private static operateursMath: { [key: string]: (a: number, b: number) => number } = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
    '^': (a, b) => Math.pow(a, b)
  };

  static evaluerConditions(patient: DonneesPatient, conditions?: Array<any>): boolean {
    if (!conditions) return true;
    return conditions.every(condition => {
      const valeurPatient = patient[condition.champ];
      const operateur = this.operateursComparaison[condition.operateur];
      return operateur(valeurPatient, condition.valeur);
    });
  }

  static evaluerFormule(patient: DonneesPatient, formule: string): number {
    const tokens = this.tokenizer(formule);
    return this.evaluateExpression(tokens, patient);
  }

  private static tokenizer(formule: string): string[] {
    return formule.match(/(\b\w+\b|\d+|[+\-*/^()])/g) || [];
  }

  private static evaluateExpression(tokens: string[], patient: DonneesPatient): number {
    const output: (string | number)[] = [];
    const operators: string[] = [];
    const precedence: { [key: string]: number } = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };

    for (const token of tokens) {
      if (this.operateursMath[token]) {
        while (operators.length > 0 && precedence[operators[operators.length - 1]] >= precedence[token]) {
          output.push(operators.pop()!);
        }
        operators.push(token);
      } else if (token === '(') {
        operators.push(token);
      } else if (token === ')') {
        while (operators.length > 0 && operators[operators.length - 1] !== '(') {
          output.push(operators.pop()!);
        }
        operators.pop(); // Retire la parenthèse ouvrante
      } else {
        // Nombre ou variable
        const value = patient.hasOwnProperty(token) ? patient[token] : parseFloat(token);
        output.push(value);
      }
    }

    while (operators.length > 0) {
      output.push(operators.pop()!);
    }

    return this.evaluateRPN(output);
  }

  private static evaluateRPN(tokens: (string | number)[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
      if (typeof token === 'number') {
        stack.push(token);
      } else if (this.operateursMath[token]) {
        const b = stack.pop()!;
        const a = stack.pop()!;
        stack.push(this.operateursMath[token](a, b));
      }
    }

    return stack[0];
  }
}

// Classe principale du calculateur
class CalculateurNutritionnel {
  private regles: RegleCalcul[];

  constructor(regles: RegleCalcul[]) {
    this.regles = regles;
  }

  calculerBesoins(patient: DonneesPatient): Map<string, number> {
    const besoins = new Map<string, number>();

    for (const regle of this.regles) {
      if (InterpreteurFormuleSec.evaluerConditions(patient, regle.conditions)) {
        const resultat = InterpreteurFormuleSec.evaluerFormule(patient, regle.formule);
        besoins.set(regle.nutriment, resultat);
      }
    }

    return besoins;
  }
}

// Exemple d'utilisation
const reglesNutritionniste: RegleCalcul[] = [
  {
    nutriment: 'calories',
    formule: '10 * poids + 6.25 * taille - 5 * age + (sexe == "H" ? 5 : -161) * niveauActivite',
    conditions: [{ champ: 'age', operateur: '>=', valeur: 18 }]
  },
  {
    nutriment: 'proteines',
    formule: 'poids * 1.6',
    conditions: [{ champ: 'niveauActivite', operateur: '>=', valeur: NiveauActivite.Actif }]
  },
  {
    nutriment: 'vitamine_C',
    formule: 'sexe == "H" ? 90 : 75'
  },
  // ... autres règles
];

const calculateur = new CalculateurNutritionnel(reglesNutritionniste);

const patient: DonneesPatient = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  dateNaissance: new Date('1990-01-01'),
  sexe: Sexe.Femme,
  taille: 165,
  poids: 60,
  niveauActivite: NiveauActivite.Actif,
  age: 33 // Calculé à partir de la date de naissance, ajouté pour simplifier l'exemple
};

const besoinsNutritionnels = calculateur.calculerBesoins(patient);
console.log('Besoins nutritionnels calculés:', Object.fromEntries(besoinsNutritionnels));
