

const { sumBill } = require('./index');

describe('test sumBill function', () => {
    test('call bill = a+10', () => {
        expect(sumBill(1)).toBe(11);
        expect(sumBill(21)).toBe(31);
    })
    test('is null is show ', () => {
        expect(sumBill()).toBe(10);
        expect(sumBill(null)).toBe(10);
        expect(sumBill(undefined)).toBe(10);
    })
})