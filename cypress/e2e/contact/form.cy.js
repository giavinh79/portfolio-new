import message from '../../fixtures/example-message.json';

describe('Project page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('can use contact form properly', () => {
    cy.get('button').contains('SKILLS').click();
    cy.contains('form', /contact me/i).should('have.attr', 'action', 'https://formspree.io/meqrvnjk');

    cy.contains('button', /send message/i).should('be.disabled');

    cy.get('input#name').type(message.name);
    cy.get('textarea#message').type(message.data);
    cy.get('input#email').type(message.email);

    cy.contains('button', /send message/i).should('be.not.disabled');
  });
});
