export function useStrictObject (data, desc) {
  if(typeof data !== 'object'  || data === null){
    throw new TypeError('We need a type object without null');
  }
  if(!Array.isArray(data)){
    return defineObject(data, desc);
  }
  return data.map(item => {
    return defineObject(item, desc);
  })
}

function defineObject(data, desc){
  let _obj = new ConstructObject();
  for(let k in data){
    Object.defineProperty(_obj, k, {
      ...desc[k],
      value: data[k]
    })
  }
  return _obj;
}

function ConstructObject(){
  for (let k in ConstructObject.prototype) {
    Object.defineProperty(ConstructObject.prototype, k, {
      enumerable: false,
      writable: false,
      configurable: false
    })
  }
}
ConstructObject.prototype.setConfig = function (prop, desc, value) {
  Object.defineProperty(this, prop, {
    [desc]: value
  })
}