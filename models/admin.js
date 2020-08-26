"use strict";
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "Admin",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      encryptedPassword: DataTypes.STRING,
    },
    {}
  );
  Admin.associate = function (models) {};
  return Admin;
};
