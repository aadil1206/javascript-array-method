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

users.forEach((item)=> {
    array.push(item.name)
});

//using map function

users.map((item)=>{
    array.push(item.name)
})
 
// write a code to find boolean is true
//using for loop

for (let i = 0; i < users.length; i++) {
    if(users[i].boolean){
    array.push(users[i].name)}
}
//using foreach loop

users.forEach((item)=> {
    if(item.boolean){
    array.push(item.name)}
});
//using map function and filter 

users.filter((item)=>{
    item.boolean
})
.map((item)=>{
    array.push(item.name)
})