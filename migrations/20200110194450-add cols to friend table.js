'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Friends',
        'username',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Friends',
        'code',
        {
          type: Sequelize.INTEGER
        }
      ),
    ])
  },
  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Friends', 'username'), 
      queryInterface.removeColumn('Friends', 'code'), 
    ])
  }
};
