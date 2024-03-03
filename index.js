// EXAMPLE 1 - Check if a Map is Empty in JavaScript

const map1 = new Map();
console.log(map1.size); // 👉️ 0

if (map1.size === 0) {
  // 👇️ this runs
  console.log('✅ map is empty');
} else {
  console.log('⛔️ map is not empty');
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Defining a reusable function

// function mapIsEmpty(map) {
//   return map.size === 0;
// }

// // 👇️ false
// console.log(
//   mapIsEmpty(
//     new Map([
//       ['name', 'bobby'],
//       ['age', 30],
//     ]),
//   ),
// );

// // 👇️ true
// console.log(mapIsEmpty(new Map()));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Check if a Set is Empty in JavaScript

// const set1 = new Set();
// console.log(set1.size); // 👉️ 0

// if (set1.size === 0) {
//   // 👇️ this runs
//   console.log('✅ Set is empty');
// } else {
//   console.log('⛔️ Set is NOT empty');
// }

// ------------------------------------------------------------------

// // EXAMPLE 4 - Defining a reusable function

// function setIsEmpty(set) {
//   return set.size === 0;
// }

// // 👇️ false
// console.log(setIsEmpty(new Set(['bobby', 'hadz'])));

// // 👇️ true
// console.log(setIsEmpty(new Set()));
