var person = function () {}

person.prototype.name = 'n/a';
/* "n/a" */
person.prototype.age = 0;
/* 0 */
var jade = new person();

jade
/* person {} */
jade.age
/* 0 */
person.prototype.hello = function () {
    return 'Hello ' + this.name;
}
jade.hello()
/* "Hello n/a" */
jade.name = 'Jade';
/* "Jade" */
jade.hello();
/* "Hello Jade" */