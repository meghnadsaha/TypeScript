/**
 *  Type One
 *  */
const expect = (val) => {
    const throwError = (errorStr) => {
        throw new Error(errorStr);
    };

    return {
        toBe: (val2) => val2 === val || throwError("Not Equal"),
        notToBe: (val2) => val2 !== val || throwError("Equal"),
    };
};

/**
 *  Type Two
 *  */
type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

const expect2 = (val: any): ToBeOrNotToBe => ({
    toBe: (otherVal) => {
        if (otherVal === val) return true;
        throw "Not Equal";
    },
    notToBe: (otherVal) => {
        if (otherVal !== val) return true;
        throw "Equal";
    },
});

expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
