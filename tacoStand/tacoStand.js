class Ingredient {
    constructor(ingredient, price) {
        this.name = ingredient || 'unknown'
        this.price = price || 0.00
    }
}

class Taco {
    constructor(name, ingredients) {
        this.name = name || 'custom',
        this.ingredients = ingredients || []
    }
}

const createIngredient = (ingredient, price) => {
    const ingr = new Ingredient(ingredient, price)
    return ingr
}

const createTaco = (name, incredients) => {
    const taco = new Taco(name, incredients)
    return taco
}

const addIngredientToTaco = (taco, newIngredient) => {
    taco.ingredients.push(newIngredient)
    return taco
}

const calculatePrice = (taco) => {
    let sum = 0
    taco.ingredients.forEach(item => {
        sum = sum + item.price
    })
    return sum
}


module.exports = {
    createIngredient, 
    createTaco,
    addIngredientToTaco,
    calculatePrice
}
