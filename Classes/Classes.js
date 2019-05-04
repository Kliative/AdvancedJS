// Another way to create Objects and factories

class person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    hello() {
        return 'Hello ' + this.name;
    }
}

var jade = new person('Jade',26);

jade
/*
person {name: "Jade", age: 26}
jade.hello()
"Hello Jade"
*/