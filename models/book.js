"use strict";
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "Book",
    {
      title: DataTypes.String,
      hasDetails: DataTypes.BOOLEAN,
      author: DataTypes.ARRAY(DataTypes.TEXT),
      isbn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      condition: DataTypes.STRING,
      dateReceived: DataTypes.DATE,
      dateDonated: DataTypes.DATE,
      notes: DataTypes.STRING,
      language: DataTypes.STRING,
      categories: DataTypes.ARRAY(DataTypes.TEXT),
      description: DataTypes.TEXT,
      pageCount: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      maturityRating: DataTypes.STRING,
      publishedDate: DataTypes.STRING,
      publisher: DataTypes.STRING,
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
