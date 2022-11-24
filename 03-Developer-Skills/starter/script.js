"use strict";
/*
const temprature = [4, 5, 7, 3, 10, 23, 9, 3];

const calcAmplitude = function (temps) {
  const temprature = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  return max - min;
};
console.log(calcAmplitude(temprature));

const temprature = [4, 5, 7, 3, 10, 23, 9, 3];

const calcAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};

console.log(calcAvg(temprature));
*/

//challenge

const data1 = [17, 21, 23];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} C in ${i + 1} days ...`;
  }
  console.log("..." + str);
};

console.log(printForecast(data1));
