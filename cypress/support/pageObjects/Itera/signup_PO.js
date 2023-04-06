class SignUp_PO {
  signUpButtonValidation() {
    cy.get(".nav-link").contains("Sign Up").should("exist");

    return this;
  }

  clickOnSignUpButton() {
    cy.get(".nav-link").contains("Sign Up").click();

    return this;
  }

  validateSignUpUrl() {
    cy.url().should("include", "/UserRegister/NewUser");
  }

  typeRandomFirstName(pass) {
    cy.get('[id="FirstName"]').type(pass);

    return this;
  }

  typeRandomSurname(pass) {
    cy.get('[id="Surname"]').type(pass);

    return this;
  }

  typeRandomEpost(pass) {
    cy.get('[id="E_post"]').type(pass);

    return this;
  }

  typeRandomUserName(pass) {
    cy.get('[id="Username"]').type(pass);

    return this;
  }

  typeRandomMobileNumber(pass) {
    cy.get('[id="Mobile"]').type(pass);

    return this;
  }

  typePassword(pass) {
    cy.get('[id="Password"]').type(pass);

    return this;
  }

  typeConfirmPassword(pass) {
    cy.get('[id="ConfirmPassword"]').type(pass);

    return this;
  }

  typeIncorrectConfirmPassword(pass) {
    cy.get('[id="ConfirmPassword"]').type(pass);

    return this;
  }

  incorrectPasswordValidation() {
    cy.get('[id="ConfirmPassword-error"]')
      .contains("'Confirm password' and 'Password' do not match.")
      .should("exist");

    return this;
  }

  clickOnSubmitButton() {
    cy.get('[id="submit"]').click();

    return this;
  }

  confirmExistingUser() {
    cy.get(".label-danger").contains("Username already exist").should("exist");

    return this;
  }

  typeRegisteredFirstName() {
    cy.get('[id="FirstName"]').type(Cypress.env("firstname"));

    return this;
  }

  typeRegisteredSurname() {
    cy.get('[id="Surname"]').type(Cypress.env("surname"));

    return this;
  }

  typeRegisteredUserName() {
    cy.get('[id="Username"]').type(Cypress.env("username"));

    return this;
  }

  typeRegisteredPassword() {
    cy.get('[id="Password"]').type(Cypress.env("password"));

    return this;
  }

  typeCorrectConfirmPassword() {
    cy.get('[id="ConfirmPassword"]').type(Cypress.env("password"));

    return this;
  }

  confirmSuccessfulRegistration() {
    cy.get(".label-success")
      .contains("Registration Successful")
      .should("exist");

    return this;
  }
}

export default SignUp_PO;
