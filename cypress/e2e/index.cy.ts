describe("Index spec", () => {
    it("should render", () => {
        cy.visit("/");
        cy.title().should("equal", "Sandbox - Particle Chat");
        cy.get("h1").should("have.text", "Hello World!");
    });
});
