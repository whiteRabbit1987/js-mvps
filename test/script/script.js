const fruits = [{name: 'apple', color: 'red', calories: 95}, 
                {name: 'banana', color: 'yellow', calories: 105}, 
                {name: 'orange', color: 'orange', calories: 45}, 
                {name: 'pineapple', color: 'yellow', calories: 37}];

const yellowFruits = fruits.filter(fruit => fruit.color === 'yellow');

console.log(yellowFruits);