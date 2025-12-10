const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://getwashlaundry.id/id",
    apiUrl: "https://apibisnis.getwashlaundry.id/v1"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
