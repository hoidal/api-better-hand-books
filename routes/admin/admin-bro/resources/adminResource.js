const bcrypt = require("bcrypt");

module.exports = {
  actions: {
    new: {
      before: async (request) => {
        if (request.payload.password) {
          request.payload = {
            ...request.payload,
            encryptedPassword: await bcrypt.hash(request.payload.password, 10),
          };
        }
        return request;
      },
    },
  },
  properties: {
    encryptedPassword: {
      isVisible: false,
    },
    password: {
      type: "password",
      isVisible: {
        show: false,
        edit: true,
        list: false,
        filter: false,
      },
    },
  },
};
