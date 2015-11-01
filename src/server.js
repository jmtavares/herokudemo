/*global module:true, require:true,  process:true */

'use strict';

function herokuDemo() {
    var express = require('express');
    var port = process.env.PORT || 8080;

    var app = global.app = express();

    app.set('port', port);

    //Create routes and controllers
    require('./routes')(app);

    //Init app
    app.listen(app.get('port'),function () {
        console.log('Heroku is ready at port: ' + port);
        if (process.send) {
            process.send('online');
        }
    });
}

module.exports.herokuDemo = herokuDemo();
