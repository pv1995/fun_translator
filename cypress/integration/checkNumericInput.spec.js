/* global cy */
describe("Checking if the input phrase is just numeric", () => {
  it("Should not be empty", () => {
    cy.visit("http://localhost:3002");

    cy.get('textarea[name="inputPhrase"]').type("12345678910");

    cy.get("#errorMsg").contains("Please enter valid values!");
  });
});
