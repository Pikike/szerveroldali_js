/**
 *  Állatkert mentése az adatbáziba, a POST paraméterrel 
 *  frissítés és mentés esetén
 *  
 */


    
 function saveZoo(objectrepository) {
    const ZooModel=objectrepository.ZooModel;

    return(req, res, next)=>{
        if(typeof req.body.nev==='undefined'||
        typeof req.body.cim==='undefined'||
        typeof req.body.uzemelteto==='undefined'){
            return next();
        }
        const newZoo=res.locals.zoo ? res.locals.zoo : new ZooModel();
        newZoo.nev=req.body.nev;
        newZoo.cim=req.body.cim;
        newZoo.uzemelteto=req.body.uzemelteto;
       
        return newZoo.save().then(()=>{
            return res.redirect('/');
        } ).catch((err)=>{
            return next(err);
        })
    };
};
module.exports =saveZoo;