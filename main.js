//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // ?
console.log(secondBurger.name); // ?

// un solo oggetto, perchè essendo un oggetto di tipo primitivo senza usare l'operatore spread non può essere copiato e quindi non momento in cui io selezioni in nome e la larghezza dell'oggetto tramite il secondBurgger cambia anche l'oggetto originale cioè hamburger


// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

// Vengono stampati 2 oggetti differenti, visto che l'uso di spread crea una copia semplice dell'oggetto non copiando gli oggetti complessi, quindi in questo caso nel primo sia nel primo che nel secondo console.log verra stampato Salad