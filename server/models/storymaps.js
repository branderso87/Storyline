'use strict';
module.exports = function(sequelize, DataTypes) {
  var storymaps = sequelize.define('storymaps', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return storymaps;
};