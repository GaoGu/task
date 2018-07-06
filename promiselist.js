


let getData1 =  new Promise(function(resolve,reject){
        setTimeout(function(){
            if(true){
                resolve('1000ms')
            }else{
                reject("1出错啦");
            }
        },1000);
    });


let getData2 =  new Promise(function(resolve,reject){
        setTimeout(function(){
            if(false){
                resolve('2000ms')
            }else{
                reject("2出错啦");
            }
        },2000);
    });

let getData3 =  new Promise(function(resolve,reject){
        setTimeout(function(){
            if(true){
                resolve('3000ms')
            }else{
                reject("3出错啦");
            }
        },3000);
    });

// getData1.then(function(data){
//     console.log(data); // 100ms
//     return getData2;
// }).then(function(data){
//     console.log(data); // 200ms
//     return getData3;
// }).then(function(data){
//     console.log(data); // 100ms
// }, function(data){
//     console.log(data);
// });

let array = [getData1,getData2,getData3]

for (var i=0; i<array.length; i++){
    array[i].then(data=>{
        console.log(data);
        return array[i++];
    },error=>{
        console.log(error);
        return array[i++];
    })
}
