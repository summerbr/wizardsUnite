'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Users',
        'house',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'Users',
        'profession',
        {
          type: Sequelize.STRING
        }
      ),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'house'), 
      queryInterface.removeColumn('Users', 'profession'), 
    ])
  }
};
