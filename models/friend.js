'use strict';
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    userID: DataTypes.INTEGER,
    friendID: DataTypes.INTEGER
  }, {});
  Friend.associate = function(models) {

    models.Friend.belongsTo(
      models.User, 
      {as: 'user', foreignKey:'friendID'}
    )

  };
  return Friend;
};