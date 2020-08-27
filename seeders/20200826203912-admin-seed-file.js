"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const adminUsers = [];

    adminUsers.push({
      name: "admin",
      email: "admin@admin.com",
      encryptedPassword: bcrypt.hashSync("password", 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return queryInterface.bulkInsert("Admins", adminUsers, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Admins", null, {});
  },
};
