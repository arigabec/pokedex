describe('Example trainer app', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Register trainer", () => {
    cy.contains('Submit');
    cy.get("input").first().type('Ash');
    cy.get("input").last().type('9');
    cy.get('.btn-login').click();
  });
});