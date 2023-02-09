beforeEach(() =>{
  cy.visit("/");
});

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:1234')
  })
})

describe('load site with an input field and an search button', () => {
  it('should load input field', () => {
    cy.get('input#searchText').should('exist');
  })

  it('should load button', () => {
    cy.get('button#search').contains('Sök').should('exist');
  })

});

describe('add movie', () => {
it("should add movie", ()=> {
  cy.get("input").type("marvel").should("have.value","marvel");
  cy.get("button#search").click();
  cy.get("div:first-child").should("contain.text", 'Captain Marvel');
})
});


describe('movie length', () => {
  it("should get 10 movies from API ", ()=> {
    cy.get("input").type("Spiderman").should("have.value","Spiderman");
    cy.get("button#search").click();
    cy.get("div>div").should("have.length", 10);
  })
  });

  describe ("show error", ()=> {
    it("should show error text when input field is empty", ()=> {
    cy.get("button#search").click();
    cy.get("p").contains("Inga sökresultat att visa").should("exist");
    })
  });


describe ("")