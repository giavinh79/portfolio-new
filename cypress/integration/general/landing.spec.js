describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays project and can navigate to the project page', () => {
    cy.contains('Plop');
    cy.contains(/Open-source project management web application for teams/i);
    cy.get('img[alt="Thumbnail for Plop"]');

    cy.get('a[href*="/projects/plop"]')
      .contains(/view details/i)
      .click({ force: true });

    cy.url().should('eq', 'http://localhost:3000/projects/plop');
  });

  it('should have skills tab which displays resume and contact form', () => {
    cy.contains('button', 'SKILLS').click();

    cy.get('img[alt="Thumbnail for Plop"]').should('not.exist');

    cy.get('img[alt="Resume"]');
    cy.contains('p', 'Download');

    cy.get('form').contains(/Contact Me/i);
  });
});
