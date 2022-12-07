const { defineConfig } = require("cypress");
module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://byndyusoft.com',
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    pageLoadTimeout: 100000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
