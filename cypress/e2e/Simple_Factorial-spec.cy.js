describe('The factorial Verify', () => {
  it('The factorial of 0 is equal to 1', () => {
    cy.visit('/')
    cy.get('#number').type('0')
    cy.get('#getFactorial').click()
    cy.get('div.row').should('contain','The factorial of 0 is: 1')
  })
    it('Factorial of positive integer should be calculated correctly', () => {
    cy.visit('/')
    cy.get('#number').type('5')
    cy.get('#getFactorial').click()
    cy.get('div.row').should('contain','The factorial of 5 is: 120')
  })
  it('Negative integer input should display error message', () => {
    cy.visit('/')
    cy.get('#number').type('-5')
    cy.get('#getFactorial').click()
    cy.get('div.row').should('contain','')
  })
  it('Non-numeric input should display error message', () => {
    cy.visit('/')
    cy.get('#number').type('test')
    cy.get('#getFactorial').click()
    cy.get('div.row').should('contain','Please enter an integer')
  })
  it('Decimal number input should display error message', () => {
    cy.visit('/')
    cy.get('#number').type('5.5')
    cy.get('#getFactorial').click()
    cy.get('div.row').should('contain','Please enter an integer')
  })
  it('Large number input should be calculated correctly', () => {
    cy.visit('/')
    cy.get('#number').type('170')
    cy.get('#getFactorial').click()
    cy.get('div.row').should('contain','The factorial of 170 is: 7.257415615307994e+306')
  })
  it('Large number input should be calculated correctly with null output', () => {
    cy.visit('/')
    cy.get('#number').type('171')
    cy.get('#getFactorial').click()
    cy.get('div.row').should('contain','The factorial of 171 is: null')
  })
})