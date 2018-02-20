var doMenu1 = require('./do-menu-1').doMenu1;
var doMenu2 = require('./do-menu-2').doMenu2;
var doMenu3 = require('./do-menu-3').doMenu3;
var argv = require('minimist')(process.argv.slice(2));

var menu3Callback = function(label) {
    process.stdin.setRawMode(false);
    process.stdin.end();
    argv.option3 = label;
    doSomething(argv);
}

var menu2Callback = function(label) {
    argv.option2 = label;
    doMenu3(menu3Callback, argv);
}

var menu1Callback = function(label) {
    argv.option1 = label;
    doMenu2(menu2Callback, argv);
}

var doSomething = function(argv) {
    console.log(argv);
}

if (argv.s==true) {
    doSomething(argv);
} else {
    process.stdin.setRawMode(true);
    doMenu1(menu1Callback, argv);
}




