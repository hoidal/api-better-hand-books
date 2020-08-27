"use strict";
module.exports = (sequelize, DataTypes) => {
  const Donee = sequelize.define(
    "Donee",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: DataTypes.STRING,
      organization: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: DataTypes.STRING,
      notes: DataTypes.STRING,
    },
    {}
  );
  Donee.associate = function (models) {};
  return Donee;
};
