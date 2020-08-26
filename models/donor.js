"use strict";
module.exports = (sequelize, DataTypes) => {
  const Donor = sequelize.define(
    "Donor",
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: DataTypes.STRING,
      organization: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      notes: DataTypes.STRING,
    },
    {}
  );
  Donor.associate = function (models) {};
  return Donor;
};
