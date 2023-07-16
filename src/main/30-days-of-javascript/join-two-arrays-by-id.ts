// function joinUsingBruteForce(arr1: any[], arr2: any[]): any[] {
//   const combinedArray = arr1.concat(arr2);
//   const merged: { [key: number]: any } = {};

//   combinedArray.forEach((obj) => {
//     const id = obj.id;
//     if (!merged[id]) {
//       merged[id] = { ...obj };
//     } else {
//       merged[id] = { ...merged[id], ...obj };
//     }
//   });

//   const joinedArray = Object.values(merged);
//   joinedArray.sort((a, b) => a.id - b.id);

//   return joinedArray;
// }

function joinUsingMap(arr1: any[], arr2: any[]): any[] {
  const map = new Map<number, any>();

  for (const obj of arr1) {
    map.set(obj.id, obj);
  }

  for (const obj of arr2) {
    if (!map.has(obj.id)) {
      map.set(obj.id, obj);
    } else {
      const prevObj = map.get(obj.id);
      for (const key of Object.keys(obj)) {
        prevObj[key] = obj[key];
      }
    }
  }

  const res: any[] = [];
  for (const key of map.keys()) {
    res.push(map.get(key));
  }

  return res.sort((a, b) => a.id - b.id);
}

var arr1 = [
  {"id": 1, "x": 1},
  {"id": 2, "x": 9}
], 
arr2 = [
  {"id": 3, "x": 5}
]
console.log("Join Two Arrays by ID ",JSON.stringify(joinUsingMap(arr1,arr2)))

