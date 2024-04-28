/**
 *  Betölti az állatkertetet az adatbázisból a :zooid paraméter segítségével
 *  
 */

//const { name } = require('ejs');
//const requireOption = require('../requireOption');

function getZoo(objectrepository) {
   const ZooModel=objectrepository.ZooModel;

   return function(req, res, next){
        res.locals.zooId=req.params.id;

        return ZooModel.findOne({
            _id: req.params.id
        }).then((zoo)=>{
            if(zoo===null){
                return res.redirect("/");
            }
            res.locals.zoo=zoo;
            return next();
        }).catch(err=> {
            return next(err);
        })
   }
  
   
};
 module.exports=getZoo;