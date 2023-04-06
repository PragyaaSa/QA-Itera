/// <reference types ="Cypress" />

import SignUp_PO from "../support/pageObjects/Itera/signup_PO";
import { faker } from "@faker-js/faker";

const signUp_PO = new SignUp_PO();

const password = faker.internet.password();

const errorClassValidation = [
  "Please enter first name",
  "Please enter surname",
  "Please enter username",
  "Please enter password",
];

describe("Signing up in Itera ", () => {
  before(() => {
    cy.visit(Cypress.env("baseURL"));
  });

  context("Itera sign up dependent test", function () {
    beforeEach(function () {
      signUp_PO
        .signUpButtonValidation()
        .clickOnSignUpButton()
        .validateSignUpUrl();
    });

    it("Should not sign up with empty fields", function () {
      signUp_PO.clickOnSubmitButton();
      
      errorClassValidation.forEach((errorMsg) => {
        cy.contains(errorMsg).should("exist");
      });
    });

    it("Should not sign up with existing user", function () {
      signUp_PO
        .typeRegisteredFirstName()
        .typeRegisteredSurname()
        .typeRegisteredUserName()
        .typeRegisteredPassword()
        .typeCorrectConfirmPassword()
        .clickOnSubmitButton()
        .confirmExistingUser();
    });

    it("Should not register with different values in password and confirm password", function () {
     
      const incorrectPassword = faker.internet.password();

      signUp_PO
        .typePassword(password)
        .typeIncorrectConfirmPassword(incorrectPassword)
        .clickOnSubmitButton()
        .incorrectPasswordValidation();
    });

    it("Should register successfully", function () {
      
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const userName = faker.internet.userName();
      const ePost = faker.random.word();
      const mobileNumber = faker.phone.number();

      signUp_PO
        .typeRandomFirstName(firstName)
        .typeRandomSurname(lastName)
        .typeRandomEpost(ePost)
        .typeRandomMobileNumber(mobileNumber)
        .typeRandomUserName(userName)
        .typePassword(password)
        .typeConfirmPassword(password)
        .clickOnSubmitButton()
        .confirmSuccessfulRegistration();
    });
  });
});
