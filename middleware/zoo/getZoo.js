/**
 *  Betölti az állatkertetet az adatbázisból a :zooid paraméter segítségével
 *  
 */


function getZoo(objectrepository) {
   const ZooModel=objectrepository.ZooModel;
   
   return function(req, res, next){
    
       // res.locals.zooId=req.params._id;
        
        return ZooModel.findOne({
            _id: req.params.zooid
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