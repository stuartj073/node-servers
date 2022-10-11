// rest and spread application

const toArray = (...args) => {
    return args;
}

// console.log(toArray(1, 2, 3, 4, "ayeye"));


const person  = {
    name: "James",
    s_name: "stua"
}

const person_1 = {...person}; // spread can be used for objects too

person_1.name = "ste";

console.log(person_1);


// rest operations

const toArray1 = (...args) => {
    return args;
}

console.log(toArray1(1, 2, 3, 4, 5))

