'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    code: DataTypes.INTEGER,
    location: DataTypes.STRING,
    house: DataTypes.STRING,
    profession: DataTypes.STRING,
    giftPref1: DataTypes.STRING,
    giftPref2: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    models.User.hasMany(
      models.Friend,
      {
        as: 'friendID',
        foreignKey: 'id'
      }
    )
  };
  return User;
};