'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('join_story_points', 'PP_ID', {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'plotpoints',
      key: 'id'
    }
    })
  },

  down: function (queryInterface, Sequelize) {
  return queryInterface.removeColumn('join_story_points', 'PP_ID')
  }
}
