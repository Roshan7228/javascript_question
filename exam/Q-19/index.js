function  doubleArrayElements(arr){
    let double=arr.map((num)=>{
        return num*2;
    })
    return double;
}
let arr=[1,2,3,4,5];
console.log(doubleArrayElements(arr));
