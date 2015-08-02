var _ = require('lodash');

var restify = require('restify');
var restifySwagger = require('node-restify-swagger');
var restifyValidation = require('node-restify-validation');
var levelup = require('levelup');
var beachRoutes = require('./beach-routes.js');
var beachResources = require('./beach-resources.js');
var beachKeyFuncs = require('./beach-data.js');

console.log('Initializing leveldb');
var db = levelup('./mydb');







var server = restify.createServer();
server.use(restify.bodyParser());
server.use(restify.queryParser());
server.use(restifyValidation.validationPlugin({
	// Shows errors as an array
	errorsAsArray: false,
	// Not exclude incoming variables not specified in validator rules
	forbidUndefinedVariables: false,
	errorHandler: restify.errors.InvalidArgumentError
}));
restifySwagger.configure(server, {
  description: "API for beaches",
  title: 'API for beaches',
  allowMethodInModelNames: true
});

var beachDependencies = {'db': db,
                         'resourceFunc': beachResources.getBeachResource,
                         'keyFuncs': beachKeyFuncs}

var allBeachesDependencies = {'db': db,
                                 'resourceFunc': beachResources.getBeachResources,
                                 'keyFuncs': beachKeyFuncs}

server.get('/beaches/:name', _.curry(beachRoutes.getBeach)(beachDependencies));

server.post({url: '/beaches',
             swagger: {
               summary: 'Add beach',
               docPath: 'beaches'
             },
             validation: {
               content: {
                 score: {isRequired: true}
               }
             },
             models: {
               Beach: {
                 id: 'Beach',
                 properties: {
                   name: {type: 'string'}
                 }
               }
             }
            }, _.curry(beachRoutes.postBeach)(beachDependencies));
server.get('/beaches', _.curry(beachRoutes.getAllBeaches)(allBeachesDependencies));


restifySwagger.loadRestifyRoutes();
server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
