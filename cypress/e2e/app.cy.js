describe("App", () => {
    beforeEach(() => {
    cy.visit("localhost:3000");
    })
    
    it("Should display the tittle", ()=> {
        cy.get("h1").contains("Learn React");
    })
} )