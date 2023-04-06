/// <reference types ="Cypress" />

import Login_PO from "../support/pageObjects/Itera/login_PO";
import SignUp_PO from "../support/pageObjects/Itera/signup_PO";

import { faker } from "@faker-js/faker";

const login_PO = new Login_PO();

const errorClassValidation = ["Please enter username", "Please enter password"];

describe("Logging in for Itera ", () => {
  before(() => {
    cy.visit(Cypress.env("baseURL"));
  });

  beforeEach(function () {
    cy.preserveCookies();
  });

  context("Itera login dependent test", function () {
    beforeEach(function () {
      login_PO.loginButtonValidation().clickOnLoginButton();
    });

    it("Should validate login page", function () {
      login_PO.validateLoginUrl();
    });

    it("Should not login with empty fields", function () {
      login_PO
        .typeRegisteredUserName()
        .typeRegisteredPassword()
        .clickOnClearButton()
        .clickOnLogin()
        .checkIncorrectValidation();

      errorClassValidation.forEach((errorMsg) => {
        cy.contains(errorMsg).should("exist");
      });
    });

    it("Should not login with incorrect credentials", function () {
      const userName = faker.internet.userName();
      const password = faker.internet.password();

      login_PO
        .typeRandomUserName(userName)
        .typeRandomPassword(password)
        .clickOnLogin()
        .checkIncorrectValidation();
    });

    it("Should take user to registration page if not registered", function () {
      const signUp_PO = new SignUp_PO();

      login_PO.clickOnRegisterLink();
      signUp_PO.validateSignUpUrl();
    });

    it("Should register successfully with valid credentials", function () {
      login_PO
        .clickOnLoginButton()
        .typeRegisteredUserName()
        .typeRegisteredPassword()
        .clickOnLogin()
        .successfulLoginValidation();
    });
  });
});
