const checkString = function (char) {
   const regex = /[a-zA-Z]/;
   if (!!regex.test(char)) return char;
};

function firstNonRepeatingChar(str) {
   const map = {};

   for (const char of str) {
      const strNew = checkString(char);
      if (strNew) {
         map[strNew] = (map[strNew] || 0) + 1;
      }
   }

   for (const char of str) {
      if (map[char] === 1) {
         return char;
      }
   }

   return null;
}

const input = 'abacdbef';
const result = firstNonRepeatingChar(input);

// console.log(result);

const ocElement = function (arr) {
   let map = new Map();
   let oddElement1 = null,
      oddElement2 = null;

   for (let num of arr) map.set(num, (map.get(num) || 0) + 1);

   for (let [num, count] of map.entries()) {
      if (count % 2 !== 0) {
         if (!oddElement1) {
            oddElement1 = num;
         } else if (!oddElement2) {
            oddElement2 = num;
         }
      }
   }

   return {
      oddElement1,
      oddElement2,
   };
};

const arr = [4, 3, 6, 2, 4, 2, 3, 4, 3, 3];
// console.log(ocElement(arr));

function printSpiralMatrix(number) {
   let num = number * number;
   const matrix = [];
   for (let i = 0; i < number; i++) {
      matrix.push(Array(number).fill(0));
   }

   for (let i = 0; i < Math.ceil(number / 2); i++) {
      for (let j = i; j < number - i; j++) {
         matrix[i][j] = num--;
      }

      for (let j = i + 1; j < number - i; j++) {
         matrix[j][number - i - 1] = num--;
      }

      for (let j = number - i - 2; j >= i; j--) {
         matrix[number - i - 1][j] = num--;
      }

      for (let j = number - i - 2; j > i; j--) {
         matrix[j][i] = num--;
      }
   }

   for (let row of matrix) {
      console.log(row.join(' '));
   }
}

// Example usage
const N = 5;
printSpiralMatrix(N);
