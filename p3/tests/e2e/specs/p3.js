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
    //confirm that we get at least the 4 recipes plus and additional user created or test created recipes
    cy.get('[data-test="beer-recipe-name"]').its('length').should('be.gte',4);
    //act- go to the recipes page
    cy.get('[data-test="beer-recipe-name"]').contains('English Style Bitter').click();
    //assert - confirm the recipes page is showing the right recipe
    cy.contains('[data-test="beer-recipe-name"]', 'English Style Bitter')
  });
})


describe('Brendans Ale House categories page', () => {
    it('Visits the homepage and confirms categories are present', () => {
        //act
        cy.visit('/categories')
        //assert
        cy.contains('h2', 'Categories')
    })
  
    it('Shows all the categories', () => {
      //act
      cy.visit('/categories')
      //assert
      cy.contains('h2', 'Categories')
      cy.contains('[data-test="category-name"]', 'pale ale');
      // With seed data, we should have at least 9 categories
      cy.get('[data-test="category-name"]').its('length').should('be.gte', 9);
    });
  })


describe('Brendans Ale House cart page', () => {

    // Test recipe
    let recipe = {
        name: 'English Style Bitter',
        slug: 'english-style-bitter'
    }

    it('adds and removes from cart', () => {

        // Add to cart from recipe page
        cy.visit('/recipe/' + recipe.slug);
        cy.get('[data-test="add-to-cart-button"]').click();

        // Confirm cart shows recipe
        cy.visit('/cart');
        cy.contains('[data-test="cart-contents"]', '1 x ' + recipe.name);

        // Remove from cart 
        cy.get('[data-test="remove-from-cart-button"]').click();
        cy.contains('[data-test="cart-count"]', 0);
        cy.contains('have any recipes');
    })
  })

  describe('Brendans Ale House favorites page', () => {

    // Test recipe
    let recipe = {
        name: 'English Style Bitter',
        slug: 'english-style-bitter'
    }
  
    it('adds and removes from favorites', () => {
  
        // Add to favorites from recipe page
        cy.visit('/recipe/' + recipe.slug);
        cy.clearLocalStorage()
        cy.wait(1000)
        //assert
        cy.get('[data-test="add-to-favorites-button"]').click().should(() => {
          expect(localStorage.getItem('favoriteRecipes')).to.eq(recipe.slug)
        })
        cy.get('[data-test="add-to-favorites-confirmation"]').should('exist');
  
        // Confirm favorites shows recipe
        cy.visit('/favorites');
        cy.contains('[data-test="favorite-contents"]', 'English Style Bitter');
  
        // Remove from favorites 
        //assert
        cy.get('[data-test="remove-from-cart-button"]').click().should(() => {
          expect(localStorage.getItem('favoriteRecipes')).to.eq('')
        })
    })
  })

  
  describe('Brendans Ale House cart create recipe page', () => {

    // Test recipe
    let recipe = {
        name: 'new recipe',
        // Append a Unix timestamp to the end of the slug, ensuring it's a unique value
        slug: 'my-new-recipe-' + Date.now(),
        description: 'a brand new recipe featuring lots and lots of hops',
        ingredientOne: 'lots of hops'
    }

    it('adds a new recipe', () => {
        cy.visit('/recipes/create');
        cy.get('[data-test=recipe-name-input]').type(recipe.name);
        cy.get('[data-test=recipe-slug-input]').type(recipe.slug);
        cy.get('[data-test=recipe-description-textarea]').type(recipe.description);
        cy.get('[data-test=recipe-ingredientOne-input]').type(recipe.ingredientOne);
        cy.get('[data-test=add-recipe-button]').click();
        cy.get('[data-test="recipe-added-confirmation"]').should('exist');
        cy.visit('/recipe/' + recipe.slug);
        cy.contains('[data-test="beer-recipe-name"]', recipe.name)
    });
})


