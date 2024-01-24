// array destructing
/*
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);*/

const restaurant = {
  name: "Zaitoon",
  location: "velacherry, navalur, anna nagar",
  categories: ["North-Indian", "south-Indian", "Thali", "baffet"],
  startermenu: ["honey-chicken", "dragon-chicken", "chilli-chicken", "paneer"],
  mainmenu: ["biryani", "meals", "combos"],

  order: function (straterIndex, mainIndex) {
    return [this.startermenu[straterIndex], this.mainmenu[mainIndex]];
  },
  orderDelivery: function ({
    time = "10",
    address,
    starterIndex,
    mainIndex = 0,
  }) {
    console.log(
      `Order Recieved! ${this.startermenu[starterIndex]} and ${this.mainmenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
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
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const newArr = [5, 6, ...arr];
// console.log(newArr);

const newMenu = [...restaurant.mainmenu, "butter-non"];
// console.log(newMenu);

//copy array or shallow copy
const mainmenucCopy = [...restaurant.mainmenu];

// merge 2 or more arrays

const joinArrays = [...restaurant.startermenu, ...mainmenucCopy];
console.log(joinArrays);
/*
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

//recieving two variables froma a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested destructuring
const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values  useful in some API call's
const [p = 1, q = 0, r = 19] = [8];
console.log(p, q, r);


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);

const { menu = [], startermenu: starters = [] } = restaurant;

console.log(menu, starters);

//mutatting
let e = 111;
let d = 99;
const obj = { a: 23, b: 7, c: 14, d: 55, e: 89 };
({ e, d } = obj);
console.log(e, d);

//nested objects destructuring

const {
  fri: { open: o, close: c },
} = openingHours;

console.log(o, c);

//passing an obj in a function which is present in side the obj

restaurant.orderDelivery({
  time: "22:30",
  address: "chennai",
  mainIndex: 2,
  starterIndex: 2,
});

//we can set default values too
restaurant.orderDelivery({
  address: "Nellore",
  starterIndex: 2,
});
*/
