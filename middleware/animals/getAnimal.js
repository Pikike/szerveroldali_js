/**
 *  Betölti az egyik állatot az :animalid paramétenek megfelelően az adatbábisból
 *  majd lementi a res.locals.animals-ba és next-et hív
 */



 function getAnimal(objectrepository) {
    const AnimalModel=objectrepository.AnimalModel;

    return (req, res, next)=> {
       
        
        return AnimalModel.findOne({
            _id: req.params.animalid
        }).then ((animal)=>{
            res.locals.animal=animal;
            return next();
        }).catch(err=> {
            return next(err);
        });

        
    };
};
module.exports =getAnimal;