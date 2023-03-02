
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/specs/*.js',
    screenshotsFolder: 'cypress/screenshots',
    pageLoadTimeout: 80000,


  },
});

