/**
 *  Lementi az adatbázisba az állatokat, ha frissítjük őket vagy újat hozunk létre
 */

//const requireOption = require('../requireOption');

function saveAnimals(objectrepository) {
    const AnimalModel=objectrepository.AnimalModel;

    return (req, res, next)=> {
        
        if(typeof req.body.nev==='undefined' ||
        typeof req.body.kor==='undefined' ||
        typeof req.body.fajta==='undefined' ||
        typeof req.body.zoo==='undefined' ){
            return next();
        }
        
        const newAnimal=res.locals.animal ? res.locals.animal: new AnimalModel();
        newAnimal.nev=req.body.nev;
        newAnimal.kor=req.body.kor;
        newAnimal.fajta=req.body.fajta;
        newAnimal._lakik=req.body.zoo;
        return newAnimal.save().then(()=>{
            return res.redirect('/');
        }).catch((err)=>{
            return next(err);
        })
    };
};
module.exports = saveAnimals