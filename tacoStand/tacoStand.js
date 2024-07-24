class Ingredient {
    constructor(ingredient, price) {
        this.name = ingredient || 'unknown'
        this.price = price || 0.00
    }
}

const createIngredient = (ingredient, price) => {
    const taco = new Ingredient(ingredient, price)
    console.log(taco)
    return taco
}


module.exports = {createIngredient}
