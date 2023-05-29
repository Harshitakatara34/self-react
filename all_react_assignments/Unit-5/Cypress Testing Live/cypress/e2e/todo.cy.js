describe("Todo Testing",()=>{
    

    beforeEach(()=>{
        cy.visit("https://example.cypress.io/todo")
    })

it("should have todo-input",()=>{
cy.get("input.new-todo").should("exist")
})

it("should be able to type in input box",()=>{
    cy.get("input.new-todo").type("Learn React")

})
it("should add a new Todo on pressing enter",()=>{
    cy.get("input.new-todo").type("Learn cypress {enter}")

})


it("should add the new todo to the list",()=>{
    cy.get(".todo-list").children().should("have.length",2)
    cy.get("input.new-todo").type("Learn cypress {enter}")
    cy.get(".todo-list").children().should("have.length",3)
})

it("should destroy the todo",()=>{
    cy.get(".todo-list").children().should("have.length",2)
cy.get(".destroy").eq(1).click({force:true});
cy.get(".todo-list").children().should("have.length",1)
})
})


