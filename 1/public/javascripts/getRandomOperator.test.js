const getRandomOperator = require('./getRandomOperator');

describe('getRandomOperator', () => {
  it('should return a random operator when difficulty is "incremental" and scoreInt is greater than or equal to 10', () => {
    const difficulty = 'incremental';
    const scoreInt = 10;
    const operator = getRandomOperator(difficulty, scoreInt);
    expect(operator).toMatch(/[\+\-\*\/]/); // Operator should be one of '+', '-', '*', '/'
  });

  it('should return a random operator when difficulty is "easy" or scoreInt is less than 10', () => {
    const difficulty = 'easy';
    const scoreInt = 5;
    const operator = getRandomOperator(difficulty, scoreInt);
    expect(operator).toMatch(/[\+\-]/); // Operator should be one of '+', '-'
  });

  it('should return a random operator when difficulty is not "incremental" and scoreInt is not greater than or equal to 10', () => {
    const difficulty = 'hard';
    const scoreInt = 5;
    const operator = getRandomOperator(difficulty, scoreInt);
    expect(operator).toMatch(/[\+\-\*\/]/); // Operator should be one of '+', '-', '*', '/'
  });
});