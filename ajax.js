function ajax (obj) {
    return new Promise((resolve, reject) => {
        // method转大写
        var method = obj?.method.toUpperCase() ?? 'GET';
        // 请求地址
        var url = obj.url ?? '';
        // 拼接get参数
        var params = [];
        for(var key in obj.params) params.push(key + "=" + obj.params[key]);
        var paramsStr = params.join("&");
        if(paramsStr) url += '?' + paramsStr;
        // post参数
        var data = obj.data ?? {};
        // 请求头
        var headers = obj.headers ?? {};
        // 创建xhr对象
        var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open(method, url, true);
        // 设置用户的请求头
        for(var k in obj.headers) xhr.setRequestHeader(k,obj.headers[k]);
        // GET请求
        if(method === 'GET' || method === 'DELETE'){
            xhr.send()
        }
        // POST请求
        if(method === 'POST' || method === 'PUT'){
            // post默认请求头
            xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8');
            xhr.send(JSON.stringify(data)); // 发送json格式请求体参数
        }
        // 绑定状态改变的监听
        xhr.onreadystatechange = function () {
            // 如果请求没有完成, 直接结束
            if (xhr.readyState !== 4) {
                return;
            }
            const { status, statusText } = xhr;
            if(status >= 200 && status <= 299) {
                resolve({
                    data: JSON.parse(xhr.response),
                    status,
                    statusText
                })
            } else {
                reject(new Error('请求出错' + status));
            }
        }
    })
}

// ajax({
//     method: 'get',
//     url: 'https://pultap3.eotor.net/statement/types',
//     headers:{
//         TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJsYW5ndWFnZSI6InpoX0NOIiwiaWQiOjYyLCJzdGF0ZSI6IjEiLCJleHAiOjE2MzQ1MDYxMzF9.wDwU_P-LBF2Y7JJmVe0cWOEElDYxfA9DbUYflR1d9ew' 
//     },
//     params: {
//         storeId: 18,
//         startDate: '2021-10-14 00:00:00',
//         endDate: '2021-10-14 23:59:59',
//         typeId: ''
//     }
// }).then(({data: res})=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// getList();
// async function getList () {
//     const {data: res} = await ajax({
//         method: 'get',
//         url: 'https://pultap3.eotor.net/statement/types',
//         headers:{
//             TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJsYW5ndWFnZSI6InpoX0NOIiwiaWQiOjYyLCJzdGF0ZSI6IjEiLCJleHAiOjE2MzQ1MDYxMzF9.wDwU_P-LBF2Y7JJmVe0cWOEElDYxfA9DbUYflR1d9ew' 
//         },
//         params: {
//             storeId: 18,
//             endDate: '2021-10-14 23:59:59',
//             startDate: '2021-10-14 00:00:00',
//             typeId: ''
//         }
//     });
//     console.log(res);
// }