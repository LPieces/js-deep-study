/**
 * this -> JavaScript 关键字
 * 当前环境执行期上下文对象的一个属性
 * this在不同的环境(web、node等)、不同的作用下，表现是不同的
 */

// 全局作用域下的 this -> 全局对象
// window 和 this 的关系
// console.log(this === window); // true

// this -> web node worker
var obj = {
  a: 'obj.a',
  test: function () {
    console.log(this.a); // obj.a
    console.log(window.a); // global.a
  }
}
var a = 'global.a';
obj.test();

/**
 * 获取全局对象
 * web: window, self, frames, this
 * node: golbal
 * worker: self
 * 通用: globalThis
 */

// function test () {
//   return this;
// }
// console.log(test()); // window

// function test2 () {
//   'use strict'; // 开启严格模式
//   return this;
// }
// console.log(test2()); // undefined
// console.log(window.test2()); // window
// 严格模式下，谁调用函数，函数内部的执行默认就是谁
