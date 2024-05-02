/*
Creating a Cucumber Program 

In this method we use Given, When, Then. This will help us make a more documented test. 

Author: Jonathan A. Ramírez Colón
Date: 5/2/2024
*/

const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

Given('Open Google Chrome', function () {
    // Write code here that turns the phrase above into concrete actions
    browser.url('https://www.google.com/');
});

When('Input word in Search', async () => {
    // Write code here that turns the phrase above into concrete actions
    await $('[name="q"]').setValue('Laptop')
});

  
Then('Press Enter', function () {
    // Write code here that turns the phrase above into concrete actions
    browser.keys('Enter')
    browser.pause(2000)
});

  