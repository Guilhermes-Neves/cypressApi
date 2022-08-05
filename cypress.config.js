const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 30000,
  retries: {
    runMode: 2,
    openMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://br-dev-mycis.synnex.org/taxmanager-web',
  },
})
