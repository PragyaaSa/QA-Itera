// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("validateSuccessfulLogin", () => {
    cy.get(".nav-link").contains("Login").should("exist");
    cy.get(".nav-link").contains("Login").click();
    cy.url().should("include", "/Login");
    cy.get('[id="Username"]').type(Cypress.env("username"));
    cy.get('[id="Password"]').type(Cypress.env("password"));
    cy.get("input[name='login']").click();
  
    cy.url().should("include", "/Dashboard");
  });
  
  Cypress.Commands.add("preserveCookies", () => {
    Cypress.Cookies.preserveOnce("ASP.NET_SessionId");
  });