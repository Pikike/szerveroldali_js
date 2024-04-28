/**
 *  Betölti az egyik állatot az :animalid paramétenek megfelelően az adatbábisból
 *  majd lementi a res.locals.animals-ba és next-et hív
 */

//const requireOption = require('../requireOption');

 function getAnimal(objectrepository) {
    const AnimalModel=objectrepository.AnimalModel;

    return (req, res, next)=> {
        res.locals.animalId=req.params.id;

        return AnimalModel.findOne({
            _id: req.params.id
        }).then ((animal)=>{
            res.locals.animal=animal;
            return next;
        }).catch(err=> {
            return next(err);
        });

        
    };
};
module.exports =getAnimal;