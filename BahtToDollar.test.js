const calculate = require('./BahtToDollar')

test('input is 0', () => {
    expect(calculate(0)).toEqual('$0');
});
test('input is 1', () => {
    expect(calculate(1)).toEqual('$0.033');
});
test('input is 100', () => {
    expect(calculate(100)).toEqual('$3.3');
});
test('Good Luck', () => {
    expect(calculate('Good Luck')).toEqual('error');
});