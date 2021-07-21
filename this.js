/**
 * this -> JavaScript 关键字
 * 当前环境执行期上下文对象的一个属性
 * this在不同的环境(web、node等)、不同的作用下，表现是不同的
 */

// 全局作用域下的 this -> 全局对象
// window 和 this 的关系
console.log(this === window); // true