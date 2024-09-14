// function countVowel(String)
// {
//     let count=0;
//     for(const index of String){
//         if (index==="a"||index==="e"||index==="i"||index==="o"||index==="u")
//             count++
//         }
//         console.log(count);
// }

// let pra=[1,2,3,4,5];
// pra.forEach((val)=>{
// console.log(val);
// })

// let numbers=[23,45,67,3,5];
// numbers.forEach((number )=>{
//     console.log(number*number);
// })

// let arr=[2,4,7,8,10];
// let array=arr.filter((val)=>{
// return(val%2===0);
// })
// console.log(array);


// to filter the marks >90
// let arr=[98,91,90.5,67,89,80];
// let marks=arr.filter((val)=>{
//     return(val>90);
// })
// console.log(marks); 

// to take a number from user
let n=prompt("enter a number");
let arr=[];

for(i=1;i<=n;i++){
    arr[i-1]=i;
  
}
console.log(arr);
let output=arr.reduce((res,curr)=>{
    return(res+curr);
});
console.log(output);