function getBeachDependencies(db, resourceFunc, keyFuncs) {
  return {'db': db,
          'resourceFunc': resourceFunc,
          'keyFuncs': keyFuncs}

}

module.exports.getBeachDependencies = getBeachDependencies;
