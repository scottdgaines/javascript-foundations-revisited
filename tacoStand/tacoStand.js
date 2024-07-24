class Ingredient {
    constructor(ingredient, price) {
        this.name = ingredient,
        this.price = price
    }
}

const createIngredient = (ingredient, price) => {
    const taco = new Ingredient(ingredient, price)
    console.log(taco)
    return taco
}


module.exports = {createIngredient}
