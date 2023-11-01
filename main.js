const foodData = require("./food.json");
console.log("List of all food items:");
console.table(foodData);

function filterData(category) {
  const filterdData = foodData.filter((data) => data.category === category);
  console.log(`List of food items with category ${category}: `);
  console.table(filterdData);
}
filterData("Vegetable");
filterData("Fruit");
filterData("Protein");
filterData("Nuts");
filterData("Grain");
filterData("Dairy");


function listCalorie(condition, label) {
  const listedCalorie = foodData.filter(condition);
  console.log(`Food items with ${label}:`);
  console.table(listedCalorie);
}
const above100Calories = (data) => data.calorie > 100;
const below100Calories = (data) => data.calorie < 100;
listCalorie(above100Calories, "calorie above 100");
listCalorie(below100Calories, "calorie below 100");

const high_to_low_protiens = foodData.sort((a, b) => b.protiens - a.protiens);
console.log("food items with highest protien content to lowest: ")
console.table(high_to_low_protiens)

const low_to_high_cab = foodData.sort((a, b) => a.cab - b.cab);
console.log("Food items with lowest cab content to highest: ")
console.table(low_to_high_cab)


/*function sortData(key, order){
  const sortedData = foodData.sort((a, b) =>  {
    if (order === 'low to high') {
      return a.key - b.key;
    } else if (order === 'high to low') {
      return b.key - a.key;
    }
  });
  console.log(`Food items sorted from ${key} ${order}:`);
  console.table(sortedData); 
}
sortData('proteins', 'high to low');
sortData('carb', 'low to high');*/
