

describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        cy.contains("Nova Transação").click();
        cy.get('#description').type("Freela");
        cy.get('#amount').type(250);
        cy.get('#date').type("2023-02-15"); // yyyy-mm-dd

        cy.contains('button', 'Salvar').click();

    });
});