// function filter(arr: number[], fn: (n: number, i: number) => any): number[] {};


type FilterFn<T> = (element: T, index?: number, array?: T[]) => boolean;

function filter<T>(arr: T[], fn: FilterFn<T>): T[] {
    const filteredArr: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

function filter1<T>(arr: T[], fn: FilterFn<T>): T[] {
    var filteredIndex = 0;
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            if (i !== filteredIndex) {
                // now I will Swap current element with next available position in filtered array
                var temp = arr[i];
                arr[i] = arr[filteredIndex];
                arr[filteredIndex] = temp;
            }
            filteredIndex++;
        }
    }
    // then we can Remove the remaining elements after filteredIndex
    arr.length = filteredIndex;
    return arr;
}

//Array.flatMap()
var filterUsingArrayFlatMap = function (arr, fn) {
    return arr.filter(fn);
};
//Array.map()
var filterUsingArrayMap = function (arr, fn) {
    let newArray = [];
    arr.map((x, i) => {
        if (fn(x, i)) {
            newArray.push(x);
        }
    });
    return newArray;
};

//Array.filter()
var filterUsingArray = function (arr, fn) {
    return arr.filter(fn);
};
//Array.reduce()
var filterUsingArrayReduce = function (arr, fn) {
    return arr.reduce((newArray, x, i) => {
        if (fn(x, i)) {
            newArray.push(x);
        }
        return newArray;
    }, []);
};
//For Each loop
var filterUsingForEach = function (arr, fn) {
    let newArray = [];
    arr.forEach((x, i) => {
        if (fn(x, i)) {
            newArray.push(x);
        }
    });
    return newArray;
};

var arr = [0, 10, 20, 30], fn = function greaterThan10(n) { return n > 10; }
console.log(filter1(arr, fn))

var arr1 = [1, 2, 3], fn1 = function firstIndex(n, i) { return i === 0; }
console.log(filterUsingArrayReduce(arr1, fn1))

var arr2 = [-2, -1, 0, 1, 2], fn2 = function plusOne(n) { return n + 1 }
console.log(filterUsingArrayMap(arr2, fn2))



