'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
/*
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderFood: function ({ starterIndex, location, quantity }) {
    console.log(
      `Your ${quantity} ${this.starterMenu[starterIndex]} is delivered at ${location}`
    );
  },
  orderPizza: function (ing1, ing2, ing3) {
    console.log(`Your Pizza is ready with ${ing1}, ${ing2}, and ${ing3}`);
  },
};

restaurant.orderFood({
  starterIndex: 2,
  location: 'lassoi',
  quantity: 4,
});
const { starterMenu, categories, openingHours } = restaurant;
console.log(starterMenu, categories, openingHours);

const { starterMenu: menu, categories: tags, openingHours: hours } = restaurant;
console.log(menu, tags, hours);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

const arr = [3, 5, 7];
const newArr = [...arr, 2, 3];
console.log(...newArr);

const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu);

// const ingrediants = [prompt('firstIng'), prompt('2ndIng'), prompt('3rdIng')];
// restaurant.orderPizza(...ingrediants);

const newRestaurant = { ...restaurant, founder: 'harjot', foundedIn: 2020 };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Hot Cococa';
console.log(restaurant, restaurantCopy);

// const arr = [3, 5, 8];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals: function (num1, num2, num3, num4) {
    console.log(
      this.players[0][num1],
      this.players[0][num2],
      this.players[0][num3],
      this.players[0][num4]
    );
  },
};

game.printGoals(2, 4, 6, 5);

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
