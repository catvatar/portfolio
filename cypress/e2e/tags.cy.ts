describe("Tags", () => {
  it("displays clear tags with clicked tags", () => {
    cy.viewport(1280, 950);
    cy.visit("/");
    cy.contains("Clear Tags").should("not.be.visible");
    cy.get("#tags-list > li").last().click();
    cy.contains("Clear Tags").should("be.visible");
  });
  it("pulls clicked tag to the top", () => {
    cy.viewport(1280, 950);
    cy.visit("/");
    cy.get("#tags-list > li")
      .last()
      .then((tagElement) => {
        let lastTagElement = tagElement;
        cy.wrap(lastTagElement).as("lastTagElement");
      });
    cy.get("#tags-list > li").last().click();
    cy.get("@lastTagElement").then((lastTagElement) => {
      cy.get("#tags-list > li")
        .first()
        .should(($li) => {
          expect($li.text()).to.equal(lastTagElement.text());
        });
    });
  });
  it("click tags from url", () => {
    cy.viewport(1280, 950);
    cy.visit("/");
    cy.get("#tags-list > li")
      .last()
      .then((tagElement) => {
        let lastTagElement = tagElement;
        cy.wrap(lastTagElement.text()).as("lastTag");
      });
    cy.get("@lastTag").then((lastTag) => {
      cy.visit("/?tags=[" + lastTag + "]");
      cy.get("#tags-list > li").first().should("include.text", lastTag);
    });
  });
});
