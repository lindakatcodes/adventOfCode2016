const fs = require('fs');

// Change number on input file before use
const data = fs.readFileSync('../2019 Solutions/inputs/day14input.txt').toString();

// Need an array of strings?
const input = data.split('\r\n');
const recipes = input.map(row => row.split(/,|=>/)); 

console.log (recipes);

let ingredients = {};
let fuelIndex = 0;

// find the recipe for fuel
for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].length; j++) {
    if (recipes[i][j] === '1 FUEL') {
      fuelIndex = i;
    }
    
    let split = recipes[i][j].trim().split(' ');

    if (!ingredients.hasOwnProperty(split[1])) {
      ingredients[split[1]] = 0;
    }
  }
}

console.log(ingredients);