//prompt for user to input flavors
let input = prompt(
  "Please enter a list of comma-separated froyo flavors",
  "enter flavors here"
);

//splits each flavor into an array and trim spaces
const flavors = input.split(",").map((flavor) => flavor.trim().toLowerCase());

// make an object to track flavor counts
const flavorCounts = {};

for (const flavor of flavors) {
  //if flavor already exists, increment count
  if (flavorCounts[flavor]) {
    flavorCounts[flavor]++;
  } else {
    flavorCounts[flavor] = 1;
  }
}

//Output the final tally
console.log(flavorCounts);
