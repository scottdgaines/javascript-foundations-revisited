const assert = require('chai').assert;
const { it } = require('mocha');
const { createMermaid, addToCollection, sing } = require('../exercises/mermaid.js');

describe('Mermad', function() {

    it('Should instantiate a new instance of our friend the mermaid', function() {
        const mermaid = createMermaid('Ariel')

        assert.equal(mermaid.name, 'Ariel')
    })

    it('Should have fins by default', function(){
        const mermaid = createMermaid('Ariel')

        assert.equal(mermaid.fins, true)
    })

    it('Should have a best friend', function() {
        const mermaid = createMermaid('Ariel', 'Flounder')

        assert.equal(mermaid.friend.name, 'Flounder')
    })

    it.skip('Should specify what specie their friend is', function() {
        const mermaid = createMermaid('Ariel', 'Flounder', 'Fish')

        assert.equal(mermaid.friend.specie, 'Fish')
    })

})