/// <reference types="cypress-xpath" />
require('cypress-xpath')

import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import locatorsPage from "../../Locators/Locators";
const locator = new locatorsPage();


Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})



// <------------------------------------------------------------------->
// <----------------------- Verify the Privathaftpflicht calculator ------------------------------->
// <------------------------------------------------------------------->

Given("That I can open {string}", function (URL) {
  cy.visit(URL);
  cy.get('#uc-btn-accept-banner', { timeout: 30000 }).click({ force: true })
});

When("I navigate to Versicherungen and select Privathaftpflicht", function () {
  cy.xpath(locator.versicherungen).click({ force: true })
  cy.xpath(locator.privathaftpflicht).click({ force: true })
});

When("I enter my age and Single ohne Kinder", function () {
  cy.xpath(locator.my_age, { timeout: 60000 }).type("12", { force: true })
});

When("I go to the Privathaftpflicht personal information page", function () {
  cy.xpath(locator.jetztvergleichen_btn).click({ force: true })
});

When("I enter my birthdate", function () {
  cy.xpath(locator.birthdate, { timeout: 30000 }).type("01.07.2005", { force: true })
});

When("I enter my zip code", function () {
  cy.xpath(locator.zip, { timeout: 30000 }).type("13088", { force: true })
});

When("I click the Jetzt vergleichen button", function () {
  cy.xpath(locator.jetztvergleichen_btn).click({ force: true })
});

Then("I should see a page that lists the available tariffs for my selection", function () {
  /* Assertion: Verify that - at least 5 tariffs are shown */
  cy.wait(2000)
  locator.verifyProductCount();
});



// <------------------------------------------------------------------->
// <----------------------- Load multiple tariff result pages ------------------------------->
// <------------------------------------------------------------------->

When("I display the tariff Result List page", function () {
  cy.xpath(locator.result_page).should('be.visible');
});

Then("I should see the total number of available tariffs listed above all the result list", function () {
  locator.verifyProductCount();
});

When("I scroll to the end of the result list page", function () {
  cy.xpath(locator.load_more_button).scrollIntoView();
});

Then("I should see only the first 20 tariffs displayed", function () {
  cy.xpath(locator.product).should('have.length', 20);
});

When("I click on the button labeled 20 weitere Tarife laden", function () {
  cy.xpath(locator.load_more_button).click({ force: true });
});

Then("I should see the next 20 tariffs displayed", function () {
  cy.xpath(locator.product).should('have.length', 40);
});

Then("I can continue to load any additional tariffs until all tariffs have been displayed", function () {
  cy.xpath(locator.all_load_btn).click({ force: true });
  /*Assertion: Verify that the weitere Tarife laden button is no longer displayed when all the tariffs are visible*/
  cy.xpath(locator.load_more_button, { timeout: 30000 }).should('not.exist');
  /*Assertion: Verify that  the total number of tariffs displayed matches the total listed number of tariffs above result list*/
  locator.verifySearchResultWithProductCount();
});



// <------------------------------------------------------------------->
// <----------------------- Verify offer details for a selected tariff ------------------------------->
// <------------------------------------------------------------------->

Then("I should see the tariff price of the first tariff", function () {
  cy.xpath(locator.first_product_price).should('be.visible');
});

When("I open tariff details", function () {
  cy.xpath(locator.tarifdetails).click({ force: true });
});

Then("I see tarrif details sections: {string}, {string}, {string}", function (section1, section2, section3) {
  /*Assertion: Verify that the offer page displays both In 5 Minuten online wechseln buttons*/
  cy.xpath(locator.tarif_details_section).should('be.visible').should('have.length', 5);
  locator.verifyTarifDetailsSection(section1, section2, section3);
});

Given("I see tariff details sections: {string}, {string}", function (section4, section5) {
  locator.verifyTarifDetailsSection2(section4, section5);
});

When("I see the ZUM ONLINE-ANTRAG button", function () {
  cy.xpath(locator.zum_online_btn).should('be.visible');
});














