const { DataTypes } = require("sequelize");

("use strict");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Books", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hasDetails: {
        type: Sequelize.BOOLEAN,
      },
      title: {
        type: Sequelize.STRING,
      },
      author: {
        type: Sequelize.ARRAY(DataTypes.TEXT),
      },
      isbn: {
        type: Sequelize.STRING,
      },
      condition: {
        type: Sequelize.STRING,
      },
      dateReceived: {
        type: Sequelize.DATE,
      },
      dateDonated: {
        type: Sequelize.DATE,
      },
      notes: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      categories: {
        type: Sequelize.ARRAY(DataTypes.TEXT),
      },
      pageCount: {
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.STRING,
      },
      maturityRating: {
        type: Sequelize.STRING,
      },
      publishedDate: {
        type: Sequelize.STRING,
      },
      publisher: {
        type: Sequelize.STRING,
      },
      donor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Donors",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      donee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Donees",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Books");
  },
};
