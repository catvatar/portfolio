describe("Side Panel", () => {
  it("is visible on widescreen", () => {
    cy.viewport(1280, 950);
    cy.visit("/");
    cy.get("#side-navigation").should("be.visible");
  });
  it("is hidden on mobile", () => {
    cy.viewport(375, 812);
    cy.visit("/");
    cy.get("#side-navigation").should("not.be.visible");
  });
});
