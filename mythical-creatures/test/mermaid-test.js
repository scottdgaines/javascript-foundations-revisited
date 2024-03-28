const assert = require('chai').assert;
const { it } = require('mocha');
const { createMermaid, addToCollection, sing } = require('../exercises/mermaid.js');
const { createSidekick } = require('../exercises/sidekick')

describe('Mermad', function() {

    it('Should instantiate a new instance of our friend the mermaid', function() {
        const mermaid = createMermaid('Ariel')

        assert.equal(mermaid.name, 'Ariel')
    })

    it('Should have fins by default', function(){
        const mermaid = createMermaid('Ariel')

        assert.equal(mermaid.fins, true)
    })

    it('Should have a sidekick', function() {
        const mermaid = createMermaid('Ariel')

        mermaid.instantiateSidekick('Flounder')

        assert.equal(mermaid.sidekick.name, 'Flounder')
    })

    it('Should specify what specie their friend is', function() {
        const mermaid = createMermaid('Ariel')
        
        mermaid.instantiateSidekick('Flounder', 'Fish')

        assert.equal(mermaid.sidekick.species, 'Fish')
    })

    it('Should have an empty collection by default', function() {
        const mermaid = createMermaid('Ariel')

        assert.equal(mermaid.collection.length, 0)
    })

    it('Should be able to add things to her collection', function() {
        const mermaid = createMermaid('Ariel')

        mermaid.addToCollection('Fork')

        assert.equal(mermaid.collection[0], 'Fork')
        assert.equal(mermaid.collection.length, 1)
    })

    it('Should be able to add multiple things to her collection', function() {
        const mermaid = createMermaid('Ariel')

        mermaid.addToCollection('Snarfblat')
        mermaid.addToCollection('Dinglehopper')
        mermaid.addToCollection('Thingamabob')

        assert.equal(mermaid.collection.length, 3)
        assert.equal(mermaid.collection[0], 'Snarfblat')
    })

    it('Should only be able to have 3 objects in her collection', function() {
        const mermaid = createMermaid('Ariel')

        mermaid.addToCollection('Snarfblat')
        mermaid.addToCollection('Dinglehopper')

        assert.equal(mermaid.addToCollection('thingamabob'), 'I need to go explore more shipwrecks!')
        assert.equal(mermaid.collection.length, 3)
        assert.equal(mermaid.addToCollection('Gizmo'), 'That\'s aplenty!')
        assert.equal(mermaid.collection.length, 3)
    })
})