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

// 4reduce


const numbers = [1, 2, 3, 4];
const somme = numbers.reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante, 0);
console.log(somme);
// Sortie : 10

// 5find


 const personnes = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Charlie', age: 35 }
];
const personne = personnes.find(p => p.age === 30);
console.log(personne);
// Sortie : { nom: 'Bob', age: 30 }

// 6findIndex


const numbers2 = [1, 2, 3, 4, 5];
const index = numbers2.findIndex(numbers2 => num === 3);
console.log(index);
// Sortie : 2

// 7some


const Numbers3 = [1, 2, 3, 4, 5];
const aPair = nombres.some(Numbers3 => Numbers3 % 2 === 0);
console.log(aPair);
// Sortie : true

// 8every


const n = [2, 4, 6, 8];
const tousPairs = n.every(n => n % 2 === 0);
console.log(tousPairs);
// Sortie : true

// 9includes


const fruits = ['pomme', 'banane', 'mangue'];
const aPomme = fruits.includes('pomme');
console.log(aPomme);
// Sortie : true

// 10sort
const n1 = [4, 2, 5, 1, 3];
n1.sort((a, b) => a - b);
console.log(n1);
// Sortie : [1, 2, 3, 4, 5]

// Méthodes sur les Chaînes de Caractères
// 1charAt


const str = 'Bonjour';
console.log(str.charAt(0));
// Sortie : B

// 2includes
const str1 = 'Bonjour tout le monde';
console.log(str1.includes('tout'));
// Sortie : true

// 3indexOf
const str2 = 'Bonjour tout le monde';
console.log(str2.indexOf('tout'));
// Sortie : 8

// 4replace
const str3 = 'Bonjour tout le monde';
const newStr = str3.replace('Bonjour', 'Salut');
console.log(newStr);
// Sortie : Salut tout le monde

// 5split
const str4 = 'Bonjour tout le monde';
const words = str4.split(' ');
console.log(words);
// Sortie : ['Bonjour', 'tout', 'le', 'monde']

 
// 6toLowerCase

const str5 = 'Bonjour';
console.log(str5.toLowerCase());
// Sortie : bonjour

// 7toUpperCase
const str6 = 'Bonjour';
console.log(str6.toUpperCase());
// Sortie : BONJOUR

// 8trim supprine les espaces

const str7 = '  Bonjour  ';
console.log(str7.trim());
// Sortie : 'Bonjour'


 

 



