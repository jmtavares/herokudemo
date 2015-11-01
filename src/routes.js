/*global module:true, __dirname:true*/

'use strict';

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('home', {defaultGreeting: process.env.DEFAULTGREETING});
    });
};
