class Stat {
    constructor(data){
        this.array = data;
        this.arrayLength = data.length;
    }
    get mean () {
        let sum = 0;
        this.array.forEach(x => sum += x);

        return sum / this.arrayLength;
    }

    get median () {
        return this.arrayLength % 2 === 0
            ? (this.array[this.arrayLength / 2 - 1] + this.array[this.arrayLength / 2]) / 2
            : this.array[Math.floor(this.arrayLength / 2)];
    }

    get mode () {
        const arrayObj = {};
        this.array.forEach(elem => {
            if (!arrayObj[elem]) {
                arrayObj[elem] = 0;
            }
            arrayObj[elem]++;
        })

        let result = [];
        let max = 0;

        for (let key in arrayObj) {
            if (arrayObj[key] > max) {
                result = [key];
                max = arrayObj[key];
            } else if (arrayObj[key] === max) {
                result.push(key);
            }
        }

        if (Object.keys(arrayObj).length === result.length) {
            result = [];
        }
        return result;
    }

    get range () {
        return this.array[this.arrayLength - 1] - this.array[0];
    }
    
}

let numbers = new Stat([13, 18, 13, 14, 13, 16, 14, 21, 13]);
numbers.array.sort((a, b) => a - b);

console.log(`Mean: ${numbers.mean}`)
console.log(`Median: ${numbers.median}`)
console.log(`Mode: ${numbers.mode}`)
console.log(numbers.mode)
console.log(`Range: ${numbers.range}`)


    // const mean = array => {
    //     let sum = 0;
    //     array.forEach(x => sum += x);

    //     return sum / arrayLength;
    // }

    // const median = array => {
    //     return arrayLength % 2 === 0
    //         ? (array[arrayLength / 2 - 1] + array[arrayLength / 2]) / 2
    //         : array[Math.floor(arrayLength / 2)];
    // }

    // const mode = array => {
    //     const arrayObj = {};
    //     array.forEach(elem => {
    //         if (!arrayObj[elem]) {
    //             arrayObj[elem] = 0;
    //         }
    //         arrayObj[elem]++;
    //     })

    //     let result = [];
    //     let max = 0;

    //     for (let key in arrayObj) {
    //         if (arrayObj[key] > max) {
    //             result = [key];
    //             max = arrayObj[key];
    //         } else if (arrayObj[key] === max) {
    //             result.push(key);
    //         }
    //     }

    //     if (Object.keys(arrayObj).length === result.length) {
    //         result = [];
    //     }
    //     return result;
    // }

    // const range = array => {
    //     return array[arrayLength - 1] - array[0];
    // }

// const array = [8, 9, 10, 10, 10, 11, 11, 11, 12, 13];
// let arrayLength = array.length;

// console.log(`Data: ${array}`);
// array.sort((a, b) => a - b);
// console.log(`Sort: ${array}`);
// console.log(`Mean: ${mean(array).toFixed(2)}`);
// console.log(`Median: ${median(array)}`);
// console.log(`Mode: ${mode(array)}`);
// console.log(`Range: ${range(array)}`);
