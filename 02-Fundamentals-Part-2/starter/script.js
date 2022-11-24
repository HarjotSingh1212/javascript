"use strict";
/*function describeCountry(country, population, capitalCity) {
    const myCountry = `${country} has ${population} people and its capital city is ${capitalCity}`
    return myCountry;
}

const countryDescription = describeCountry("india", 140, 'delhi');
console.log(countryDescription);


// function declartion
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentage = percentageOfWorld1(140);
console.log(percentage);

// function expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
const percentage1 = percentageOfWorld2(140);
console.log(percentage1);

//Arrow function
const percentageOfWorld3 = population => (population / 7900) * 100;
const percentage3 = percentageOfWorld3(140);
console.log(percentage3);



const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} people which is about ${percentage} of the world`;
    return description;
}
console.log(describePopulation("india", 140));


const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        return `dolphin win ${avgDolphins} vs ${avgKoalas}`;
    }
    else if (avgKoalas >= 2 * avgDolphins) {
        return `Koalas win ${avgKoalas} vs ${avgDolphins}`;
    } else {
        return `No winner`;
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));



const population1 = [140, 150, 42, 34];
console.log(population1[population1.length - 1]);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}
const percentages = [percentageOfWorld2(population1[0]), percentageOfWorld2(population1[1]), percentageOfWorld2(population1[2]), percentageOfWorld2(population1[3])]
console.log(percentages);


const neighbours = ["Pakistan", "Nepal", "Bhutan", "Srilanka", "Bangladesh"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);


if (neighbours.includes("Germany")) {
    console.log("central European country");
} else {
    console.log('Probably not a central European country :D');
}
console.log(neighbours.indexOf("Srilanka"));
neighbours[3] = "Sri Lanka";
console.log(neighbours);


const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
    return tip;
}
console.log(calcTip(100));

const bill = [125, 555, 44];
console.log(bill);
const tips = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];
console.log(tips);

const total = [tips[0] + bill[0], tips[1] + bill[1], tips[2] + bill[2]];
console.log(total);

const harjot = {
    firstname: "harjot",
    lastname: "tiwana",
    age: 2022 - 1991,
    job: "teacher",
    friends: ["Aneet", "Anshul", "preet"]
}
console.log(harjot);
console.log(harjot.firstname);
console.log(harjot["age"]);

harjot.location = "india";
console.log(harjot);

console.log(`${harjot.firstname} has ${harjot.friends.length} and his best friend is called ${harjot.friends[0]}`);

const myCountry = {
  country: "india",
  capital: "delhi",
  language: "hindi",
  population: 140,
  neighbours: ["pakistan", "nepal", "bangladesh", "srilanka"],
};
console.log(myCountry);
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital} :D `
);

myCountry.population = 142;
console.log(myCountry);
myCountry["population"] = 140;
console.log(myCountry);


const harjot = {
  firstname: "harjot",
  lastname: "tiwana",
  birthYear: 1991,
  job: "teacher",
  friends: ["Aneet", "Anshul", "preet"],
  hasDriversLicense: true,
  //   calcAge: function (birthYear) {
  //     return 2022 - birthYear;
  //   },
  //   calcAge: function () {
  //     return 2022 - this.birthYear;
  //   },
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstname} is a ${this.age} years old ${this.job} and has ${
      this.hasDriversLicense === true ? "a" : "not"
    } drivers license`;
  },
};
console.log(harjot.calcAge());
console.log(harjot.age);
console.log(harjot.getSummary());


const myCountry = {
  country: "india",
  capital: "delhi",
  language: "hindi",
  population: 140,
  neighbours: ["pakistan", "nepal", "bangladesh", "srilanka"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital} :D`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};
console.log(myCountry.describe());
console.log(myCountry.checkIsland());

//Challenge 3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

const higherBMI =
  mark.BMI > john.BMI
    ? `${mark.fullName}'s BMI (${mark.BMI}) is higher than the ${john.fullName}'s BMI (${john.BMI})`
    : `${john.fullName}'s BMI (${john.BMI}) is higher than the ${mark.fullName}'s BMI(${mark.BMI})`;

console.log(higherBMI);

for (let i = 1; i <= 50; i++) {
  console.log(`voter number ${i} is currently voting`);
}


const population1 = [140, 150, 42, 34];
const percentages2 = [];
for (let i = 0; i < population1.length; i++) {
  percentages2.push((population1[i] / 7900) * 100);
  // percentages2[i] = (population1[i] / 7900) * 100;
  console.log(population1[i]);
}

console.log(percentages2);

const listOfNeighbours = [
  ["canada", "maxico"],
  ["spain"],
  ["norway", "sweden", "rusia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
  for (let y = 0; y < listOfNeighbours[i].length; y++)
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);

const population1 = [140, 150, 42, 34];
const percentages3 = [];
let i = 0;
while (i < population1.length) {
  console.log(population1[i]);
  i++;
  percentages3.push((population1[i] / 7900) * 100);
}

console.log(percentages3);

*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const total = [];

const calcTip = function (bill) {
  const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
  return tip;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  total.push(calcTip(bills[i]) + bills[i]);
}

console.log(tips, total);

const calcAverage = function (arr) {};

const measure = promt();
