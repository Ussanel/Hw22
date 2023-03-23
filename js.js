// Завдання1

// let mike = ['red', 'blue', 'yellow', 'black', 'white'];
// let nikola = ['cat', 'dog', 'bird'];
// let tom = ['a', 'b', 'c', 'd'];
// // // 1.1
// console.log(mike[2]);
// // // 1.2
// let alex = nikola;
// console.log(alex);
// // 1.3
// mike.pop();
// mike.pop();
// console.log(mike)
// // 1.4
// console.log(tom.length)

// Завдання2

// let a =[ 5, 3, -4, 25, 32, -16, 6];
// let b =[ 21, -30, 9, 5, 12, -19, 5, 25,];
// console.log(a.length);
// console.log(b.length);
// function comparing(){
//     if(a.length>b.length){
//         console.log('a>b')
//     }
//     else if(a.length<b.length){
//         console.log('a<b')
//     }
//     else if(a.length=b.length){
//         console.log('a=b')
//     }
// };
// comparing()

// Завдання3

// let pharase ='I am learning JavaScript right now'

// console.log(pharase.split(' '))

// Завдання4

// const a = [5, 3, 8, 5, 3, 2, 1, 2];
// Метод 1
// let b = a.filter((item,index) => {
//   return  a.indexOf(item) == index
// })
// console.log (b)
// Метод2
// const b = [];
// a.forEach((item) => {
//     if (!b.includes(item)){
//         b.push(item);
//     }
// })
// console.log (b)
// // Завдання5
// let users = [{id:1, age: 17},
//     {id:2, age: 18}, 
//     {id:3, age: 19}, 
//     {id:4, age: 21}, 
//     {id:5, age: 17}, 
//     {id:6, age: 20}, 
//     {id:7, age: 25},  ]
// let notadults= users.filter(item=> item.age>18 && item.age<21);
// console.log(notadults);
// notadults.forEach(function(iteam,index){
// console.log(notadults[index]['id'])
// })
