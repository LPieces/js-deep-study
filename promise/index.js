
// 异步程序
// const data = $.ajax({
//     url: "http://localhost:3000/data.json",
//     async: false // 同步
// });

// console.log(data.responseJSON.map(item=>item.name));

// console.log("My name is LPieces.");

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

function getData(){
    return new Promise((resolve, reject) => {
        // 注：当然 ajax 本身也有 Promise , 这里只是举个栗子
        $.ajax({
            url: 'http://localhost:3000/data.json',
            success (data) {
                resolve(data);
            }
        })
    })
}
async function doSth(){
    try{
        const data = await getData();
        console.log(data.map(item=>item.name));
        console.log("My name is LPieces.");
    }catch(err){
        console.log(err);
    }
}
doSth();
console.log("My name is LPieces.");