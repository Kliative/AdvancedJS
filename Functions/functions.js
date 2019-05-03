// Option 1
function sayHello(name) {
    return 'Hello ' + name;
}

// Option 2
var sayHello2 = function (name) {
    return 'Hello ' + name;
}

//Option 3 ES6 -- use for 'this' is handled
sayHello3 = (name) => {
    return 'Hello ' + name;
}
