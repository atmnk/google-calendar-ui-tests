module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      config.chromeWebSecurity =  false
    },
  },
};
