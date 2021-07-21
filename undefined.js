// undefined 即是一个原始数据类型，也是一个原始值数据
// undefined 全局对象上的一个属性，window.undefined
// console.log(window.undefined)

// 不可写 writable: false
// window.undefined = 1; // 不可写
// console.log(window.undefined) // undefined

// 不可配置 configurable: false
// delete window.undefined;
// console.log(window.undefined) // 还是正常打印出undefined

// for(var k in window){
//   if(k === undefined){
//     console.log(k); // 不可枚举 enumerable: false
//   }
// }

// 不可重现定义 报错了
// Object.defineProperty(window, 'undefined', {
//   enumerable: true,
//   writable: true,
//   configurable: true
// })

// var a;
// // 系统会给一个为赋值的变量自动赋值为undefined, 类型也是undefined
// console.log(a);


// function test(a){
//   console.log(typeof a); // 类型undefined
//   return a;
// }

// console.log(test()); // 没有传值打印undefined

// function test2(){
//   console.log(123);

//   //  在函数内部没有写返回值系统默认返回undefined
// }

// console.log(test2()); // undefined

// var undefined = 1; 
// console.log(undefined); // 不能作为变量使用


// function test3(){
    // 'use strict'; // 就算在严格模式下也仍然可以
//   // undefined不是JS的保留字和关键字，在全局下不可写，但是在局部作为变量时，它不会去全局找
//   var undefined = 1; 
//   console.log(undefined); // 局部作用域可以打印出1
// }
// test3();

// 判断一个变量有没有赋值要用=== 因为 null == undefined

// var a;

// if('a' in window){ // 判断一个变量有没有声明
//   console.log(true);
// } else {
//   console.log(false);
// }

// void(0) 对0进行求值 始终返回undefined

// var a, b, c;
// a = void(b = 1, c = 2);

// console.log(a, b, c);

// <a href="javascript:void(0)"> 返回undefined 阻止a标签跳转

console.log(void(0) === window.undefined); // true

function test4(){
  var undefined = 1;
  console.log(undefined); // 1
  console.log(void(0)); // undefined
  console.log(void(0) === undefined); // false

  // void(0) void(0)始终返回undefined 所以是为什么老的程序会用void(0)返回的undefined来作为undefined去和其他变量判断是否等于undefined
}

test4();



