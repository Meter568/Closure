// 1
function createLogger(prefix) {
    return function strLogger(message) {
        console.log(`${prefix}: ${message}`);
    };
}

const authLogger = createLogger("AUTH");

const apiLogger = createLogger("API");

authLogger("User logged in");

apiLogger("Request failed");

// 2
function createLimiter(limit) {
    if (typeof limit !== "number" || Number.isNaN(limit)) {
        return function () {
            return "Enter a number, please.";
        };
    }

    if (limit < 0) {
        return function () {
            return "Enter a positive number.";
        };
    }

    let count = 0;

    return function () {
        if (count < limit) {
            count++;
            return "Ok";
        } else {
            return "Error";
        }
    };
}

const limited = createLimiter(2);

console.log(limited());

console.log(limited());

console.log(limited());

// 3
function createFilter(callbackfn) {
    return function (array) {
        return array.filter(callbackfn);
    };
}

const arrNumb1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrNumb2 = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const getEvenNumbers = createFilter((el) => el % 2 === 0);
console.log(getEvenNumbers(arrNumb1));

const getGreateTenNumbers = createFilter((el) => el > 10);
console.log(getGreateTenNumbers(arrNumb2));