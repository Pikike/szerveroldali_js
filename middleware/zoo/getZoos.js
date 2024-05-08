/***
 *  Visszaadja za állatkertek listáját
 * 
 */
 


function getZoos(objectrepository){
   
    const ZooModel=objectrepository.ZooModel;
    return function(req, res, next){
 
         return ZooModel.find({}).then((zoos)=>{
             res.locals.zoos=zoos;
             return next();
         }).catch(err=> {
             return next(err);
         })
    }
   
};
module.exports=getZoos;