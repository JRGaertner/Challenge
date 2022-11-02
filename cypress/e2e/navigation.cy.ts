describe('Navigation', () => {
  it('should navigate to the home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    cy.get('h1').contains('Valant')
  })

  it('should navigate to the image page', () => {
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="Page2"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/Page2')

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Picture')
  })

  it('should navigate to the form page', () => {
    cy.get('a[href*="Page3"]').click()

    cy.url().should('include', '/Page3')

    cy.get('h1').contains('Form')
  })
})