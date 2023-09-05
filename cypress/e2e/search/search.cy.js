/// <reference types="cypress" />

context("Search", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to type in search input", () => {
    const typeValue = "spiderman";

    cy.get("#search-input").type(typeValue).should("have.value", typeValue);
  });
});
