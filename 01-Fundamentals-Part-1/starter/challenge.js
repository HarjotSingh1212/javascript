
// const johnMass = 92;
// const johnHeight = 1.95;
// const markMass = 78;
// const markHeight = 1.69;
// const johnBmi = johnMass / johnHeight ** 2;
// const markBmi = markMass / markHeight ** 2;
// console.log(johnBmi, markBmi);
// const isHigherBmi = markBmi > johnBmi;
// console.log(isHigherBmi);
// if (markBmi > johnBmi) {
//     console.log(`Mark's BMI is higher than John's BMI`);
// } else {
//     console.log(`John's BMI is higher than Mark's!`);
// }

// console.log(`Mark's BMI is ${markBmi} is higher than John's ${johnBmi}`);

// const avgDolphins = (98 + 90 + 87) / 3;
// const avgKoalas = (99 + 94 + 93) / 3;
// console.log(avgDolphins, avgKoalas);
// if (avgDolphins > avgKoalas && avgDolphins > 100) {
//     console.log("Dolphins are winners");
// } else if (avgKoalas > avgDolphins && avgKoalas > 100) {
//     console.log("Koalas are winners");
// } else if (avgDolphins === avgKoalas && avgDolphins > 100 && avgKoalas > 100) {
//     console.log("Both are winner");
// } else {
//     console.log("No one is the winner");
// }

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(tip);
console.log(` The bill was ${bill}, and tip was ${tip} and the total value ${bill + tip}`);