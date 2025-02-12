//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? 

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // ?
// console.log(secondBurger.name); // ?

// un solo oggetto, perchè essendo un oggetto di tipo primitivo senza usare l'operatore spread non può essere copiato e quindi non momento in cui io selezioni in nome e la larghezza dell'oggetto tramite il secondBurgger cambia anche l'oggetto originale cioè hamburger


// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// const hamburger = {
//     name: "Cheese Burger",
//     weight: 250,
//     ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
// };

// const secondBurger = { ...hamburger };
// secondBurger.ingredients[0] = "Salad";

// console.log(hamburger.ingredients[0]); // ?
// console.log(secondBurger.ingredients[0]); // ?

// Vengono stampati 2 oggetti differenti, visto che l'uso di spread crea una copia semplice dell'oggetto non copiando gli oggetti complessi, quindi in questo caso nel primo sia nel primo che nel secondo console.log verra stampato Salad



// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

// In questo caso sono stati salvati in memoria 9 oggetti di cui 6 clonati tramite lo structuredClone

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// // Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

// il metodo migliore per clonare l oggetto chef è JSON.parse(JSON.stringify()), perchè all' interno dell'oggetto chef è contenuto un oggetto che chiede di loggare una semplice stringa
// il metodo migliore per l'oggetto restaurant inceve è lo structuredClone, perche contiete un oggetto complesso come la data che non verrebbe copiata in modo corretto, ma verrebbe traformata in una semplice stringa