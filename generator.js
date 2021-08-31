// 生成器 -> 存在价值 -> 生成 返回一个迭代器 interator
function * generator (arr) {
    for (let v of arr) {
        yield v;
    }
}
let arr = [1, 2, 3]
const iterator = generator(arr)
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())