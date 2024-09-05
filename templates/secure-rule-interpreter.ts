// Types de base et interfaces
type UUID = string;

interface Patient {
  id: UUID;
  [key: string]: any;
}

interface RegleNutritionnelle {
  nutriment: string;
  expression: Expression;
}

// Classes d'expressions
abstract class Expression {
  abstract evaluer(patient: Patient): number;
}

class ValeurLiterale extends Expression {
  constructor(private valeur: number) {
    super();
  }

  evaluer(_patient: Patient): number {
    return this.valeur;
  }
}

class ReferenceChamp extends Expression {
  constructor(private nomChamp: string) {
    super();
  }

  evaluer(patient: Patient): number {
    if (typeof patient[this.nomChamp] === 'number') {
      return patient[this.nomChamp];
    }
    throw new Error(`Champ "${this.nomChamp}" non trouvé ou non numérique`);
  }
}

class OperationBinaire extends Expression {
  constructor(
    private gauche: Expression,
    private droite: Expression,
    private operateur: (a: number, b: number) => number
  ) {
    super();
  }

  evaluer(patient: Patient): number {
    return this.operateur(this.gauche.evaluer(patient), this.droite.evaluer(patient));
  }
}

class ExpressionConditionnelle extends Expression {
  constructor(
    private condition: Expression,
    private siVrai: Expression,
    private siFaux: Expression
  ) {
    super();
  }

  evaluer(patient: Patient): number {
    return this.condition.evaluer(patient) !== 0 
      ? this.siVrai.evaluer(patient) 
      : this.siFaux.evaluer(patient);
  }
}

// Classe pour construire les expressions
class ConstructeurExpression {
  valeurLiterale(valeur: number): Expression {
    return new ValeurLiterale(valeur);
  }

  referenceChamp(nomChamp: string): Expression {
    return new ReferenceChamp(nomChamp);
  }

  addition(gauche: Expression, droite: Expression): Expression {
    return new OperationBinaire(gauche, droite, (a, b) => a + b);
  }

  soustraction(gauche: Expression, droite: Expression): Expression {
    return new OperationBinaire(gauche, droite, (a, b) => a - b);
  }

  multiplication(gauche: Expression, droite: Expression): Expression {
    return new OperationBinaire(gauche, droite, (a, b) => a * b);
  }

  division(gauche: Expression, droite: Expression): Expression {
    return new OperationBinaire(gauche, droite, (a, b) => {
      if (b === 0) throw new Error("Division par zéro");
      return a / b;
    });
  }

  condition(condition: Expression, siVrai: Expression, siFaux: Expression): Expression {
    return new ExpressionConditionnelle(condition, siVrai, siFaux);
  }

  egalite(gauche: Expression, droite: Expression): Expression {
    return new OperationBinaire(gauche, droite, (a, b) => Number(a === b));
  }

  superieur(gauche: Expression, droite: Expression): Expression {
    return new OperationBinaire(gauche, droite, (a, b) => Number(a > b));
  }

  // Ajoutez d'autres opérations si nécessaire
}

// Classe principale du calculateur
class CalculateurNutritionnel {
  private regles: RegleNutritionnelle[];

  constructor(regles: RegleNutritionnelle[]) {
    this.regles = regles;
  }

  calculerBesoins(patient: Patient): Map<string, number> {
    const besoins = new Map<string, number>();

    for (const regle of this.regles) {
      try {
        const resultat = regle.expression.evaluer(patient);
        besoins.set(regle.nutriment, resultat);
      } catch (error) {
        console.error(`Erreur lors du calcul pour ${regle.nutriment}:`, error);
      }
    }

    return besoins;
  }
}

// Exemple d'utilisation
const constructeur = new ConstructeurExpression();

const reglesNutritionniste: RegleNutritionnelle[] = [
  {
    nutriment: 'calories',
    expression: constructeur.addition(
      constructeur.multiplication(
        constructeur.valeurLiterale(10),
        constructeur.referenceChamp('poids')
      ),
      constructeur.multiplication(
        constructeur.valeurLiterale(6.25),
        constructeur.referenceChamp('taille')
      )
    )
  },
  {
    nutriment: 'proteines',
    expression: constructeur.multiplication(
      constructeur.referenceChamp('poids'),
      constructeur.condition(
        constructeur.superieur(
          constructeur.referenceChamp('niveauActivite'),
          constructeur.valeurLiterale(1.4)
        ),
        constructeur.valeurLiterale(1.6),
        constructeur.valeurLiterale(1.2)
      )
    )
  },
  // Ajoutez d'autres règles ici
];

const calculateur = new CalculateurNutritionnel(reglesNutritionniste);

const patient: Patient = {
  id: '123e4567-e89b-12d3-a456-426614174000',
  poids: 70,
  taille: 175,
  niveauActivite: 1.5
};

const besoinsNutritionnels = calculateur.calculerBesoins(patient);
console.log('Besoins nutritionnels calculés:', Object.fromEntries(besoinsNutritionnels));
