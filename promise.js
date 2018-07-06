function myPromise(fn) {
    var myPromise = this;
        myPromise.resolves = [];

    this.then = function (onFulfilled) {
        myPromise.resolves.push(onFulfilled);
        return this;
    };

    function resolve(value) {
        myPromise.resolves.forEach(function (callback) {
                callback(value);
            });
    }
    fn(resolve);
}


let getData1 =  new myPromise(function(resolve,reject){
    setTimeout(function(){
            console.info('start');
            resolve('1000ms');
    },1000);
});

getData1.then(
    data=>{
        console.log(data)
    }
)

  