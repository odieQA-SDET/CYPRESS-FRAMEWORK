const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://z29vzcbmaw5kaw5nigzvcib5b3u.prospace.io/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
