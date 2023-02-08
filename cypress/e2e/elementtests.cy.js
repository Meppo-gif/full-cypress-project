describe('Testing of several different elements', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get(':nth-child(1) > :nth-child(1) > .card-up').click()
  })
  it.skip('Test of text Box', () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    cy.get('[id="userName"]').type('Anelka');
    //cy.get('[id="userEmail"]').type('tchuente@domain.com');
    cy.get('[id="currentAddress"]').type('Zanderstr.10');
    cy.get('[id="submit"]').click();
    cy.get('[id="output"]').should('be.visible')
  })
  it('Test of Radio Button', () =>{
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click();
    //cy.get('[id="impressiveRadio"]').check();
    //cy.get('.text-success').should('be.visible')
  })
})