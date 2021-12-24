var obj = {
  name: 'LPieces',
  age: 22,
  info: {
    hobby: ['piano'],
    a: 1,
    career: {
      teacher: 4,
      engineer: 9
    }
  },
  arr: ['one', 'two']
}

function deeoClone (origin, target) {
  var tar = target || {};
  var toStr = Object.prototype.toString;

  for (var k in origin){
    if (origin.hasOwnProperty(k)) {
      if (typeof origin[k] === 'object' && origin[k] !== null) {
        toStr.call(origin[k]) === '[object Array]' ? [] : {};
        deeoClone(origin[k], tar[k]);
      }else{
        tar[k] = origin[k];
      }
    }
  }

  return tar;
}

const newObj = deeoClone(obj);

console.log(newObj, obj)