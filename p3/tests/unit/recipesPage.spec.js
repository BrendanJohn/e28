import { expect } from 'chai'
import { mount, RouterLinkStub } from '@vue/test-utils'
import recipesPage from '@/components/pages/recipesPage.vue'

describe('recipesPage.vue', () => {
  it('shows all the beer recipes', () => {
    let recipe = {
      categories: ["pale ale","american"],
      description: "This extract recipe provides the basic building blocks of a tasty American Pale Ale.",
      directions: "1. Tie the American 6-row malt and Crystal 20L malt in a mesh hop-bag.",
      ingredientFour: "1 ounce Cascade hops—15 minutes",
      ingredientOne: "5 1/2 pounds dry light malt extract",
      ingredientThree: "1/2 ounce Centennial hops—60 minutes",
      ingredientTwo: "1/2 pound American 6-row malt, crushed",
      name: "American Pale Ale (For Beginners)",  
      output: 5,
      slug: "american-pale-ale",
      totalBrewTime: "10 -14 days"
    }
    const wrapper = mount(recipesPage, {
      computed: { 
        recipes: function () {
          return [recipe]
        } 
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include('Recipes');
    expect(wrapper.text()).to.include('American Pale Ale');
  })
})
