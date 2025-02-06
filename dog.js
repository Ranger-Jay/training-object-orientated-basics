var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};

var bark;
if (dog.weight > 20) {
    dog.bark = "WOOF WOOF";
} else {
    dog.bark = "woof woof";
}

var speak = dog.name + " says " + dog.bark + " when he wants to " + dog.activity;
console.log(speak);


// dog bark is not updating... undefined. why?
// got it.  it was not written as dog.bark

// test object delete

var testObject = {
    first: 1,
    second: 2,
    third: 3
};

console.log(testObject);
delete testObject.second;
console.log(testObject);
console.log(typeof testObject);
console.log(Object.keys(testObject).length);
