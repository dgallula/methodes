//
//  sur les tableaux 
//  1 foreach 
const fr = ['pomme', 'banane', 'mangue'];
fr.forEach(fr => {
    console.log(fr);
});
// Sortie :
// pomme
// banane
// mangue


// 2 map 


const number = [1, 2, 3, 4];
const doubles = number.map(number => number * 2);
console.log(doubles);
// Sortie : [2, 4, 6, 8]


// 3 filter


const  number1= [1, 2, 3, 4, 5];
const pairs = number1.filter(number1 => number1 % 2 === 0);
console.log(pairs);
// Sortie : [2, 4]

// reduce


const numbers = [1, 2, 3, 4];
const somme = numbers.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);
console.log(somme);
// Sortie : 10

find


 const personnes = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Charlie', age: 35 }
];
const personne = personnes.find(p => p.age === 30);
console.log(personne);
// Sortie : { nom: 'Bob', age: 30 }

// findIndex


const numbers2 = [1, 2, 3, 4, 5];
const index = numbers2.findIndex(numbers2 => num === 3);
console.log(index);
// Sortie : 2

// some


const Numbers3 = [1, 2, 3, 4, 5];
const aPair = nombres.some(Numbers3 => Numbers3 % 2 === 0);
console.log(aPair);
// Sortie : true

// every


const n = [2, 4, 6, 8];
const tousPairs = n.every(n => n % 2 === 0);
console.log(tousPairs);
// Sortie : true

includes


const fruits = ['pomme', 'banane', 'mangue'];
const aPomme = fruits.includes('pomme');
console.log(aPomme);
// Sortie : true

// sort
const n1 = [4, 2, 5, 1, 3];
n1.sort((a, b) => a - b);
console.log(n1);
// Sortie : [1, 2, 3, 4, 5]

// Méthodes sur les Chaînes de Caractères
// 1charAt


const str = 'Bonjour';
console.log(str.charAt(0));
// Sortie : B

// includes
const str1 = 'Bonjour tout le monde';
console.log(str1.includes('tout'));
// Sortie : true

// indexOf
const str2 = 'Bonjour tout le monde';
console.log(str2.indexOf('tout'));
// Sortie : 8

// replace
const str3 = 'Bonjour tout le monde';
const newStr = str3.replace('Bonjour', 'Salut');
console.log(newStr);
// Sortie : Salut tout le monde

// split
const str4 = 'Bonjour tout le monde';
const words = str4.split(' ');
console.log(words);
// Sortie : ['Bonjour', 'tout', 'le', 'monde']

 
// toLowerCase

const str5 = 'Bonjour';
console.log(str5.toLowerCase());
// Sortie : bonjour

// toUpperCase
const str6 = 'Bonjour';
console.log(str6.toUpperCase());
// Sortie : BONJOUR

// trim supprine les espaces

const str7 = '  Bonjour  ';
console.log(str7.trim());
// Sortie : 'Bonjour'


// Fonctions Asynchrones
// setTimeout


console.log('Début');
setTimeout(() => {
    console.log('Après 2 secondes');
}, 2000);
console.log('Fin');

// Début
// Fin
// Après 2 secondes

// setInterval

 let compteur = 0;
const intervalId = setInterval(() => {
    compteur++;
    console.log(`Compteur : ${compteur}`);
    if (compteur === 5) {
        clearInterval(intervalId);
    }
}, 1000);
// Sortie toutes les secondes :
// Compteur : 1
// Compteur : 2
// Compteur : 3
// Compteur : 4
// Compteur : 5

// fetch


fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur:', error));
async/await



async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erreur:', error);
    }
}
fetchData();

 

// La programmation orientée objet (POO)La programmation orientée objet (POO) en JavaScript est une méthode de structuration du code qui permet de modéliser des concepts du monde réel sous forme d'objets. Les objets en POO contiennent des propriétés (attributs) et des méthodes (comportements). JavaScript supporte la POO de manière flexible et moderne, notamment avec l'introduction des classes en ES6.

