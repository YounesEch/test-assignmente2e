beforeEach(() =>{
  cy.visit("/");
});

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:1234')
  })
})



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