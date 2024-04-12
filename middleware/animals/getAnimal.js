/**
 *  Betölti az egyik állatot az :animalid paramétenek megfelelően az adatbábisból
 *  majd lementi a res.locals.animals-ba és next-et hív
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
   

    return function(req, res, next) {
            res.locals.animal= {_id: 1, name:"Ella", age: 10 }
            return next();
        
    };
};