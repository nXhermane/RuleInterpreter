# Guide de la Grammaire ANTLR

## 1. Règles de base

### Définition d'une règle
Une règle dans ANTLR est définie comme suit :
```
nomDeLaRegle : contenuDeLaRegle ;
```

### Types de règles
- Règles lexicales (tokens) : commencent par une majuscule
- Règles parser : commencent par une minuscule

Exemple :
```antlr
MAJUSCULE : [A-Z] ;  // Règle lexicale
minuscule : [a-z] ;  // Règle parser
```

## 2. Syntaxe et opérateurs

### Séquence
Utilisez un espace pour définir une séquence :
```antlr
regle : 'mot1' 'mot2' 'mot3' ;
```

### Alternative (|)
Utilisez | pour définir des alternatives :
```antlr
fruit : 'pomme' | 'poire' | 'banane' ;
```

### Optionnel (?)
Utilisez ? pour rendre un élément optionnel :
```antlr
nombre : CHIFFRE+ ('.' CHIFFRE+)? ;
```

### Répétition (+ et *)
- `+` : une ou plusieurs occurrences
- `*` : zéro ou plusieurs occurrences
```antlr
mot : LETTRE+ ;
phrase : mot* ;
```

### Groupement (())
Utilisez des parenthèses pour grouper des éléments :
```antlr
expression : ('+' | '-') nombre ;
```

## 3. Caractères spéciaux et leur signification

- `[ ]` : Définit un ensemble de caractères
- `( )` : Groupe des éléments
- `~` : Négation (tout sauf)
- ``` ` ``` : Délimite une chaîne littérale (alternative à ')
- `|` : Alternative
- `?` : Optionnel (0 ou 1 occurrence)
- `*` : Zéro ou plusieurs occurrences
- `+` : Une ou plusieurs occurrences

## 4. Mots-clés réservés et leur rôle

- `grammar` : Déclare le nom de la grammaire
- `import` : Importe d'autres grammaires
- `fragment` : Définit une règle lexicale auxiliaire
- `lexer` : Déclare des règles spécifiques au lexer
- `parser` : Déclare des règles spécifiques au parser
- `options` : Spécifie des options pour la grammaire

## 5. Règles avancées

### Actions sémantiques ({ })
Permettent d'insérer du code cible dans la grammaire :
```antlr
expression : 
    nombre {System.out.println("Nombre trouvé : " + $nombre.text);} ;
```

### Prédicats sémantiques ({ }?)
Permettent de spécifier des conditions pour l'application d'une règle :
```antlr
instruction : {estDansUneFonction()}? 'return' expression ;
```

### Labels (#)
Permettent de nommer des éléments dans une règle :
```antlr
addition : gauche=expression '+' droite=expression ;
```

### Modes lexicaux
Permettent de changer le contexte d'analyse lexicale :
```antlr
COMMENT_START : '/*' -> mode(IN_COMMENT) ;

mode IN_COMMENT;
COMMENT_END : '*/' -> mode(DEFAULT_MODE) ;
```

## 6. Bonnes pratiques

1. Nommez clairement vos règles
2. Utilisez des fragments pour les règles lexicales réutilisables
3. Évitez la récursion gauche directe
4. Préférez la lisibilité à la concision
5. Commentez votre grammaire pour expliquer les choix complexes
