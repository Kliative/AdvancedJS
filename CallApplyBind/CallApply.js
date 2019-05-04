var myobj = {
	name: 'Jade'
};

var sayHello = function() {
    return 'Hello ' + this.name;
}

sayHello()
/* "Hello " */

// call() is used to add myObj to the returned value from sayHello()

sayHello.call(myob);
/* "Hello Jade" */