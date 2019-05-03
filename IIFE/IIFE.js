// Scope

// IIFE
// Immediately Invoicet function expression

var name  = 'Jade';
/* Do some stuff */

var name;
if (!name) {
    /* Error cant instantiate twice */
}

/* The way it works without effacting the previous */

(function () {
    var name = 'Jade';
})();

(function () {
    var name = 'Jade';
})();