// 7个专门针对数组的遍历方法
// forEach map filter reduce reduceRight some every

// for in 
/*
    for...in不应该用于迭代一个关注索引顺序的 Array。
    遍历对象 for in的产生就是对一个普通对象的遍历
    for in 不能遍历map set
    for ... in是为遍历对象属性而构建的，“不建议”与数组一起使用，但数组可以用
*/


// for or 遍历数组  for of 的条件是有[Symbol.iterator]迭代器
/**
 * for...of语句在可迭代对象[Symbol.iterator]（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）
 * 上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句.
 * Object上没有[Symbol.iterator] 所以不能用for or
 * 
 */ 
/**
 * for in 和 for of 都是迭代一些东西，区别在于他们迭代方式，for in迭代对象的可枚举属性， for of遍历可迭代对象
 * 
 * for...of与for...in的区别
 * 无论是for...in还是for...of语句都是迭代一些东西。它们之间的主要区别在于它们的迭代方式。
 * for...in 语句以任意顺序迭代对象的可枚举属性。
 * for...of 语句遍历可迭代对象定义要迭代的数据。
 * 
 */


 /*  Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环使用。
 *  一些内置类型拥有默认的迭代器行为，其他类型（如 Object）则没有。下表中的内置类型拥有默认的@@iterator方法：
 *  Array.prototype[@@iterator]()
 *  TypedArray.prototype[@@iterator]()
 *  String.prototype[@@iterator]()
 *  Map.prototype[@@iterator]()
 *  Set.prototype[@@iterator]()
 */