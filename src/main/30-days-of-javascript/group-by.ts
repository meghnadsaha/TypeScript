declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const hash = {};
  for (let item of this) {
    const key = fn(item);
    hash[key] ||= [];
    hash[key].push(item);
  }
  return hash;
};



var array = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
  ], 
  fn = function (item) { 
    return item.id; 
  }
console.log("Output is from array.groupBy(fn). for Input1 :  " ,array.groupBy(fn));


var array2= [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
  ]
  fn = function (list) { 
    return String(list[0]); 
  }
  console.log("Output is from array.groupBy(fn). for Input1 :  " ,array2.groupBy(fn));



var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
fn = function (n) { 
  return String(n > 5);
}
console.log("Output is from array.groupBy(fn). for Input1 :  " ,array3.groupBy(fn));


