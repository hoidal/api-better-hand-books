"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const testBooks = [];

    testBooks.push({
      title: "The Alchemist",
      author: "Paolo Coehlo",
      genre: null,
      isbn: "0-06-250218-2",
      condition: "Good",
      dateReceived: new Date(),
      dateDonated: null,
      notes: "test note",
      donor_id: null,
      donee_id: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return queryInterface.bulkInsert("Books", testBooks, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
