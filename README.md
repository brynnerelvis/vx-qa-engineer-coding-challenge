Author: Brynner Parir Elvis

clone this repo and open terminal with root project directory and following the command step by step:
 
 
 #### System Installation tools:
 1. Node.JS
 2. npm
 3. VS Code (IDE)
 
 #### install the dependencies:

 ```bash
 npm init -y
 ```

 ```bash
 npm install cypress --save-dev
 ```

 ```bash
 npm install @badeball/cypress-cucumber-preprocessor
 ```

 ```bash
 npm i -D cypress @bahmutov/cypress-esbuild-preprocessor esbuild
 ```

  ```bash
npm i --save-dev cypress-mochawesome-reporter
 ```

 ```bash
 npm i cypress-xpath
 ```

  ```bash
 npm i cypress-parallel
 ```
 
 #### Suite run: 

   ```bash
 npm run cy:run
 ```

 #### Single run:

  ```bash
 npx cypress run --spec cypress\integration\features\*.feature --headed --browser chrome
 ```

 #### run in parallel:

  ```bash
npm run cy:parallel  
 ```


