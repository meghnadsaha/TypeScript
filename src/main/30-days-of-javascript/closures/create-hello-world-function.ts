//Function Syntax
var createHelloWorld = function() {
    return function(): string {
        return "Hello World";
    }
};

//Arrow Syntax
var createHelloWorld1 = function() {
    return () => "Hello World";
};

//Arrow Syntax + Rest Arguments
var createHelloWorld2 = function() {
    return (...args: any[]) => "Hello World";
};

const f = createHelloWorld();
console.log(f())
