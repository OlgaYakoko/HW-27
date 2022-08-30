'use strict'

let obj = {};

const getReversNumb = (str) => {
    return str.split('').reverse().join('');
}

const sum = (str) => {
   return +getReversNumb(str) + +str + '';
}

const getSum = (str) => {
   let result = sum(str);
    if(result !== getReversNumb(result)) return sum(result + result);
    else{
      return obj = {
        step: null,
        palyndrom: result,
      }
    }
}

console.log(getSum('132'));

