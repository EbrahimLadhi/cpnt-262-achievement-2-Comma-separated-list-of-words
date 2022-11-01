const fishArray = [
  "Goldfish",
  "Blackfish",
  "Shark",
  "Jellyfish",
  "Crab",
  "Lobster",
];

const commaSpace = fishArray.join(", ");

let fish = document.getElementById("fishArray");

fish.innerHTML = commaSpace;
fish.innerHTML = commaSpace.replace("Lobster", "and Lobster");


console.log(fishArray.toString().replace("Lobster", "and Lobster"));


console.log('My favorite fish is', commaSpace);
console.log(fishArray.toString().split())
console.log(fishArray.join(':').split(':'))
console.log(fishArray.join(' + '))

for(i = 0; i < fishArray.length; i++){
    console.log("fish" , i, "is", fishArray[i]);
    if(fishArray[i] == "Lobster"){
      console.log("and Lobster");
    }
}

let word = "fish";

for(i = 0; i < word.length; i++){
    console.log(word[i]);
}

for(x of fishArray){
  console.log(x);
}
 