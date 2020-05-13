import { expect } from 'chai'
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import showRecipe from '@/components/showRecipe.vue'

describe('showRecipe.vue', () => {
  it('shows a beer recipe', () => {
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
    const wrapper = shallowMount(showRecipe, {
      propsData: { recipe },
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include(recipe.name);
    //using data-test is a good way to remind other developers that the class is there specifically for testing purposes
    let foundProductLinkm = wrapper.find('[data-test="product-link"]').exists();
    expect(foundProductLinkm).to.equal(true);
  })
})
