var Menu = require('terminal-menu');

var doMenu1 = function(callback, argv) {
    var options = ['a', 'b', 'c']
    var menu = Menu({ width: 29, x: 4, y: 2, selected: options.indexOf(argv.option1)  });
    menu.reset();
    menu.write('MENU 1\n');
    menu.write('-------------------------\n');
    options.forEach(opt => menu.add(opt));
    menu.add('EXIT');

    menu.on('select', function (label) {
        menu.close();
        if (callback) {
            callback(label);
        }
    });
    process.stdin.pipe(menu.createStream()).pipe(process.stdout);

    // process.stdin.setRawMode(true);
    menu.on('close', function () {
        // process.stdin.setRawMode(false);
        // process.stdin.end();
    });
}

var exports = module.exports = {};
exports.doMenu1 = doMenu1;