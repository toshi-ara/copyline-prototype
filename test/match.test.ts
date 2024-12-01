import { getMatchStr } from "../src/ts/match";


// half-width spaces, tab
const text01_01 = "foo";
const text01_02 = "  foo";
const text01_03 = "foo  ";
const text01_04 = "  foo  ";
const text01_05 = "\tfoo";
const text01_06 = "foo\t";
const text01_07 = "\tfoo\t";
const text01_08 = " \t foo \t ";
const text01_09 = "\t\t foo \t \t ";
const text01_res = "foo";

// last symbols
const text02_01 = "foo  ##";
const text02_02 = "foo  ##  ";
const text02_03 = "foo\t##";
const text02_04 = "foo \t##\t ";
const text02_05 = "foo  ○";
const text02_06 = "foo  ×";
const text02_res = "foo";

// leading bullet point symbols
const text03_01 = "+ foo";
const text03_02 = "    + foo";
const text03_03 = "- foo";
const text03_04 = "* foo";
const text03_05 = "1. foo";
const text03_06 = "1) foo";
const text03_07 = "a. foo";
const text03_08 = "a) foo";
const text03_09 = "A. foo";
const text03_10 = "A) foo";
const text03_res = "foo";

// full-width space (Japanese)
const text04_01 = "　";
const text04_02 = " 　";
const text04_03 = " 　 ";
const text04_04 = "+ 　";
const text04_05 = "+ 　 ";
const text04_06 = "    + 　 ";
const text04_res = "　";

// full-width space (Japanese)
const text05_01 = "　foo";
const text05_02 = " 　foo";
const text05_03 = " 　foo ";
const text05_res = "　foo";


describe("Check getMatchStr function in match.ts", () => {
    it("Check half-width spaces and tab", () => {
        expect(getMatchStr(text01_01)).toEqual(text01_res);
        expect(getMatchStr(text01_02)).toEqual(text01_res);
        expect(getMatchStr(text01_03)).toEqual(text01_res);
        expect(getMatchStr(text01_04)).toEqual(text01_res);
        expect(getMatchStr(text01_05)).toEqual(text01_res);
        expect(getMatchStr(text01_06)).toEqual(text01_res);
        expect(getMatchStr(text01_07)).toEqual(text01_res);
        expect(getMatchStr(text01_08)).toEqual(text01_res);
        expect(getMatchStr(text01_09)).toEqual(text01_res);
    })

    it("Check last symbols", () => {
        expect(getMatchStr(text02_01)).toEqual(text02_res);
        expect(getMatchStr(text02_02)).toEqual(text02_res);
        expect(getMatchStr(text02_03)).toEqual(text02_res);
        expect(getMatchStr(text02_04)).toEqual(text02_res);
        expect(getMatchStr(text02_05)).toEqual(text02_res);
        expect(getMatchStr(text02_06)).toEqual(text02_res);
    })

    it("Check leading bullet point symbols", () => {
        expect(getMatchStr(text03_01)).toEqual(text03_res);
        expect(getMatchStr(text03_02)).toEqual(text03_res);
        expect(getMatchStr(text03_03)).toEqual(text03_res);
        expect(getMatchStr(text03_04)).toEqual(text03_res);
        expect(getMatchStr(text03_05)).toEqual(text03_res);
        expect(getMatchStr(text03_06)).toEqual(text03_res);
        expect(getMatchStr(text03_07)).toEqual(text03_res);
        expect(getMatchStr(text03_08)).toEqual(text03_res);
        expect(getMatchStr(text03_09)).toEqual(text03_res);
        expect(getMatchStr(text03_10)).toEqual(text03_res);
    })

    it("Check full-width space only", () => {
        expect(getMatchStr(text04_01)).toEqual(text04_res);
        expect(getMatchStr(text04_02)).toEqual(text04_res);
        expect(getMatchStr(text04_03)).toEqual(text04_res);
        expect(getMatchStr(text04_04)).toEqual(text04_res);
        expect(getMatchStr(text04_05)).toEqual(text04_res);
        expect(getMatchStr(text04_06)).toEqual(text04_res);
    })

    it("Check full-width space", () => {
        expect(getMatchStr(text05_01)).toEqual(text05_res);
        expect(getMatchStr(text05_02)).toEqual(text05_res);
        expect(getMatchStr(text05_03)).toEqual(text05_res);
    })
});

