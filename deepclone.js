// var obj = {
//   name: 'LPieces',
//   age: 22,
//   info: {
//     hobby: ['piano'],
//     a: 1,
//     career: {
//       teacher: 4,
//       engineer: 9
//     }
//   },
//   arr: ['one', 'two']
// }

// function deepClone (origin, target) {
//   var toStr = Object.prototype.toString;
//   var tar = target || toStr.call(origin) === '[object Array]' ? [] : {};

//   for (var k in origin){
//     if (origin.hasOwnProperty(k)) {
//       if (typeof origin[k] === 'object' && origin[k] !== null) {
//         tar[k] = toStr.call(origin[k]) === '[object Array]' ? [] : {};
//         deepClone(origin[k], tar[k]);
//       }else{
//         tar[k] = origin[k];
//       }
//     }
//   }

//   return tar;
// }
// var arr = ['123'];
// var arr2 = deepClone(arr);
// arr[0] = 2323;
// arr2[0] = 56;
// console.log(arr,arr2);
// const newObj = deepClone(obj);
// console.log(newObj, obj);

function deepClone (origin, hashMap = new WeakMap()) {
  if (origin == undefined || typeof origin !== 'object') {
    return origin;
  }
  if (origin instanceof Date) {
    return new Date(origin);
  }
  if (origin instanceof RegExp) {
    return new RegExp(origin);
  }
  const hashKey = hashMap.get(origin);
  if (hashKey) {
    return hashKey;
  }
  const target = new origin.constructor();
  hashMap.set(origin, target);
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = deepClone(origin[k], hashMap);
    }
  }
  return target;
}