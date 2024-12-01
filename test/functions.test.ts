import {
    getTextAsList,
    isValidLine,
    getValidList
} from "../src/ts/functions";


// for getTextAsList
const text11_1 = "AAA\nBBB\nCCC";
const text11_2 = "AAA\rBBB\rCCC";
const text11_3 = "AAA\r\nBBB\r\nCCC";
const text11_res = ["AAA", "BBB", "CCC"];

const text12_1 = "AAA \n BBB\n CCC ";
const text12_2 = "AAA \r BBB\r CCC ";
const text12_3 = "AAA \r\n BBB\r\n CCC ";
const text12_res = ["AAA ", " BBB", " CCC "];

const text13_1 = "AAA\n\nBBB";
const text13_2 = "AAA\r\rBBB";
const text13_3 = "AAA\r\n\r\nBBB";
const text13_res = ["AAA", "", "BBB"];

const text14_1 = "AAA\nBBB\n ";
const text14_2 = "AAA\rBBB\r ";
const text14_3 = "AAA\r\nBBB\r\n ";
const text14_res = ["AAA", "BBB", " "];


// for isValidLine
// false
const text21_1 = "";
const text21_2 = "#";
const text21_3 = "##";
const text21_4 = "# foo";

// true
const text22_1 = "+ ";
const text22_2 = "1.";
const text22_3 = "a.";
const text22_4 = "  #";


// for getValidList
const text31 = ["AA", "BB", "CC"];
const text31_res = ["AA", "BB", "CC"];

const text32 = ["AA", "BB", ""];
const text32_res = ["AA", "BB"];

const text33 = ["AA", "", "BB"];
const text33_res = ["AA", "BB"];

const text34 = ["AA", "BB", "# foo"];
const text34_res = ["AA", "BB"];

const text35 = ["AA", "# foo", "BB"];
const text35_res = ["AA", "BB"];

const text36 = ["", "", ""];
const text36_res: string[] = [];


describe("Check functions in functions.ts", () => {
    it("Check getTextAsList function", () => {
        expect(getTextAsList(text11_1)).toEqual(text11_res);
        expect(getTextAsList(text11_2)).toEqual(text11_res);
        expect(getTextAsList(text11_3)).toEqual(text11_res);

        expect(getTextAsList(text12_1)).toEqual(text12_res);
        expect(getTextAsList(text12_2)).toEqual(text12_res);
        expect(getTextAsList(text12_3)).toEqual(text12_res);

        expect(getTextAsList(text13_1)).toEqual(text13_res);
        expect(getTextAsList(text13_2)).toEqual(text13_res);
        expect(getTextAsList(text13_3)).toEqual(text13_res);

        expect(getTextAsList(text14_1)).toEqual(text14_res);
        expect(getTextAsList(text14_2)).toEqual(text14_res);
        expect(getTextAsList(text14_3)).toEqual(text14_res);
    })

    it("Check isValidLine function", () => {
        expect(isValidLine(text21_1)).toEqual(false);
        expect(isValidLine(text21_2)).toEqual(false);
        expect(isValidLine(text21_3)).toEqual(false);
        expect(isValidLine(text21_4)).toEqual(false);

        expect(isValidLine(text22_1)).toEqual(true);
        expect(isValidLine(text22_2)).toEqual(true);
        expect(isValidLine(text22_3)).toEqual(true);
        expect(isValidLine(text22_4)).toEqual(true);
    })

    it("Check getValidList function", () => {
        expect(getValidList(text31)).toEqual(text31_res);
        expect(getValidList(text32)).toEqual(text32_res);
        expect(getValidList(text33)).toEqual(text33_res);
        expect(getValidList(text34)).toEqual(text34_res);
        expect(getValidList(text35)).toEqual(text35_res);
        expect(getValidList(text36)).toEqual(text36_res);
    })
});

