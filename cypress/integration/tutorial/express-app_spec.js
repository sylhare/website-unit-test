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
  it('Visits the hello world express site', function() {
    cy.visit('http://localhost:3000/')
  })
})

describe("contains hello", function() {
  it('finds the content "hello"', function() {
    cy.visit('http://localhost:3000/')

    cy.contains('Hello')
  })
})

describe("Click to learn", function() {
  it('finds the content "hello"', function() {
    cy.visit('http://localhost:3000/home')

    cy.contains('Learn more').click()
    cy.url().should('include', 'learn/more')
  })
})

describe('The contact page', function() {
  it('Gets, types and asserts', function() {
    cy.visit('http://localhost:3000/home')

    cy.contains('contact').click()

    cy.url().should('include', '/contact')

    // Get an input, type into it and verify that the value has been updated
    cy.get('#fname')
      .type('test')
      .should('have.value', 'test')
  })
})

describe('Debug the contact page', function() {
  it('Gets, types and asserts', function() {
    cy.visit('http://localhost:3000/home')

    //cy.pause()
    cy.debug()

    cy.contains('contact').click()

    cy.url().should('include', '/contact')

    // Get an input, type into it and verify that the value has been updated
    cy.get('#subject')
      .type('this is the subject')
      .should('have.value', 'this is the subject')
  })
})


