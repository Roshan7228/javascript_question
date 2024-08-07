 let arr=[1,2,3,4,5];
 let product=1;
function productOfArray(arr){
    let result=arr.reduce((prew,curr)=>{
          return prew*curr;
    },product)
    return result;
}
console.log(productOfArray(arr));
