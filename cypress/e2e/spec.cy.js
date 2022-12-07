describe("Проверка контактной информации", () => {
  it("Ожидаемый номер телефона: 8 800 775-15-21", () => {
    cy.visit('https://www.google.ru/')
    cy.get('input[name="q"]').type('Byndyusoft{enter}')
    cy.get('[id=search]').within(() => {
      cy.get('a').first().invoke('attr', 'href').then((url) => {
        cy.origin(url, () => {
          cy.visit('/')
          cy.get('.know-more')
          cy.contains('Заказать презентацию').click()
          cy.get('.popup-callback__content').should('contain.text', '8 800 775-15-21')
      })
    })
  })
})
})
it("Ожидаемый почтовый ящик: sales@byndyusoft.com", () => {
  cy.visit('https://www.google.ru/')
  cy.get('input[name="q"]').type('Byndyusoft{enter}')
  cy.get('[id=search]').within(() => {
    cy.get('a').first().invoke('attr', 'href').then((url) => {
      cy.origin(url, () => {
        cy.visit('/')
        cy.get('.know-more')
        cy.contains('Заказать презентацию').click()
        cy.get('.popup-callback__content').should('contain.text', 'sales@byndyusoft.com')
    })
  })})
});
