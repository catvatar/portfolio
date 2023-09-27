describe("Top Navigation", () => {
  it("displays menu button on mobile", () => {
    cy.viewport(375, 812);
    cy.visit("/");
    cy.get("#menu").should("be.visible");
  });
  it("hides menu button on widescreen", () => {
    cy.viewport(1280, 950);
    cy.visit("/");
    cy.get("#menu").should("not.be.visible");
  });
  it("opens side navigation on menu button click", () => {
    cy.viewport(375, 812);
    cy.visit("/");
    cy.get("#side-navigation").should("not.be.visible");
    cy.get("#menu").click();
    cy.get("#side-navigation").should("be.visible");
  });
  it("displays back button inside article", () => {
    cy.visit("/");
    cy.get("#back-element").should("not.be.visible");
    cy.get("#blog-element").children().last().click();
    cy.get("#back-element").should("be.visible");
  });
});
