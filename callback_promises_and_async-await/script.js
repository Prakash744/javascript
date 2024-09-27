// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("Data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }

// callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         });
//     });
// });


//promises

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },3000);
//     });
// }
//promises

// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// });


//async-await
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },3000);
    });
}

//using async function
async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
}