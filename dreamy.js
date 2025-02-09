function makeBabe() {
    var ethnicity = ["White", "Black", "Latina", "Asian", "Mixed"];
    var height = ["Tall", "Short", "Very-Tall", "Very-Short", "Medium"];
    var age = ["22 year-old", "25 year-old", "28 year-old", "31 year-old", "34 year-old"];
    var hair = ["Ginger", "Blonde", "Brunette", "Light-Brown", "Platinum-Blonde"];
    var single = [true, false];
    var rand1 = Math.floor(Math.random() * ethnicity.length);
    var rand2 = Math.floor(Math.random() * height.length);
    var rand3 = Math.floor(Math.random() * age.length);
    var rand4 = Math.floor(Math.random() * hair.length);
    var rand5 = Math.floor(Math.random() * 100000) + 1000;
    var rand6 = Math.floor(Math.random() * 2);
    var babe = {
    ethnicity: ethnicity[rand1],
    height: height[rand2],
    age: age[rand3],
    hair: hair[rand4],
    income: rand5,
    single: single[rand6],
    mileage: 0
    };
    return babe;
    }
    function displayBabe(babe) {
    console.log("Your new partner is a " + babe.height + " " + babe.age + " " + babe.ethnicity + " " + "beauty, with " + babe.hair + " " + "hair");
    console.log("They have an income of " + babe.income + " dollars");}
    var babeToMeet = makeBabe();
    displayBabe(babeToMeet);