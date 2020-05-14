describe('Brendans Ale House homepage', () => {
  it('Visits the homepage and confirms featured recipes', () => {
      //act
      cy.visit('/')
      //assert
      cy.contains('h2', 'This Weeks Featured Recipes')
  })

  it('Shows all the recipes', () => {
    //act
    cy.visit('/recipes')
    //assert
    cy.contains('h2', 'All Recipes')
    cy.contains('[data-test="beer-recipe-name"]', 'English Style Bitter')
    cy.get('[data-test="beer-recipe-name"]').should('have.length', 4)
    //act- go to the recipes page
    cy.get('[data-test="beer-recipe-name"]').contains('English Style Bitter').click();
    //assert - confirm the recipes page is showing the right recipe
    cy.contains('[data-test="beer-recipe-name"]', 'English Style Bitter')
  })


})
