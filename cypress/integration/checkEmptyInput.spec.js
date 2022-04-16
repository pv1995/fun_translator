/* global cy */
describe("Checking empty input phrase", () => {
  it("Should not be empty", () => {
    cy.visit("http://localhost:3002");

    cy.get('textarea[name="inputPhrase"]').type(
      "Hello! How has your day been!?"
    );

    cy.get('textarea[name="inputPhrase"]').clear();

    cy.get("#errorMsg").contains("Please enter valid values!");
  });
});
