const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries: 0,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    viewportWidth: 1980,
    viewportHeight: 1020,
  },
});
