/// 6. Create a custom Error class called ValidationError that extends the built-in Error class. Use this class to throw an error called ValidationError with a custom error message when input validation fails.
class ValidatioError extends Error {
    constructor (msg, code) {
        super(msg);
        this.code = code;
    }
}

const customPromise = new Promise((resolve, reject) => {
    const x = 5;
    resolve(x);
})

customPromise.then((resolvedX) => {
    if (resolvedX === 5) throw new ValidatioError('custom error', 5); 
    console.log('check');
}).catch((err) => {
    console.log('caught', err);
})