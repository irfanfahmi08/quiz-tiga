const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://getwashlaundry.id/id",
    apiUrl: "https://apibisnis.getwashlaundry.id/v1",
    apiReqres: "https://reqres.in/api",
    apiKey: "reqres_b67b9340cd23469fb7cb62d00fff0f71"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
