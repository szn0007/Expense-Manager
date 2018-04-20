// OBJECT DESTRUCTURING

// const person = {
//   name : 'Sujan',
//   age : 25,
//   location : {
//     city : 'Lalitpur',
//     temp : 5
//   }
// };
//
// const { name = 'Anonymous', age } = person;
// const {city , temp : temperature } = person.location;
//
// console.log(`${name} is ${age} years old`);
// if (city && temperature){
// console.log(`It's ${temperature} degree celcius in ${city}`);
// }

// console.log(`${person.name} is ${person.age} years old`);
// console.log(`It's ${person.location.temp} degree celcius in ${person.location.city}`);

//
// const book = {
//   name : 'Harry Potter Series',
//   Author : 'J.K. Rowling',
//   Publisher : {
//     name : 'Bloomsbury Publishing'
//   }
// };
//
// const { name : publisherName = 'Self Published' } = book.Publisher;
//
// console.log(`${publisherName}`);


// ARRAY DESTRUCTURING

const item = ['Coffee (hot)', '$2.25' , '$2.5', '$2.75'];

const [itemName , , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);
