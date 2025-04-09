const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
   
    let total = sum(14, 9);

    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {

    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07;

 
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})
test("One dollar should be 167.45 yenes", function() {

    const { fromDollarToYen } = require('./app.js');


    const yen = fromDollarToYen(3.5);

    const expected = 3.5 / 1.07 * 156.5;

    expect(fromDollarToYen(3.5)).toBe(3.5 / 1.07 * 156.5); 
})
test("One yen should be 0.007 pound", function() {

    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(3.5);

    const expected = 3.5 / 156.5 * 0.87;

    expect(fromYenToPound(3.5)).toBe(3.5 / 156.5 * 0.87); 
})