const sum = (a, b) => {
    return a + b
}
const fromEuroToDollar = (valueInEuro) => {
    let dollars = valueInEuro * 1.07;
    return dollars;
}
const fromDollarToYen = (valueInDollar) => {
    let yen = valueInDollar / 1.07 * 156.5;
    return yen
}
const fromYenToPound = (valueInYen) => {
    let pound = valueInYen / 156.5 * 0.87;
    return pound
}
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};