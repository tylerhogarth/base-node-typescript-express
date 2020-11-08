# Setup
* TypeScript, only required during development
  - npm install -D typescript@3.3.3
* Linter for TypeScript
  - npm install -D tslint@5.12.1
* Express for Node.js
  - npm install -S express@4.16.4
* Express types for TypeScript type inference
  - npm install -D @types/express@4.16.1
* File watcher to make development easier
  - npm install -D nodemon

## Fun Facts
* In the package.json the parameter "outDir": "dist" is used to output the JavaScript files for Prod use

# Running the project
## Run once
npm start
package.json 'start' script will transpile typescript to dist folder then run dist/app.js

## Watch / nodemon
npm run start:watch
package.json 'start:watch' script uses nodemonConfig to watch files and 'start' on file change

# Environment Variables

* ENV_PRODUCTION=true/false
* PORT_DEFAULT=xxxx