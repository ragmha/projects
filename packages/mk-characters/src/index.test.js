var expect = require('chai').expect;
var mkCharacters = require('./index');


describe('mk-characters', function() {

  describe('all', function() {

    it('should be an array of strings', function() {
      expect(mkCharacters.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Scorpion`', function() {
      expect(mkCharacters.all).to.include('Scorpion');
    });

  });

  describe('random', function() {

    it('should return a random item from mkCharacters.all', function() {
      var randomItem = mkCharacters.random();
      expect(mkCharacters.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function(){
      var randomItems = mkCharacters.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(mkCharacters.all).to.include(item);
      });
    });
  });

});
