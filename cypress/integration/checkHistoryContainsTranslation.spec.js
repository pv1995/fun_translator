/* global cy */
describe("Translating a phrase", () => {
  it("Should display a translated phrase", () => {
    cy.visit("http://localhost:3002");

    cy.get("select").select("Yoda").should("have.value", "Yoda");

    cy.get('textarea[name="inputPhrase"]').type(
      "Hello sir! my mother goes with me to the ocean."
    );

    cy.get("button#translatePhrase").click();

    cy.get("#accordion")
      .contains("Hello sir! my mother goes with me to the ocean.")
      .focus()
      .click();

    cy.get("#current-translation").contains(
      "Force be with you sir!With me to the ocean, my mother goes."
    );
  });
});
