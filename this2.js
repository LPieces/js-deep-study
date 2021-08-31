/**
 * 类的本质其实就是函数
 * 
 */

class Test {
    constructor() {
        // 类的非静态方法
    }

    // 类的静态方法 （类原型上的静态属性）
    test(){

    }
}
// 默认一个对象一定有 __proto__ 指向
const TestA = Object.create(null); // 创建无 __proto__ 对象
console.log(TestA)

class Fatcher {
    constructor(){
        // no this binding
        // new -> this -> {} -> age属性
        this.age = 44;
    }
    swim(){
        console.log("GO Swimming!!!")
    }
}
class Son extends Fatcher {
    constructor(){
        // super做了什么:
        // 调用Fatcher上的constructor
        // 生成this绑定 -> Fatcher this -> Son的实例
        // this -> new Fatcher() -> {age}
        super()
        // 如果没有super()就使用this,那么后面再super的时候就会生成一个新的对象了, this.hobby就达不成
        this.hobby = "traval"
        console.log(this.age)
    }
}

const son = new Son();
console.log(son);



var obj = {
    a: 1
}
function test(b, c){
    console.log(this.a, b, c)
}

var test1 = test.bind(obj,2, 3);
test1();
var test2 = test1.bind(obj,3,2); // bind只会生效一次
test2();

var t = test.bind(obj,1,2).bind(obj,2,3); // bind只会生效一次
t()

/**
 * 
 *  剪头函数忽略任何形式的this指向改变
    也就静态this指向
    剪头函数不是一个构造器
    剪头函数不是谁绑定就指向谁
    剪头函数中的this指向外层非剪头函数作用域的this指向


    对象方法内部的this找最近的引用


    构造函数里默认模式返回this,或者手动返回this，这个this指向新对象的构造是成功的。
    如果手动返回了一个新对象，那么this指向新对象的构造是失败的。
    意思就是:如果你手动返回一个新对象那么this指向就被忽略了。相当于你没有new它
 * 
 */