// Concepts Clés de la POO en JavaScript
// Classes et Instances
// Encapsulation
// Héritage
// Polymorphisme
// 1. Classes et Instances
// Les classes sont des modèles pour créer des objets. Une classe définit des propriétés et des méthodes qui seront partagées par toutes ses instances.

class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
}

// Créer une instance de Personne
const p1 = new Personne('Alice', 30);
p1.sePresenter(); // Bonjour, je m'appelle Alice et j'ai 30 ans.

// La programmation orientée objet (POO) en JavaScript est une méthode de structuration du code qui permet de modéliser des concepts du monde réel sous forme d'objets. Les objets en POO contiennent des propriétés (attributs) et des méthodes (comportements). JavaScript supporte la POO de manière flexible et moderne, notamment avec l'introduction des classes en ES6.

// Concepts Clés de la POO en JavaScript
// Classes et Instances
// Encapsulation
// Héritage

// Polymorphisme
// 1. Classes et Instances
// Les classes sont des modèles pour créer des objets. Une classe définit des propriétés et des méthodes qui seront partagées par toutes ses instances.


class Personne {
    constructor(nom1, age1) {
        this.nom1 = nom1;
        this.age1 = age1;
    
    }

    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.nom1} et j'ai ${this.age1} ans.`);
    }
}

// Créer une instance de Personne
const p2 = new Personne('Alice', 30);
p2.sePresenter(); // Bonjour, je m'appelle Alice et j'ai 30 ans.


    // Encapsulation

class Personne {
    name; // Propriété privée

    constructor(name, oldAge) {
        this.name = name;
        this.oldAge = oldAge;
    }

    getNom() {
        return this.name;
    }

    setNom(name1) {
        this.name1 = name1;
    }

    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.name1} et j'ai ${this.oldAge} ans.`);
    }
}

const p3 = new Personne('Alice', 30);
p3.sePresenter(); // Bonjour, je m'appelle Alice et j'ai 30 ans.
console.log(p3.getNom()); // Alice
p3.setNom('Bob');
p3.sePresenter(); // Bonjour, je m'appelle Bob et j'ai 30 ans.

// 3. Héritage
// L'héritage permet de créer des classes dérivées qui héritent des propriétés et des méthodes d'une classe de base. Cela favorise la réutilisation du code et le polymorphisme.


class Personne {
    constructor(name3, age3) {
        this.nom3 = nom3;
        this.age3 = this.age3;
    }

    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.nom3} et j'ai ${this.age3} ans.`);
    }
}

class Etudiant extends Personne {
    constructor(nom4, age4, etudes) {
        super(nom4, age4);
        this.etudes = etudes;
    }

    sePresenter() {
        super.sePresenter();
        console.log(`Je suis étudiant en ${this.etudes}.`);
    }
}

const etu = new Etudiant('Alice', 22, 'Informatique');
etudiant1.sePresenter();

// Bonjour, je m'appelle Alice et j'ai 22 ans.
// Je suis étudiant en Informatique.


// 4. Polymorphisme
// Le polymorphisme permet d'utiliser des méthodes de manière interchangeable entre des objets de différentes classes.


class Animal {
    faireDuBruit() {
        console.log('L\'animal fait du bruit.');
    }
}

class Chien extends Animal {
    faireDuBruit() {
        console.log('Le chien aboie.');
    }
}

class Chat extends Animal {
    faireDuBruit() {
        console.log('Le chat miaule.');
    }
}

const pets = [new Animal(), new Chien(), new Chat()];

pets.forEach(pets => pets.faireDuBruit());
// L'animal fait du bruit.
// Le chien aboie.
// Le chat miaule.


// Conclusion
// La POO en JavaScript offre un moyen puissant et structuré de développer des applications en permettant de modéliser des concepts du monde réel avec des objets. Avec l'utilisation des classes, de l'encapsulation, de l'héritage et du polymorphisme, JavaScript permet aux développeurs de créer des applications modulaires, réutilisables et maintenables.




 



