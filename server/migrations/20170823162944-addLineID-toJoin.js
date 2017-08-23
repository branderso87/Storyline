'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn('join_story_points', 'SL_ID', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'storylines',
        key: 'id'
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('join_story_points', 'SL_ID')
  }
}
