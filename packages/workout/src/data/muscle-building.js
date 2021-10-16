// @ts-ignore
const v4 = require('uuid/v4');
const fs = require('fs');

let data = [];
const id = () => v4();

const workouts = [
  {
    key: 'BACK & CALVES',
    days: [1, 8, 15, 22, 29, 36, 43, 50],
  },
  {
    key: 'CHEST & ABS',
    days: [2, 9, 16, 23, 30, 37, 44, 51],
  },
  {
    key: 'LEGS',
    days: [3, 10, 17, 24, 31, 38, 45, 52],
  },
  {
    key: 'ARMS & CALVES',
    days: [4, 11, 18, 24, 32, 39, 46, 53],
  },
  {
    key: 'SHOULDERS & ABS',
    days: [5, 12, 19, 26, 33, 40, 47, 54],
  },
  {
    key: 'REST',
    days: [6, 7, 13, 14, 20, 21, 27, 28, 34, 35, 41, 42],
  },
];

const workout = day => {
  let exercise = workouts
    .filter(workout => workout.days.includes(day))
    .map(workout => workout.key)
    .toString();

  return { id: id(), day: `day-${day}`, exercise };
};

for (let x = 1; x <= 54; x++) {
  data.push(workout(x));
}

fs.writeFileSync(`./src/data/muscle-building.json`, JSON.stringify(data));
console.log('JSON written successfully');
