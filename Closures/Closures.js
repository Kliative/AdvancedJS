// Closurers are functions that return functions

var add = function(num1) {
    
    return function(num2) {
        return num1 + num2;
    }
    
}

var addTwo = add(2);

addTwo(3);

/* 5 */
var addTen = add(10);

/* 15 */