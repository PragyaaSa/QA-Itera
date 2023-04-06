/// <reference types ="Cypress" />

import User_PO from "../support/pageObjects/Itera/user_PO";
import { faker } from "@faker-js/faker";

const newUser_PO = new User_PO();
const name = faker.name.fullName();

describe("Logging in for Itera ", () => {
  before(() => {
    cy.visit(Cypress.env("baseURL"));
    cy.validateSuccessfulLogin();
  });

  beforeEach(function () {
    cy.preserveCookies();
  });

  it("Should validate Create user page and return to list on clicking 'Go back to list'", function () {
    newUser_PO
      .clickOnCreateNewButton()
      .createUserUrlValidation()
      .clickOnGoBackToListButton()
      .backToListVerification();
  });

  context("Create new user dependent test", function () {
    const company = faker.company.name();
    const address = faker.address.country();
    const city = faker.address.city();
    const phone = faker.phone.number();
    const email = faker.internet.email();

    before(function () {
      newUser_PO
        .clickOnCreateButton()
        .createNewUser(name, company, address, city, phone, email)
        .clickOnCreateButton()
        .userCreatedValidation(name, company, address, city, phone, email);
    });

    beforeEach(function () {
      newUser_PO.searchForUser(name);
    });

    it("Should validate the searched user is in table", function () {
      newUser_PO.userInTableValidation(
        name,
        company,
        address,
        city,
        phone,
        email
      );
    });

    it("Should view the details of the user", function () {
      newUser_PO
        .detailsButtonValidation()
        .clickOnDetailsButton()
        .detailsPageUrlValidation()
        .userDetailPageValidation(name)
        .clickOnBackToListButton();
    });

    it("Should edit the user", function () {
      const randomWord = faker.random.word();
      const randomEmail = faker.internet.exampleEmail();

      newUser_PO
        .editButtonValidation()
        .clickOnEditButton()
        .editUserUrlValidation()
        .editUserDetails(randomWord, randomEmail);
      newUser_PO.userEditedValidation(randomWord, randomEmail);
    });

    it("Should delete the user", function () {
      newUser_PO
        .deleteButtonValidation()
        .clickOnDeleteButton()
        .validateUserDeletePage()
        .deleteTheUser()
        .userDeletedValidation(name);
    });
  });
});
