var uniqueRandomArray = require('unique-random-array');
var mkCharacters = require('./mk-characters.json');
var getRandomItem = uniqueRandomArray(mkCharacters);

module.exports = {
  all : mkCharacters,
  random : random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  }else {
    var randomItems = [];
    for (var i = 0; i < number ; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
