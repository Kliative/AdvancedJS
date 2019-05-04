// Passing a function another function

function calc(num, callback) { 
    return callback(num);
};

var addTen = function(num){
    return num + 10;
}

calc(3, addTen);

13