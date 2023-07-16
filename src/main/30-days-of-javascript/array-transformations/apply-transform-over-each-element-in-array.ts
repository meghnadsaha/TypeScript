
/**
 * Approach one 
 * */
function map<T, U>(arr: T[], fn: (value: T, index: number) => U): U[] {
    const mappedArray: U[] = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(fn(arr[i], i));
    }
    return mappedArray;
}

var arr = [1, 2, 3], fn = function plusone(n) { return n + 1; }
console.log(map(arr, fn))

var arr1 = [1, 2, 3], fn1 = function plusI(n, i) { return n + i; }
console.log(map(arr1, fn1))

var arr2 = [10, 20, 30], fn2 = function constant() { return 42; }
console.log(map(arr2, fn2))
