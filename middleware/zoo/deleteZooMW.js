/**
 *  Kitörli az adott állatkertet az adatbázisból 
 */

const requireOption = require('../requireOption');

function deleteZoo(objectrepository) {

    return (req, res, next)=> {
        return res.locals.zoo.deleteOne().then(()=>{
            return res.redirect("/");
        }).catch(err=> {
            return next(err);
        })
           
    };
};
module.exports = deleteZoo;