describe('Brendans Ale House homepage', () => {
  it('Visits the homepage and confirms featured recipes', () => {
      cy.visit('/')
      cy.contains('h2', 'This Weeks Featured Recipes')
  })

  it('Shows all the recipes', () => {
    cy.visit('/recipes')
    cy.contains('h2', 'All Recipes')
})
})
