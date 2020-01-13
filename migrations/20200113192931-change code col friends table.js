'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Friends',
      'code',
      {
        type: Sequelize.BIGINT
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
      'Friends',
      'code',
      {
        type: Sequelize.INTEGER
      }
    )
  }
};
