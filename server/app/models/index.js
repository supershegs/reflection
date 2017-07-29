'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var environment = require(../../config/config);

var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = environment[env];
var db        = {};

const Sequelize = new Sequelize(config.url, config);

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
