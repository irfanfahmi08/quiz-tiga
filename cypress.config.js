const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "https://getwashlaundry.id/id"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
