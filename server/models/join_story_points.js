'use strict'
module.exports = function (sequelize, DataTypes) {
  var join_story_points = sequelize.define('join_story_points', {
    name: DataTypes.STRING
  }, {})
  join_story_points.associate = function (models) {
    join_story_points.belongsTo(models.storylines, {as: 'sl', foreignKey: 'SL_ID'})
    join_story_points.belongsTo(models.plotpoints, {as: 'pp', foreignKey: 'PP_ID'})
  }
  return join_story_points
}
