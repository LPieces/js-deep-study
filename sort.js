var arr = [2, 10, 5, 4, 11, 9, 7, 8, 1, 12, 3, 6, 13, 15, 14];

// 冒泡排序
function bubbleSort (arr) {
    for(var i=0;i<arr.length-1;i++){ // 控制排序多少趟
        for(var j=0;j<arr.length-1-i;j++){ // 每排好一个减去一个长度
            var prev = arr[j];
            var next = arr[j+1];
            if(prev > next){
                arr[j] = next;
                arr[j+1] = prev;
            }
        }
    }
    return arr;
}
// console.log(bubbleSort(arr));

// 选择排序
function selectionSort (arr) {
    for(var i=0;i<arr.length-1;i++){ // 控制替换多少次
       var minIndex = i;
       for(var j=i+1;j<arr.length;j++){ // 找最小值
           if(arr[j] < arr[minIndex]){
               minIndex = j; // 将最小数的索引保存
           }
       }
       // swap
       var temp = arr[i];
       arr[i] = arr[minIndex];
       arr[minIndex] = temp;
    }
    return arr;
}
// console.log(selectionSort(arr));

// 插入排序
