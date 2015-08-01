/**
 * This module includes functions for converting
 * a beach model to a beach resource. In general,
 * you should separate out your models from your
 * resources, and prefer not to return your models
 * directly to the client.
 *
 * This particular implementation will support
 * the JSONAPI style of resources.
 */

var _ = require('lodash');


function getBeachResource(beachModel) {

  return {
    "data": {
      "type": "beaches",
      "id": beachModel.name,
      "attributes": beachModel
    },
    "errors": [],
    "meta": {}
  };
}

function getBeachResources(beachModels) {
  var beachResources = _.each(beachModels, function(n) {
    return {
      "type": "beaches",
      "id": n.name,
      "attributes": n
    }
  });

  return {
    "data": beachResources,
    "errors": [],
    "meta": {}
  };
}


module.exports.getBeachResource = getBeachResource;
module.exports.getBeachResources = getBeachResources;
