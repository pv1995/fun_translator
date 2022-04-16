/* global cy */
describe("Translating a phrase", () => {
  it("Should display a translated phrase", () => {
    cy.visit("http://localhost:3002");

    cy.get("select").select("Pig-Latin").should("have.value", "Pig-Latin");

    cy.get('textarea[name="inputPhrase"]').type(
      "Pig Latin is used in schools to teach language constructs."
    );

    cy.get("button#translatePhrase").click();

    cy.get('textarea[name="translatedValue"]').contains(
      "ig-Pay atin-Lay is-way used-way in-way ools-schay o-tay each-tay anguage-lay onstructs-cay."
    );
  });
});
