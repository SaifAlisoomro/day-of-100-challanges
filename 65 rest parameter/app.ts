// funcrion rest parameter

function addAll (...nums:number[]):number {
    let result= 0;
    for (let i = 0; i < nums.length; i++){
        result += nums[i];
    }
    return result;
}
console.log(addAll(20,30,50,100,20,5, + true));
