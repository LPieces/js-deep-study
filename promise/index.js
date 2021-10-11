
// 异步程序
const data = $.ajax({
    url: "http://localhost:3000/data.json",
    async: false // 同步
});

console.log(data.responseJSON.map(item=>item.name));

console.log("My name is LPieces.");

// const p = new Promise((resolve, reject) => {
//     $.ajax({
//         url: 'http://localhost:3000/data.json',
//         success (data) {
//             resolve(data);
//         }
//     })
// })

// p.then(res => {
//     console.log(res.map(item=>item.name));
// })
// console.log("My name is LPieces.");