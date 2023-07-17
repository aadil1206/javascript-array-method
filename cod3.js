const users=[
    {
        id:1,
        name:"aadil",
        isActive:true,
        age:20,
        bool:false
    }, 
    {
        id:2,
        name:"ajaz",
        isActive:false,
        age:28,
        bool:true
    },
    {
        id:3,
        name:"Noor",
        isActive:true,
        age:50,
        bool:true
    },
    {
        id:4,
        name:"sahil",
        isActive:false,
        age:15,
        bool:true
    },
]
//write code to get array of names from given array of users

let array=[]
  users.filter((item)=>!item.bool).
map((item)=>{
    array.push(item.name)
}
)
console.log(array)
// for (let i=0;i<users.length;i++){
//     if(users[i].bool){
//      array.push(users[i].name)}
// }

// users.forEach((item)=> {
//     if(item.bool){
//     array.push(item.name)}
// });
// // users.map((item)=>{
// //     array.push(item.name)
// // })
// console.log(array)