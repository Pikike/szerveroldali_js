/**
 *  Kitörli at adott állatot az adatbázisból
 */

const requireOption = require('../requireOption');

function deleteAnimal(objectrepository) {
   

    return(req, res, next) =>{
        return res.locals.animal.deleteOne().then(()=>{
            return res.redirect("/");
        }).catch(err=>{
            return next(err);
        })
           
        
    };
};
module.exports = deleteAnimal;