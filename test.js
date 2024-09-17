// const numbers = [1, 2, 2, 3, 4, 4, 5];

// const ans = new Map();
// numbers.map( number => ans.set( number, 1) );
// console.log(ans[1]);



// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { b: 4, d: 5 };

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// const arr = [1, 2, 3, 4];
// let sum = 0;
// arr.map( num => sum += num*2);
// console.log(sum);

// const users = [
//     { name: 'Alice', age: 25, hobbies: ['reading', 'cycling'] },
//     { name: 'Bob', age: 17, hobbies: ['video games', 'skateboarding'] },
//     { name: 'Charlie', age: 30, hobbies: ['swimming', 'running'] }
//   ];

//   const filteredUserHobbies = (users.filter( user => user.age > 18).map( user => user.hobbies));
//   console.log(filteredUserHobbies.flat());

// const products = [
//     { name: 'Shirt', category: 'Clothing' },
//     { name: 'Pants', category: 'Clothing' },
//     { name: 'Laptop', category: 'Electronics' },
//     { name: 'Phone', category: 'Electronics' },
//     { name: 'Hat', category: 'Accessories' }
//   ];

// const group = new Map;
// products.map( product =>group.set( product.category, product.name));
// console.log(group);

// const salesData = [
//     {
//       region: 'North America',
//       products: [
//         { name: 'Laptop', unitsSold: 100 },
//         { name: 'Phone', unitsSold: 200 }
//       ]
//     },
//     {
//       region: 'Europe',
//       products: [
//         { name: 'Laptop', unitsSold: 150 },
//         { name: 'Phone', unitsSold: 100 }
//       ]
//     },
//     {
//       region: 'Asia',
//       products: [
//         { name: 'Laptop', unitsSold: 200 },
//         { name: 'Tablet', unitsSold: 150 }
//       ]
//     }
//   ];
  
//   let type = [];
//   salesData.map( data => products.name)

// const words = ["this","apple","is","sweet","sweet","this","apple","is","sour"];

// var map = new Map();
// for(const word of words){
//     if( map.has(word) ){
//         map.set(word, map.get(word)+1);
//     }
//     else map.set(word,1);
// }
// const ans = [];
// map.forEach((value,key) => value == 1 ? ans.push(key) : null)
// console.log(ans);

const person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    },
    job: {
        title: "Developer",
        company: "Tech Corp"
    }
};
  
  let text = Object.entries(person);
  console.log(text);