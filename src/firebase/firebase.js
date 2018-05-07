import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyC9LVMxBEjeULE8eaWbtCyx8Ve6vvt-QTQ",
    authDomain: "expensify-fed85.firebaseapp.com",
    databaseURL: "https://expensify-fed85.firebaseio.com",
    projectId: "expensify-fed85",
    storageBucket: "expensify-fed85.appspot.com",
    messagingSenderId: "832868909906"
  };

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses')
  .on('child_changed', (snapshot) => {
    console.log(snapshot.key , snapshot.val());
  });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     // console.log(snapshot.val());
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
          // id : childSnapshot.key
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });
//
// const onValueChange = database.ref('expenses')
//       .on('value', (snapshot) => {
//         const expenses = [];
//
//         // console.log(snapshot.val());
//         snapshot.forEach((childSnapshot) => {
//           expenses.push({
//             ...childSnapshot.val()
//           });
//         });
//         console.log(expenses);
//       });
//

// database.ref('expenses').push(
//   {
//     description : 'Lunch',
//     note : '12pm Lunch at Haji\'s',
//     amount : 900,
//     createdAt : 10000
//   });
// database.ref('expenses').push(
//   {
//     description : 'Petrol',
//     note : 'Banglamukhi Petrol Pump',
//     amount : 1000,
//     createdAt : 10010
//   });
// database.ref('expenses').push(
//   {
//     description : 'Laphing',
//     note : 'At Saugal Patan',
//     amount : 80,
//     createdAt : 100030
//   }
// );

// database.ref().set({
//   name : 'Sujan Shrestha',
//   age : 25,
//   stressLevel : 6,
//   job : {
//     title : 'Software Engineer',
//     company : 'Verscend Technologies'
//   },
//   location : {
//     city : 'Kathmandu',
//     country : 'Nepal'
//   }
// }).then(() => {
//   console.log('Data is Saved');
// }).catch((e) => {
//   console.log('This failed!!' , e);
// });

// database.ref('attributes').set({
//     height : '6 ft 1 in',
//     weight : 93
//  }).then(() => {
//    console.log('Attributes Added');
//  }).catch((e) => {
//    console.log('Attrubutes couldnot be added!' , e);
//  });

// database.ref().remove().then(() => {
//   console.log('Attributes removed!!');
// }).catch((e) => {
//   console.log('Cannot Remove!!' , e);
// });

// database.ref().update({
//   stressLevel : 9,
//   'job/company' : 'Enliv IT',
//   'location/city' : 'Lalitpur'
// });

// database.ref('location ')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error Fetching data', e);
//   });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error Fetching!!' , e);
// });
//
// setTimeout(() => {
//   database.ref('age').set(28);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);
