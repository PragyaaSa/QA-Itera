class Login_PO {
  loginButtonValidation() {
    cy.get(".nav-link").contains("Login").should("exist");

    return this;
  }

  clickOnLoginButton() {
    cy.get(".nav-link").contains("Login").click();
    
    return this;
  }

  validateLoginUrl() {
    cy.url().should("include", "/Login");
  }

  successfulLoginValidation() {
    cy.url().should("include", "/Dashboard");
  }

  typeRandomUserName(pass) {
    cy.get('[id="Username"]').type(pass);
    
    return this;
  }

  typeRandomPassword(pass) {
    cy.get('[id="Password"]').type(pass);
   
    return this;
  }

  checkIncorrectValidation() {
    cy.get(".alert-danger").should("exist");
    
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

  clickOnLogin() {
    cy.get("input[name='login']").click();
    
    return this;
  }

  clickOnClearButton() {
    cy.get("input[name='clear']").click();
    
    return this;
  }

  clickOnRegisterLink() {
    cy.get('[class="btn btn-link"]').click();
  }
}

export default Login_PO;
