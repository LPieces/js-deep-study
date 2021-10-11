const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5 ? resolve('success') : reject('fail');
    }, 1000);
});

console.log(myFirstPromise); 

myFirstPromise.then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})