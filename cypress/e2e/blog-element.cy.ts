describe("Blog Element", () => {
  it("redirect to correct post", () => {
    cy.viewport(1280, 950);
    cy.visit("/");
    cy.get("#blog-element").first().children().first().click();
    cy.url().should("include", "posts");
  });
});
