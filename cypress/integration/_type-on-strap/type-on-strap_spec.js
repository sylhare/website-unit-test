describe('Type on Strap home page', function() {
  it('Visits the home page', function() {
    cy.visit('http://127.0.0.1:4000/Type-on-Strap/')
    cy.contains('Type on Strap')
    cy.contains('About')
    cy.contains('Gallery')
    cy.contains('Portfolio')
  })

  // it('Click on gallery', function() {
  //   cy.visit('http://127.0.0.1:4000/Type-on-Strap/')
  //
  //   cy.contains('Gallery').click()
  //   cy.url().should('include', 'gallery')
  // })

  it('Click on search', function() {
    cy.visit('http://127.0.0.1:4000/Type-on-Strap/')

    cy.get('.fa-search').click()
    cy.url().should('include', 'search')
  })

  it('Click on tags', function() {
    cy.visit('http://127.0.0.1:4000/Type-on-Strap/')

    cy.get('.fa-tags').click()
    cy.url().should('include', 'tags')
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


