'use strict';
module.exports = function(sequelize, DataTypes) {
  var Reflection = sequelize.define('Reflection', {
    title: DataTypes.STRING,
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Reflection;
};
