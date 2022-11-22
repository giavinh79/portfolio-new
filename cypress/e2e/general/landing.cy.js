describe('Landing page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays project and can navigate to the project page', () => {
    cy.contains('Plop');
    cy.contains(/Open-source project management web application for teams/i);
    cy.get('img[alt="Thumbnail for Plop"]');

    cy.get('a[href*="/projects/plop"]')
      .contains(/view details/i)
      .click();

    cy.url().should('match', /.*\/projects\/plop/);
  });

  it('should have skills tab which displays resume and contact form', () => {
    cy.contains('button', 'SKILLS').click();

    cy.get('img[alt="Thumbnail for Plop"]').should('not.exist');

    cy.get('img[alt="Resume"]');
    cy.contains('p', 'Download');

    cy.get('form').contains(/Contact Me/i, {
      timeout: 10000, // increase timeout to 10 seconds since this form gets lazy loaded
    });
  });
});
