
// function Person(){

// }
// console.log(Person.prototype);

// const person = new Person();
// console.log(person.__proto__);

// console.log(person.__proto__ === Person.prototype); // true

// console.log(Person.prototype.__proto__ === Object.prototype); // true

// console.log(Object.prototype.__proto__); // null

// Car.prototype.lang = 4900;
// Car.prototype.height = 1400;
// Car.prototype.carName = 'BMW';
// function Car(color, owner){
//   this.owner = owner;
//   this.color = color;
// }

// const car = new Car('green', '李四');
// const car1 = new Car('red', '张三');
// console.log(car, car1);

// Person.prototype.lastName = 'liu';
// function Person(name) {
//   this.name = name;
// }

// const person = new Person('hao');

// person.lastName = 'zhang';
// // 改:
// // 子无法修改父的原型属性
// console.log(person); // {name: 'hao', lastName: 'zhang'}
// console.log(Person.prototype.lastName); // liu

// // 增：
// // 子无法新增父的原型属性

// // 删:
// // 子无法删除父的原型属性
// console.log(delete person.lastName); // true


// const obj = {};
// console.log(obj)
Grand.prototype.lastName = 'Liu';
function Grand(){

}
const grand = new Grand();
Father.prototype = grand;
function Father(){
  this.name = 'xuming';
}
const father = new Father();
Son.prototype = father;
function Son(){
  this.hobbit = 'smoke';
}
const son = new Son();

console.log(son.hobbit); // smoke
console.log(son.name); // xuming
console.log(son.lastName); // Liu

const obj = {
  name: 'liu'
}
const obj1 = Object.create(obj); // obj1的原型是obj

Person.prototype.name = 'liu';
function Person(){

}
const person = Object.create(Person.prototype); // person的原型是Person.prototype

const obj2 = Object.create(null); //创建无原型对象 没有toString()


undefined.toString() // 报错, 是原始值，没有原型所以没有toString()

null.toString() // 报错, 是原始值，没有原型所以没有toString()

// Number Array Boolean 的原型都有自己的toString()方法