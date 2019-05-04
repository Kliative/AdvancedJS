// Promises are for asyncrynous code
// get form DB -> return if it has been resolved or rejected
var mypromise = new Promise(function(resolved, rejected){
    if(condition = true){
        resolved(1234);
    } else {
        rejected('errrors');
    }
});

mypromise.then(function(value){
    console.log(value);
}).catch(function(){
    console.log('your promise failes (:');
});

/* 1234 */


// returned Promise;
// Promise {<resolved>: undefined}
// __proto__: Promise
// [[PromiseStatus]]: "resolved"
// [[PromiseValue]]: undefined