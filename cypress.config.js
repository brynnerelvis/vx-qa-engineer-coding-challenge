const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
    e2e: {
        setupNodeEvents(on, config) {
          const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
          });
          
          require('cypress-mochawesome-reporter/plugin')(on);

          on("file:preprocessor", bundler);
          addCucumberPreprocessorPlugin(on, config);
            allureWriter(on, config);
            return config;

        },
        specPattern: "cypress/integration/features/*.feature", 
        //specPattern: ["cypress/integration/**/*.{js,jsx,ts,tsx,feature}"],
        chromeWebSecurity: true,
        supportFile: false
    }, 
  
    "viewportWidth": 1920,
    "viewportHeight": 1080

    
});
 