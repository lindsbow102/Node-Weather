const asyncAdd = (a, b) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers!');
            }
        }, 1500);        
    })
};

asyncAdd(5, 7).then((res) => {
    console.log('Result:', res);
    return asyncAdd(res, 34); // Need to chain another then statement 
}).then((newRes) => { //chaining multiple promises
    console.log('New Result:', newRes);
}).catch((error) => {
    console.log(error);
});

// const somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('Hey. It worked.'); //message
//         reject('Unable to fulfill promise');
//     }, 5000);    
// });

// somePromise.then((message) => {
//     console.log('Success!', message);
// }).catch((errorMessage) => {
//     console.log('Failed!', errorMessage);
// })