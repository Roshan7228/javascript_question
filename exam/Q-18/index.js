let arr=[1,2,3,4,5];
function ArrayElements(arr){
    let evennumber=arr.filter((num)=>{
        return (num%2==0);
     })
     return evennumber;
}

console.log(ArrayElements(arr));