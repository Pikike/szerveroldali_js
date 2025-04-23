/**
 *  Lementi az adatbázisba az állatokat, ha frissítjük őket vagy újat hozunk létre
 */



function saveAnimals(objectrepository) {
    const AnimalModel=objectrepository.AnimalModel;

    return (req, res, next)=> {
        
        if(typeof req.body.allatnev==='undefined' ||
        typeof req.body.kor==='undefined' ||
        typeof req.body.fajta==='undefined' ||
        typeof res.locals.zoo==='undefined' ){
            
            return next();
        }
        
        const newAnimal=res.locals.animal ? res.locals.animal: new AnimalModel();
        newAnimal.allatnev=req.body.allatnev;
        newAnimal.kor=req.body.kor;
        newAnimal.fajta=req.body.fajta;
        newAnimal._lakik=res.locals.zoo;
        
        return newAnimal.save().then(()=>{
            
            return res.redirect(`/animal/${res.locals.zoo._id}`);
        }).catch((err)=>{
            
            return next(err);
        })
    };
};
module.exports = saveAnimals