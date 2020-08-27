const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroSequelize = require("admin-bro-sequelizejs");
const bcrypt = require("bcrypt");
const { Admin } = require("../../models");
const adminBro = require("./admin-bro");

AdminBro.registerAdapter(AdminBroSequelize);

const adminPanelRouter = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const admin = await Admin.findOne({ email });
    if (admin) {
      const matched = await bcrypt.compare(password, admin.encryptedPassword);
      if (matched) {
        return admin;
      }
    }
    return false;
  },
  cookiePassword: "better-hand-books",
});

module.exports = { adminPanelRouter, adminBro };
