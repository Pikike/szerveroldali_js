/**
 *  Betölti az összes állatot az adatbázsból 
 */


 function getAnimals(objectrepository) {
    const AnimalModel=objectrepository.AnimalModel;
    
    return(req, res, next) =>{
       if(typeof res.locals.zoo==='undefined'){
          
        return next();
       }

       AnimalModel.find({_lakik:res.locals.zoo._id }).then(animals=>{
            res.locals.animals=animals;
            
            return next();
       }).catch(err=>{
          
            return next(err);
       })

    
    };
};
module.exports =getAnimals;