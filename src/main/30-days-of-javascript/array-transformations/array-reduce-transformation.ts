//Code In TypeScript
type Reducer<T, U> = (accum: T, curr: U) => T;

function reduce<T, U>(nums: U[], fn: Reducer<T, U>, init: T): T {
    let val: T = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}
//Using reduceRight
function reduceArrayUsingReduceRight(nums, fn, init) {
    return nums.reverse().reduceRight((val, num) => fn(val, num), init);
}
//Using recursion
function reduceArrayUsingRecursion(nums, fn, init) {
    if (nums.length === 0) {
        return init;
    } else {
        const head = nums[0];
        const tail = nums.slice(1);
        const val = fn(init, head);
        return reduceArrayUsingRecursion(tail, fn, val);
    }
}
//Using for...of loop
function reduceArrayUsingLoop(nums, fn, init) {
    let val = init;
    for (const num of nums) {
        val = fn(val, num);
    }
    return val;
}

var nums = [1, 2, 3, 4], fn = function sum(accum, curr) { return accum + curr; }, init = 0
console.log(reduceArrayUsingLoop(nums, fn, init))


var nums1 = [1,2,3,4],fn1 = function sum1(accum, curr) { return accum + curr * curr; },init1 = 100
console.log(reduceArrayUsingLoop(nums1, fn1, init1))


var nums2 = [],fn2 = function sum2(accum, curr) { return 0; },init2 = 25
console.log(reduceArrayUsingLoop(nums2, fn2, init2))
