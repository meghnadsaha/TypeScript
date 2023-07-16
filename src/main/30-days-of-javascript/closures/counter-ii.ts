type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
const resetValue = init;
    let currentValue = init;
    return {
        increment: (): number => ++currentValue,
        decrement: (): number => --currentValue,
        reset: (): number => currentValue = resetValue,
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */