// export class JoinTwoArraysById {

  // join(arr1: any[], arr2: any[]): any[] {
    function join(arr1: any[], arr2: any[]): any[]{

      const obj = arr1.reduce((a, { id, ...rest }) => {
        if (!(id in a)) {
          a[id] = {};
        }
        a[id] = { ...a[id], ...rest };
        return a;
      }, {});
  
      arr2.reduce((a, { id, ...rest }) => {
        if (!(id in a)) {
          a[id] = {};
        }
        a[id] = { ...a[id], ...rest };
        return a;
      }, obj);
  
      return Object.keys(obj).map((key) => ({ id: parseInt(key), ...obj[key] }));
  
      
    }
      var arr1 = [
          {"id": 1, "x": 1},
          {"id": 2, "x": 9}
      ], 
      arr2 = [
          {"id": 3, "x": 5}
      ]
      console.log("Join Two Arrays by ID ",JSON.stringify(join(arr1,arr2)))
    
  
  // }