function callback() {
    console.log()
}
function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() 
    {};
}

function returnsAnAnonymousFunction () {
    return function() {};
}