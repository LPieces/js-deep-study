// 基础知识 扎实
// Object 对象
// define 定义 
// property 属性

// var obj = {};
// var newObj = Object.defineProperty(obj,'a',{
//   value: 1
// })
// console.log(newObj === obj); // 返回此对象  newObj 全等于 obj


// var obj = {};
// obj.defineProperty() // defineProperty 是Object构造器对象上的方法，不是object实例上的方法

// var obj = {};
// var newObj = Object.defineProperty(obj,'a',{
//   value: 1,
//   configurable: true,
//   writable: true,
//   enumerable: true
// })
// delete obj.a;
// console.log(obj)

// var obj = {
//   name: ''
// };
// var temp = JSON.parse(JSON.stringify(obj))
// Object.defineProperty(obj, 'name',{
//   get(){
//     return temp.name;
//   },
//   set(val){
//     temp.name = val;
//   }
// })
// obj.name = 1;
// console.log(obj.name)