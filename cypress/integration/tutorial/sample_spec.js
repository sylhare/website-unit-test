describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true)
  })
})

describe('My First Failing test', function () {
  it('will fail if un commented ', function () {
    //expect(true).to.equal(false)
  })
})


// What are describe, it, and expect?
//
// All of these functions come from Bundled Tools that Cypress bakes in.
//
// describe and it come from Mocha
// expect comes from Chai
//
// Cypress builds on these popular tools and frameworks that you hopefully already have some familiarity and knowledge of.
// If not, that’s okay too.

describe('Visit a site', function() {
  it('Visits the hellow world express site', function() {
    cy.visit('http://localhost:3000/')
  })
})
