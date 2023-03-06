
const { defineConfig } = require("cypress");

module.exports = defineConfig({

env:{
url:'http://mada-dashboard-qa.decisionresourcesgroup.com/users/sign_in',
},

retries:{
runMode:1,
},

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    //  return require('./cypress/plugins/index.js')(on,config)
    },
    specPattern: 'cypress/specs/*.js',
    screenshotsFolder: 'cypress/screenshots',
    pageLoadTimeout: 30000,
    reporter:'mocha',
    defaultCommandTimeout:8000,
    chromeWebSecurity:false
    },
});

