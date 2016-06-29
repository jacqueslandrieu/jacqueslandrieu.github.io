//step #1
var animal = {};
animal.species = "Snake";
animal["name"] = "Black Mamba";
animal["noises"] = [ ];
console.log(animal);
 
//step #2   
var noises = [ ];
noises[0] = "Hiss";
noises.push("Rattle");
noises.unshift("Strike");
noises[noises.length] = "Slither";
console.log(noises.length-1);
console.log(noises[noises.length-1]);
console.log(noises);

//step #3
animal.noises = noises;
noises.push("Soft"); 
console.log(animal.noises);
console.log(animal.name);

//step #4
var animals = [ ];
animals.push(animal);
console.log(animals);
var duck = {
    species: 'duck',
    name: 'Jerome', 
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};
animals.push(duck);
console.log(animals);

var bear = {
    species: 'bear',
    name: 'Jorah', 
    noises: ['Kha', 'lees', 'iiii', '!!!!!']
};
animals.push(bear);
console.log(animals);

var dog = {
    species: 'dog',
    name: 'Sandor', 
    noises: ['Give', 'me', 'the', 'chickens']
};
animals.push(dog);
console.log(animals);
console.log(animals.length);

// Step 7
var friends = [ ]; //I chose this because it is easily returnable
function getRandomAnimal() {
  return animals [Math.floor(Math.random() * animals.length)];
}
friends.push(getRandomAnimal().name);
console.log(friends);
animal.friends = friends;

var search = function (nameOfAnimal){
    for (var i = 0; i < animals.length; i++) {
        if (nameOfAnimal === animals[i].name){
            return animals[i];
        }
    }
    return null;
}