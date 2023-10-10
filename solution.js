const squareNumber = num => Math.pow(num,2);

const square = (nums, callback) => {
    let result = [];
    nums.forEach(num => {
        result.push( callback(num) );
    });
    return result;
}


const array = [1, 2, 3, 4, 5]
console.log( square(array,squareNumber) )// returns [1, 4, 9, 16, 25]