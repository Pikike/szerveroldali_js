/***
 * Az oldal betöltése/ újratöltése
 */

const requireOption = require('./requireOption');

module.exports = function(objectrepository, viewName) {
    return function(req, res) {
        console.log('render: ' + viewName);
    };
};