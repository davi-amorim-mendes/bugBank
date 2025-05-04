
describe('Pagina de login', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/bugBank/index.html');


      //fazer cadastro 
      cy.get("#cadastroBtn").click()
      cy.get("#email").type("josi@gmail.com")
      cy.get('#nome').type("jojo")
      cy.get("#senha").type("1145")
      cy.get('#conSenha').type("1145")
      cy.get('#buttonCadastro').click()
      cy.url().should('include','/index.html');

      //login
      cy.get('#email').type("josi@gmail.com")
      cy.get("#senha").type("1145")
      cy.get('#buttonLogin').click()
      cy.url().should('include','/inicio.html');
//clicar em sair 
      cy.get('#sair').click()
      cy.url().should('include','/index.html');

      
//cadastrar  outra conta
      cy.get("#cadastroBtn").click()
      cy.get("#email").type("jojo@gmail.com")
      cy.get('#nome').type("jojo")
      cy.get("#senha").type("1145")
      cy.get('#conSenha').type("1145")
      cy.get('#buttonCadastro').click()
      cy.url().should('include','/index.html');

//login
      cy.get('#email').type("josi@gmail.com")
      cy.get("#senha").type("1145")
      cy.get('#buttonLogin').click()
      cy.url().should('include','/inicio.html');
      //teste de transferencia 
      
      cy.get('#trans').click()

      cy.get('#numConta').type('426404')
      cy.get('#valTrans').type('100')
      cy.get('#desc').type('teste')
     cy.get("#buttonTransf").click()
     // clicar no botão de voltar 
     cy.get('[onclick="back()"]').click()

      

    
   
  })
})

