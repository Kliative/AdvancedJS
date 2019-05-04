var myObj = {
    num1:5,
    num2:4
}

var myFunc = function() {
    return this.num1 + this.num2;
}

myFunc() 
// will return NaN

var added = myFunc.bind(myObj);

// added = 9

var myobj2 = {
    num1:3,
    num2:10
}

var anotherAdded = myFunc.bind(myobj2)

// anotherAdded() = 13

