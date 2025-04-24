//prompt for user to input flavors
let input = prompt(
  "Please enter a list of comma-separated froyo flavors",
  "enter flavors here"
);

//splits each flavor into an array
const flavors = input.split(",");

//functions to total each ordered flavor (added an or statement to include if user adds a space between flavors)
function vanillaTotal(flavors) {
  let sum = 0;
  for (let i = 0; i < flavors.length; i++)
    if (flavors[i] == "vanilla" || flavors[i] == " vanilla") {
      sum += 1;
    } else sum += 0;
  return sum;
}
function strawberryTotal(flavors) {
  let sum = 0;
  for (let i = 0; i < flavors.length; i++)
    if (flavors[i] == "strawberry" || flavors[i] == " strawberry") {
      sum += 1;
    } else sum += 0;
  return sum;
}
function coffeeTotal(flavors) {
  let sum = 0;
  for (let i = 0; i < flavors.length; i++)
    if (flavors[i] == "coffee" || flavors[i] == " coffee") {
      sum += 1;
    } else sum += 0;
  return sum;
}

//object to arrange the totals of each flavor ordered
const flavorsTotal = {
  vanilla: vanillaTotal(flavors),
  strawberry: strawberryTotal(flavors),
  coffee: coffeeTotal(flavors),
  other: otherTotal(flavors),
};
//log to display totals in the console
console.log(flavorsTotal);
