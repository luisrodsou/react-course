import { convertInchesToCm, convertLibsToKg } from "../../utils/misc";

describe("convertInchesToCm", () => {
    const testData = [
        { inches: 0, cm: 0 },
        { inches: 1, cm: 2.54 },
        { inches: 10, cm: 25.4 },
        { inches: 100, cm: 254 },
        { inches: 1000, cm: 2540 }
    ];
    
    it.each(testData)("Should convert inches to cm", (testDataItem) => {
        expect(convertInchesToCm(testDataItem.inches)).toBe(testDataItem.cm);
    });
});

describe("convertLibsToKg", () => {
    const testData = [
        { libs: 0, kg: 0 },
        { libs: 1, kg: 0.45359 },
        { libs: 10, kg: 4.53592 },
        { libs: 100, kg: 45.35924 },
        { libs: 1000, kg: 453.59237 }
    ];

    it.each(testData)("Should convert libs to kg", (testDataItem) => {
        expect(Number(convertLibsToKg(testDataItem.libs).toFixed(5))).toBe(testDataItem.kg);
    });
});
