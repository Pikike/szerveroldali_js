const renderMW= require('szerveroldali_js\middleware\renderMV.js');
const deleteAnimalsMW= require('szerveroldali_js\middleware\animals\deleteAnimals.js');
const getAnimalMW= require('szerveroldali_js\middleware\animals\getAnimal.js')
const getAnimalsMW= require('szerveroldali_js\middleware\animals\getAnimals.js')
const saveAnimalsMW= require('szerveroldali_js\middleware\animals\saveAnimals.js')
const getZooMW= require('szerveroldali_js\middleware\zoo\getZooMW.js')
const getZoosMW= require('szerveroldali_js\middleware\zoo\getZoosMW.js')
const deleteZooMW= require('szerveroldali_js\middleware\zoo\deleteZooMW.js')
const saveZooMW= require('szerveroldali_js\middleware\zoo\saveZooMW.js')

const objRepo={}

app.use(
  '/zoos/new',
  saveZooMW(objRepo),
  renderMW(objRepo, 'zooadd')
);

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
  '/zoos',
  getZoosMW(objRepo),
  renderMW(objRepo, 'zoo')
);

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
  saveAnimalsMW(objRepo),
  renderMW(objRepo, 'animalupdate')
);

app.get(
  '/animal/:zooid/delete/:animalid',
  getNagymamaMW(objRepo),
  getAnimalMW(objRepo),
  deleteAnimalsMW(objRepo),
  renderMW(objRepo, 'animals')
);

app.get(
  '/animal/:zooid',
  authMW(objRepo),
  getZooMW(objRepo),
  getAnimalsMW(objRepo),
  renderMW(objRepo, 'animals')
);
