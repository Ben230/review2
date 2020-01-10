var sumModule = require('../src/sumCalc.js');

var Sum = sumModule.Sum;


describe('make sum', function() {
  var calculator;

  beforeEach(function(){
    calculator = new Sum;
  });

  it('returns 1 as a string and 1 as a number for input of 1', function(){
    expect(calculator.calculate('1')).toEqual(['1', 1]);
  });
});
