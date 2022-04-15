/* global cy */
describe("Checking input phrase", () => {
    it("Should not be empty or number", () => {
      cy.visit("http://localhost:3000");

    
      cy.get('textarea[name="inputPhrase"]')
        .contains("");
      
      cy.get('.errMsg')
        .contains("Please enter valid values!");
  
    })
  });