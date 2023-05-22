describe('Project page', () => {
  beforeEach(() => {
    cy.visit('/projects/plop');
  });

  it('displays proper information', () => {
    cy.contains('Plop');
    cy.contains(/Open-source project management web application for teams/i);
    cy.contains('p', /adonisjs/i);
    cy.contains('a', /github/i);
    cy.contains('a', /demo/i);
    cy.contains('a', /go back/i);
  });

  it('can interact with image carousel properly', () => {
    cy.get('img[alt="Plop Sample Image 1"]').should('exist');

    cy.get('[data-cy="carousel-dot-2"]').click(); // click second dot
    cy.get('img[alt="Plop Sample Image 1"]').should('not.exist');
    cy.get('img[alt="Plop Sample Image 2"]').should('exist');

    cy.get('button').contains('❯').click(); // click left arrow
    cy.get('img[alt="Plop Sample Image 2"]').should('not.exist');
    cy.get('img[alt="Plop Sample Image 3"]').should('exist');

    cy.get('button').contains('❮').click(); // click right arrow
    cy.get('img[alt="Plop Sample Image 2"]').should('exist');
  });
});
