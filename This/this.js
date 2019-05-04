this === window
/* true */
var myObj = {
    name: 'Jade',
    hello: function(){
        return 'Hello ' + this.name;
    }
}

myObj.hello()

/* "Hello Jade" */