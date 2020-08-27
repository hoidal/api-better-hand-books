const AdminBro = require("admin-bro");
const AdminBroSequelize = require("admin-bro-sequelizejs");
const { Book, Donor, Donee, Admin } = require("../../../models");

const {
  AdminResource,
  BookResource,
  DonorResource,
  DoneeResource,
} = require("./resources");

AdminBro.registerAdapter(AdminBroSequelize);

const adminBro = new AdminBro({
  rootPath: "/admin",
  loginPath: "/admin/login",
  resources: [
    {
      resource: Admin,
      options: {
        ...AdminResource,
      },
    },
    {
      resource: Book,
      options: {
        ...BookResource,
      },
    },
    {
      resource: Donor,
      options: {
        ...DonorResource,
      },
    },
    {
      resource: Donee,
      options: {
        ...DoneeResource,
      },
    },
  ],
  branding: {
    companyName: "Better Hand Books",
    softwareBrothers: false,
  },
});

module.exports = adminBro;
