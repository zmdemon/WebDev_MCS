const numbers1 = [4, 11, -5, 17, -10, 8, 56, 0];

const numbers2 = [{
    id: 1, number: 10
}, {
    id: 2, number: -6
}, {
    id: 3, number: 22
}];

const lessThanTen = numbers1.filter(number => number < 10);
const moreThanTen2 = numbers2.filter(numer => numer.number > 10);
const moreThanZero = numbers2.filter(onlyPositive);

function onlyPositive(array) {
        return (array.number !== 0);

}


console.log(lessThanTen);
console.log(moreThanTen2[0]);
console.log(moreThanZero);
