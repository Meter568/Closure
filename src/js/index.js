// 1
function createLogger(prefix) {
    return function strLogger(message) {
        console.log(`${prefix}: ${message}`);
    };
};

const authLogger = createLogger('AUTH');

const apiLogger = createLogger('API');

authLogger('User logged in');

apiLogger('Request failed');

// 2
function createLimiter(limit) {
    if(typeof limit !== 'number' || Number.isNaN(limit)) {
        return function() {
            return 'Enter a number, please.';
        }
    };

    if(limit < 0) {
        return function() {
            return 'Enter a positive number.'
        }
    };

    let count = 0;

    return function() {
        if (count < limit) {
            count++;
            return 'Ok';
        } else {
            return 'Error';
        }
    };
};

const limited = createLimiter(2);

console.log(limited());

console.log(limited());

console.log(limited());