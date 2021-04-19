# (Automation e2e) ManoMano application

This repo contains tests for the ManoMano application and the Purgomalum API tests automation. 
Tests can be executed via different helpers.

This automation project was created using CodeceptJs and the BDD methodology to describe the tests.

## Preconditions

To run the below commands properly, you should have installed Node JS and Git.

Also, Java 8 is required to run Allure reports, make sure you have set the JAVA_HOME system variable before generating the reports.

## Installation

This is a playground for your first steps in testing, so instead of installing it from NPM, it is recommended to clone it from repo instead and then install the dependencies.

To clone the project:

```bash
git clone git@github.com:codecept-js/examples.git
```

To install the dependencies:

```bash
npm install
```
This will install CodeceptJS with Playwright.

Note: It is recommended to use the command line to execute the whole process.

## Running Tests

Run the tests with:

```bash
npm test
```

## Reports
After the test execution, you can run the below command to generate the report.

```bash
allure serve output
```
It creates one XML file per Feature and saves it in the output folder. And a webpage is expected to open with the results.


# (API Automation) Purgomalum.com

This section contains the API test automation for the website Purgomalum.com

This automation was created on Postman.

 
## Preconditions

To run the API automation, you need to have installed the Postman tool https://www.postman.com/downloads/

## Setup

You should find the JSON file "Purgomalum API Test Automation.postman_collection.json" in the main folder of the repo cloned for the e2e automation.

Then, you have to open Postman and you need to import the collection store in the JSON file "Purgomalum API Test Automation.postman_collection.json".




## License
[MIT](https://choosealicense.com/licenses/mit/)
