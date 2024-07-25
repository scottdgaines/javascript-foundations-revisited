class Ingredient {
    constructor(ingredient, price) {
        this.name = ingredient || 'unknown'
        this.price = price || 0.00
    }
}

class Taco {
    constructor(name) {
        this.name = name || 'custom'
    }
}

const createIngredient = (ingredient, price) => {
    const ingr = new Ingredient(ingredient, price)
    return ingr
}

const createTaco = (name) => {
    const taco = new Taco(name)
    return taco
}


module.exports = {
    createIngredient, 
    createTaco
}
