describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays projects and can navigate to the project page', () => {
    cy.get('img[alt="Thumbnail for Plop"]');
    cy.contains('Plop');
    cy.contains(/Open-source project management web application for teams/i);

    cy.contains('button', /view details/i)
      .should('have.attr', 'href', '/projects/plop')
      .click({ force: true });

    cy.url().should('eq', 'http://localhost:3000/projects/plop');
    // cy.findByRole('img', { name: /thumbnail for plop/i });
  });

  it('should have skills tab which displays resume and contact form', () => {
    cy.contains('p', 'SKILLS').click();

    cy.get('img[alt="Resume"]');
    cy.contains('p', 'Download');

    cy.get('form').contains(/Contact Me/i);
  });
});
