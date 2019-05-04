// Creating Objects and Factories

var person = function(name, age){
    this.name = name;
    this.age = age;   
}

var jade = new person('Jade',26);

/* person {name: "Jade", age: 26} */
var bob = new person('Bob', 22);

bob
/* person {name: "Bob", age: 22} */
