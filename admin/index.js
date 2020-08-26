const AdminBro = require("admin-bro");
const { Book, Donor, Donee } = require("../models");
const { AdminResource } = require("./adminResource");
const adminBro = new AdminBro({
  rootPath: "/admin",
  loginPath: "/admin/login",
  resources: [Book, Donor, Donee],
  branding: {
    companyName: "Better Hand Books",
    softwareBrothers: false,
  },
});
module.exports = adminBro;
