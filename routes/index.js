const renderMW= require('../middleware/renderMV');
const deleteAnimalsMW= require('../middleware/animals/deleteAnimals');
const getAnimalMW= require('../middleware/animals/getAnimal');
const getAnimalsMW= require('../middleware/animals/getAnimalsMW');
const saveAnimalMW= require('../middleware/animals/saveAnimals');
const getZooMW= require('../middleware/zoo/getZoo');
const getZoosMW= require('../middleware/zoo/getZoos');
const deleteZooMW= require('../middleware/zoo/deleteZooMW');
const saveZooMW= require('../middleware/zoo/saveZooMW');
function addRoutes(app) {

const ZooModel=require('../models/zoo');
const AnimalModel=require('../models/animal');

const objRepo={
  ZooModel: ZooModel,
  AnimalModel: AnimalModel
};

app.use(
  '/zoos/new',
  saveZooMW(objRepo),
  renderMW(objRepo, 'zooadd'));
  

app.use(
  '/zoo/edit/:zooid',
  getZooMW(objRepo),
  saveZooMW(objRepo),
  renderMW(objRepo, 'zooupdate')
);

app.get(
  '/zoo/delete/:zooid',
  getZooMW(objRepo),
  deleteZooMW(objRepo) 
);

app.get(
  '/',
  getZoosMW(objRepo),
  renderMW(objRepo, 'zoo'));
  

app.use(
  '/animals/:zooid/new',
  getZooMW(objRepo),
  saveAnimalMW(objRepo),
  renderMW(objRepo, 'animaladd')
);

app.use(
  '/animal/:zooid/edit/:animalid',
  getZooMW(objRepo),
  getAnimalMW(objRepo),
  saveAnimalMW(objRepo),
  renderMW(objRepo, 'animalupdate')
);

app.get(
  '/animal/:zooid/delete/:animalid',
  getZooMW(objRepo),
  getAnimalMW(objRepo),
  deleteAnimalsMW(objRepo)
  
);

app.get(
  '/animal/:zooid',
  getZooMW(objRepo),
  getAnimalsMW(objRepo),
  renderMW(objRepo, 'animals')
);
}
module.exports=addRoutes;
