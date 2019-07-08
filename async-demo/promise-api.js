const p1 = new Promise((resolve, reject)=> {
  setTimeout(() =>{
    console.log('Async operation 1...');
    resolve(1);
    //reject(new Error('reason failed for operation 1...'));
  }, 2000);
});

const p2 = new Promise((resolve)=> {
  setTimeout(() =>{
    console.log('Async operation 2...');
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2])  // or race as long as one async done
  .then(result => console.log(result))
  .catch(error => console.log('Error', err.message));