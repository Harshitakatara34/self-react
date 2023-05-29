describe("counter testing",()=>{
  // it("check if counter loads or not",()=>{
  // cy.visit("http://localhost:3000/")
  // })

  beforeEach(()=>{
    cy.visit("http://localhost:3000/")
  })

  it("check counter is present or not",()=>{
cy.get("h1").should("exist");
cy.get("button.add").should("exist")
cy.get("button.reduce").should("exist")
  })


  it("counter value should be zero",()=>{
cy.get("[data-testid=counter]").should("have.text","Counter:0");
})


it("On clicking add button the counter should increase",()=>{
cy.get("button.add").click();
cy.get("[data-testid=counter]").should("have.text","Counter:1")
})


it("On clicking add Button the counter should decrease",()=>{
 cy.get("button.reduce").eq(1).click();
  cy.get("button.reduce").click();
  cy.get("[data-testid=counter]").should("have.text","Counter:-1")

})
})
