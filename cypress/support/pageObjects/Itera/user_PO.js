class User_PO {
    clickOnCreateNewButton() {
      cy.get(".btn-primary").click();
  
      return this;
    }
  
    createUserUrlValidation() {
      cy.url().should("include", "/Customer/Create");
  
      return this;
    }
  
    clickOnGoBackToListButton() {
      cy.get(".btn-link").click();
  
      return this;
    }
  
    backToListVerification() {
      cy.url().should("include", "/Dashboard");
    }
  
    createNewUser(name, company, address, city, phone, email) {
      cy.get('[id="Name"]').type(name);
      cy.get('[id="Company"]').type(company);
      cy.get('[id="Address"]').type(address);
      cy.get('[id="City"]').type(city);
      cy.get('[id="Phone"]').type(phone);
      cy.get('[id="Email"]').type(email);
  
      return this;
    }
  
    clickOnCreateButton() {
      cy.get(".btn-primary").click();
  
      return this;
    }
  
    userCreatedValidation(name, company, address, city, phone, email) {
      cy.get(".table > tbody > tr:last")
        .find("td")
        .then(($cells) => {
          expect($cells.eq(0).text().trim()).to.eq(name);
          expect($cells.eq(1).text().trim()).to.eq(company);
          expect($cells.eq(2).text().trim()).to.eq(address);
          expect($cells.eq(3).text().trim()).to.eq(city);
          expect($cells.eq(4).text().trim()).to.eq(phone);
          expect($cells.eq(5).text().trim()).to.eq(email);
        });
    }
  
    searchForUser(name) {
      cy.get('[id="searching"]').clear().type(name);
  
      this.clickOnSearchButton();
    }
  
    clickOnSearchButton() {
      cy.get("[action] [type='submit']").click();
    }
  
    userInTableValidation(name, company, address, city, phone, email) {
      this.userCreatedValidation(name, company, address, city, phone, email);
    }
  
    detailsButtonValidation() {
      cy.get(".btn-outline-info").should("exist");
  
      return this;
    }
  
    clickOnDetailsButton() {
      cy.get(".btn-outline-info").click();
  
      return this;
    }
  
    detailsPageUrlValidation() {
      cy.url().should("include", "/Customer/Details");
  
      return this;
    }
  
    userDetailPageValidation(name) {
      cy.get(".btn-outline-primary").should("exist");
      cy.get(".btn-link").should("exist");
      cy.get("dd:nth-of-type(1)").should("contain", name);
  
      return this;
    }
  
    clickOnBackToListButton() {
      cy.get(".btn-link").click();
      cy.url().should("include", "/Dashboard");
  
      return this;
    }
  
    editButtonValidation() {
      cy.get(".btn-outline-primary").should("exist");
  
      return this;
    }
  
    clickOnEditButton() {
      cy.get(".btn-outline-primary").click();
  
      return this;
    }
  
    editUserUrlValidation() {
      cy.url().should("include", "/Customer/Edit");
  
      return this;
    }
  
    editUserDetails(randomWord, randomEmail) {
      cy.get('[class="form-control text-box single-line"]')
        .eq(1)
        .clear()
        .type(randomWord);
  
      cy.get('[class="form-control text-box single-line"]')
        .eq(5)
        .clear()
        .type(randomEmail);
  
      cy.get(".btn-primary").click();
    }
  
    userEditedValidation(randomWord, randomEmail) {
      cy.url().should("include", "/Dashboard");
  
      cy.get(".table > tbody > tr:last")
        .find("td")
        .then(($cells) => {
          expect($cells.eq(1).text().trim()).to.eq(randomWord);
          expect($cells.eq(5).text().trim()).to.eq(randomEmail);
        });
  
      return this;
    }
  
    deleteButtonValidation() {
      cy.get(".btn-outline-danger").should("exist");
  
      return this;
    }
  
    clickOnDeleteButton() {
      cy.get(".btn-outline-danger").click();
  
      return this;
    }
  
    validateUserDeletePage() {
      cy.url().should("include", "/Customer/Delete");
      cy.get(".btn-outline-danger").should("exist");
      cy.get(".btn-link").should("exist");
  
      return this;
    }
  
    deleteTheUser() {
      cy.get(".btn-outline-danger").click();
  
      return this;
    }
  
    userDeletedValidation(name) {
      cy.url().should("include", "/Dashboard");
  
      cy.get(".table > tbody > tr:last")
        .find("td")
        .then(($cells) => {
          expect($cells.eq(0).text().trim()).not.to.eq(name);
        });
    }
  }
  
  export default User_PO;
  