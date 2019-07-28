# Protractor Example
Herein lies an example [Protractor](http://protractortest.org) project, that includes tests (some quite silly) that aim to illustrate solutions for common issues when writing e2e tests.

## Example Protractor project that:
* Makes use of page objects
* Runs multiple browsers at once
* Runs tests sharded (parallel)
* is written using es6

## Setup:
* Install [Node](http://nodejs.org) (v8.x.x or later)
* `git clone https://github.com/GanesanKarthikeyanTE/JSEcomAutomation.git`
* `npm i` to install the project dependencies

## Run tests:
* run tests via plain Protractor `node_modules/.bin/protractor conf.js`

## Troubleshooting
* run `node -v` and make sure your node version is 8.x.x or greater
* `webdriver-manager` _should_ have updated on install, but if not, run `npm run update` to be sure
