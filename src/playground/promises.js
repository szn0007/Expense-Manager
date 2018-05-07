const promise = new Promise((resolve , reject ) => {
  setTimeout (() => {
    // resolve({
    //   name : 'Sujan Shrestha',
    //   age : 25
    // });
    reject ('Something Went Wrong!');
  }, 5000);


});

console.log('before');

promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

console.log('after');
