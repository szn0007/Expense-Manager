import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

//   console.log("NODE_ENV",process.env.NODE_ENV);
//   console.log("API_KEY",process.env.FIREBASE_API_KEY);
// console.log(config);

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase , googleAuthProvider, database as default};

// database.ref('expenses')
//   .on('child_changed', (snapshot) => {
//     console.log(snapshot.key , snapshot.val());
//   });

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
