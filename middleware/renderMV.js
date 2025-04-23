/***
 * Az oldal betöltése/ újratöltése
 */

//const requireOption = require('./requireOption');

function render(objectrepository, viewName) {
    return (req, res, next) => {
       res.render(viewName, res.locals);
    }
}
module.exports = render;