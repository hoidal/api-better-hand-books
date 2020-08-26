"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: DataTypes.STRING,
      genre: DataTypes.STRING,
      isbn: DataTypes.STRING,
      condition: DataTypes.STRING,
      dateReceived: DataTypes.DATE,
      dateDonated: DataTypes.DATE,
      notes: DataTypes.STRING,
      donor_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Donors",
          key: "id",
        },
      },
      donee_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Donees",
          key: "id",
        },
      },
    },
    {}
  );
  Book.associate = function (models) {
    Book.belongsTo(models.Donor, { as: "bookDonor", foreignKey: "donor_id" });
    Book.belongsTo(models.Donee, { as: "bookDonee", foreignKey: "donee_id" });
  };
  return Book;
};
