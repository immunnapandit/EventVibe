// Create a promise
const myPromise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation
    setTimeout(() => {
        const randomNumber = Math.random();
        
        // Resolve the promise if the random number is greater than 0.5
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            // Reject the promise if the random number is less than or equal to 0.5
            reject(new Error('Random number is too small'));
        }
    }, 1000);
});

// Consume the promise
myPromise
    .then((result) => {
        console.log('Promise resolved with result:', result);
    })
    .catch((error) => {
        console.error('Promise rejected with error:', error);
    });