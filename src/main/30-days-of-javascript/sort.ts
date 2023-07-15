// Displaying Sorted Data on a UI
let products = [
    { name: 'Apple', price: 1 },
    { name: 'Banana', price: 0.5 },
    { name: 'Cherry', price: 2 }
  ];
  
  products.sort((a, b) => a.name.localeCompare(b.name));
  console.log(products); // [{ name: 'Apple', price: 1 }, { name: 'Banana', price: 0.5 }, { name: 'Cherry', price: 2 }]

// Data Analysis and Insights
let numbers = [42, 21, 1, 100, 75, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 3, 21, 42, 75, 100]

//Prioritizing Task Execution

let tasks = [
    { title: 'Task 1', priority: 'Low' },
    { title: 'Task 2', priority: 'High' },
    { title: 'Task 3', priority: 'Medium' }
  ];
  
  let priorityOrder = { 'Low': 1, 'Medium': 2, 'High': 3 };
  
  tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  console.log(tasks); // [{ title: 'Task 1', priority: 'Low' }, { title: 'Task 3', priority: 'Medium' }, { title: 'Task 2', priority: 'High' }]

  //Sorting Objects on Deep Properties
  let arr = [
    { prop: { deep: 3 } },
    { prop: { deep: 1 } },
    { prop: { deep: 2 } }
  ];
  
  arr.sort((a, b) => a.prop.deep - b.prop.deep);
  console.log(arr); // [{ prop: { deep: 1 } }, { prop: { deep: 2 } }, { prop: { deep: 3 } }]


  //Implementation 2: Comparison-Based Comparator
  function sortBy(arr: any[], fn: Function): any[] {
    function swap(a: any, b: any): number {
      return fn(a) < fn(b) ? -1 : 1;
    }

    return arr.sort(swap);
  }
