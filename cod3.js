const users = [
    {
        id: 1,
        name: "aadil",
        isActive: true,
        age: 20,
        boolean: false
    },
    {
        id: 2,
        name: "ajaz",
        isActive: false,
        age: 28,
        boolean: true
    },
    {
        id: 3,
        name: "Noor",
        isActive: true,
        age: 50,
        boolean: false
    },
    {
        id: 4,
        name: "sahil",
        isActive: false,
        age: 15,
        boolean: true
    },
]
//write code to get array of names from given array of users

let array = []
//using for loop
for (let i = 0; i < users.length; i++) {
    array.push(users[i].name)
}
//using foreach loop

users.forEach((item) => {
    array.push(item.name)
});

//using map function

users.map((item) => {
    array.push(item.name)
})

// write a code to find boolean is true
//using for loop

for (let i = 0; i < users.length; i++) {
    if (users[i].boolean) {
        array.push(users[i].name)
    }
}
//using foreach loop

users.forEach((item) => {
    if (item.boolean) {
        array.push(item.name)
    }
});
//using map function and filter 

users.filter((item) => {
    item.boolean
})
    .map((item) => {
        array.push(item.name)
    })

//write a code for age greater than 20
//using for loop

for (let i = 0; i < users.length; i++) {
    if (users[i].age > 20) {
        array.push(users[i].age)
    }
}
//using foreach loop

users.forEach((item) => {
    if (item.age > 20) {
        array.push(item.age)
    }
});
//using map function and filter 

users.filter((item) => {
    item.age > 20
})
    .map((item) => {
        array.push(item.age)
    })
// write a function to sort letter

let letters = ['a', 'c', 'b', 'x', 'd', 'f', 'Z', 'M', 'S']
letters.sort();
// console.log(letters)
let number = [9, 4, 6, 7, 8, 10, 1, 20]
number.sort();
// console.log(number)

//sort it effectively ascending order
let number1 = [9, 4, 6, 7, 8, 10, 1, 20]
number1.sort((a, b) => {
    return a - b
});
// console.log(number1)

//sort it effectively descending order
let number2 = [9, 4, 6, 7, 8, 10, 1, 20]
number2.sort((a, b) => {
    return b - a
});
// console.log(number2)
const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
];

// sort with value
items.sort((a, b) => {
    return a.value - b.value
})
//   console.log(items)

//sort with names
items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;

});
