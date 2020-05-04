# Puppeteer with Automation Test
[![circleci](https://img.shields.io/circleci/project/github/patheard/cucumber-puppeteer.svg)](https://circleci.com/gh/patheard/cucumber-puppeteer)
[![codecov](https://codecov.io/gh/patheard/cucumber-puppeteer/branch/master/graph/badge.svg)](https://codecov.io/gh/patheard/cucumber-puppeteer)

![Cucumber Puppeteer](https://raw.githubusercontent.com/patheard/cucumber-puppeteer/master/test/screenshots/ref/cucumber-puppeteer-full.png)

## Introducing

A Node.js behavioural test framework made using [Cucumber.js](https://github.com/cucumber/cucumber-js) and [Puppeteer](https://github.com/GoogleChrome/puppeteer).
This is a program that supports automatic testing of unsplash API using Puppeteer.

**Library:** Puppeteer 1.19.0 ([`DOCCUMENTATION`](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md))

**Programing language:** JavaScript 

**BDD Framework:** Cucumber-js 5.1.0

## Application for the testing:

**Application:** https://unsplash.com

**API documentation:** https://unsplash.com/documentation

## Test scenario list:

The test steps are generic so you can quickly create your test suite:

```gherkin
Scenario: 1. Check the user's full name after login to the application
  Given the user logins successfully
  When the user goes to Collection page
  Then the user should see the user's full name is displaying at the center of the page.
```

```gherkin
Scenario: 2. Check that the user's location is correct after updated
  Given the user logins successfully
  And the user goes to Edit Profile page
  When the user enters "Vietnam" in the location input
  And the user clicks on the Update account button
  Then the user should see the location is updated correctly
```

```gherkin
Scenario: 3. Check that the image's camera model and focal length are correct
  Given the user logins successfully
  When the user opens an image with ID 2TLREZi7BUg using this URL 
	https://unsplash.com/photos/2TLREZi7BUg
  And the user clicks on Info button
  Then the user should see the image's camera model and focal length are displaying
	correctly the expected result must come from Unsplash API)
```

```gherkin
  Scenario: 4. Check that all related tags of a photo are correct
  Given the user logins successfully
  When the user opens an image with ID 2TLREZi7BUg using this URL 
    https://unsplash.com/photos/2TLREZi7BUg
  Then the user should see all related tags of the photo listed at the bottom of the page 
	are displaying correctly (the expected result must come from Unsplash API)
```

```gherkin
Scenario: 5. Check that the user can create a new collection and add a photo into it.
  Given the user logins successfully
  And the user creates a new collection using API
  And the user add a photo into the added collection using API
  When the user clicks on the added photo to the collection
  Then the user notices that the ID of photo in URL is correct
```

```gherkin
  Scenario: 6. Check that the image is downloadable and the correct 
		image has been saved when the user clicks on Download button
  Given the user logins successfully
  And the user opens an image with ID 2TLREZi7BUg using this
		URL https://unsplash.com/photos/2TLREZi7BUg
  When the user clicks on Download button
  Then the user notices that the image is downloadable and the correct image has been saved.
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

URL clone: **https://gitlab.com/duynguyenx/js_sharing.git**


### Installing

Open command line in  project's location and follow examples below.

Install dependencies in package.json:

```bash
  npm install
```

## Configuration Test Environment	
	
Configuration and hooks are loaded from [`/test/config/config.js`](https://gitlab.com/duynguyenx/js_sharing/blob/puppeteer/test/config/env.js).  You can override behaviour with the following environment variables:

```bash
  HOST: 'https://unsplash.com', 		#  TEST ENVIROMENT BASE URL
  API_HOST: 'https://unsplash.com/napi',	#  TEST ENVIROMENT API HOST
  TOKEN: '406ae0b53e065058ddc3b468e1caf569e574d97afcd011785f297aebfb3429ca',    #  ACCESS TOKEN 
  TIMEOUT_SECONDS: 30,	#  DEFAULT TIME OUT FOR EACH PUPPETEER FUNCTION
  HEADLESS: false,	#  RUN WITH CHROME-HEADLESS
  SLOW_MO: 0		#  SLOWS DOWN PUPPETEER OPERATIONS BY THE SPECIFIED AMOUNT OF MILLISECONDS. USEFULL SO THAT YOU CAN SEE WHAT IS GOING ON
```

## Running the tests with commandline

Look at the [`*.feature`](https://gitlab.com/duynguyenx/js_sharing/tree/puppeteer/test/features) files in the project to see the available test steps.  You can run them all with: :

```bash
  ..\node_modules\.bin\cucumber-js  		#  You can stay at test directory
```

**Tags:**

```bash
  ..\node_modules\.bin\cucumber-js --tags <EXPRESSION>  # To run specific features or scenarios
  
  Example: ..\node_modules\.bin\cucumber-js --tags @id-1
```


**Parallel:**

```bash
  ..\node_modules\.bin\cucumber-js --parallel <NUMBER_OF_SLAVES>  # To run specific features or scenarios
  
  Example: ..\node_modules\.bin\cucumber-js ----parallel 3
```

# License and credits

This code is licensed under the PHUC MY NHAN NASHER license.