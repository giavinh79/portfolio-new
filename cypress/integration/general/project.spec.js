describe('Project page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/projects/plop');
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

    cy.get('#__next > main > div > div > div:nth-child(3) > span:nth-child(2)').click(); // click second dot
    cy.get('img[alt="Plop Sample Image 1"]').should('not.exist');
    cy.get('img[alt="Plop Sample Image 2"]').should('exist');

    cy.get('span').contains('❯').click(); // click left arrow
    cy.get('img[alt="Plop Sample Image 2"]').should('not.exist');
    cy.get('img[alt="Plop Sample Image 3"]').should('exist');

    cy.get('span').contains('❮').click(); // click right arrow
    cy.get('img[alt="Plop Sample Image 2"]').should('exist');
  });
});
