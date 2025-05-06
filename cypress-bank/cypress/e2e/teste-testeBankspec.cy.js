



describe('Pagina de login', () => {
   

   it('Deve Realizar cadastro com senhas que não coincidem   ', () => {
         cy.visit('http://127.0.0.1:5500/bugBank/index.html');
   
      cy.get("#cadastroBtn").click()
      cy.get("#email").type("teste3@gmail.com")
      cy.get('#nome').type("teste3")
      cy.get("#senha").type("1234")
      cy.get('#conSenha').type("1145")
      cy.get('#buttonCadastro').click()
      //alerta de erro "As senhas não coincidem."
   cy.on('window:alert',(msg)=>{
      expect(msg).to.include('As senhas não coincidem.')
   })
   })
   it('Deve Realizando Login  com senha incorreta   ', () => {
         cy.visit('http://127.0.0.1:5500/bugBank/index.html');
   
     cy.get('#email').type("padrao@email.com")
     cy.get("#senha").type("1145")
     cy.get('#buttonLogin').click()
     //alerta de erro"E-mail ou senha incorretos"
     cy.on('window:alert',(msg)=>{
         expect(msg).to.include('E-mail ou senha incorretos')
      })
   })
   it('Deve Realizar Login com campo vazio   ', () => {
         cy.visit('http://127.0.0.1:5500/bugBank/index.html');
        cy.get('#email').type("padrao@email.com")
        cy.get('#buttonLogin').click()
        //formulario não enviado e continua na pagina index
        cy.url().should('include','/index.html');
   })
   
   
   it('Cadastrar e-mail existente e apresentar erro', () => {
      cy.visit('http://127.0.0.1:5500/bugBank/index.html');
    
      // Primeiro cadastro
      cy.get("#cadastroBtn").click();
      cy.get("#email").type("testando@email.com");
      cy.get('#nome').type("teste1");
      cy.get("#senha").type("1234");
      cy.get('#conSenha').type("1234");
    
      // intercepta o alerta com stub  e confirma se ele foi chamado 
      cy.window().then((win) => {
         //.as('alerta1')Dá um nome para o stub, para  referenciar ele depois
        cy.stub(win, 'alert').as('alerta1');
      });
      cy.get('#buttonCadastro').click();
      cy.get('@alerta1').should('have.been.calledWithMatch', /Cadastro realizado! Sua conta é:/);
    
      // Segundo cadastro com e-mail já existente
      cy.get("#cadastroBtn").click();
      cy.get("#email").clear().type("testando@email.com");
      cy.get('#nome').clear().type("teste1");
      cy.get("#senha").clear().type("1234");
      cy.get('#conSenha').clear().type("1234");
    
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('alerta2');
      });
      cy.get('#buttonCadastro').click();
      cy.get('@alerta2').should('have.been.calledWith', 'Usuário já cadastrado.');
    });
   
    it('Realizar login com e-mail inexistente',()=>{
      cy.visit('http://127.0.0.1:5500/bugBank/index.html');
     
      
      
       cy.get("#email").type("testando@email.com")
       cy.get("#senha").type("1234")
       cy.get('#buttonLogin').click()
       cy.on('window:alert',(msg)=>{
         expect(msg).to.include('E-mail ou senha incorretos.')
         //não redirecionado 
         cy.url().should('include','/index.html');
      })
   
      }) 
    it('Deve Realizar  o cadastro e login e realizar transferencia ,sair e entrar na conta padrão para confirmar recebimento do valor  ', () => {
         cy.visit('http://127.0.0.1:5500/bugBank/index.html');
   
   
      
   //cadasto de usuario
         cy.get("#cadastroBtn").click()
         cy.get("#email").type("teste@gmail.com")
         cy.get('#nome').type("teste1")
         cy.get("#senha").type("1234")
         cy.get('#conSenha').type("1234")
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alerta1');
          });
         cy.get('#buttonCadastro').click()
      
          cy.get('@alerta1').should('have.been.calledWithMatch', /Cadastro realizado! Sua conta é:/);
         //voltando ao index
         cy.url().should('include','/index.html');
         //Reaizar login 
         cy.get('#email').type("teste@gmail.com")
         cy.get("#senha").type("1234")
         cy.get('#buttonLogin').click()
         //Redirecionamento para o incio.html
         cy.url().should('include','/inicio.html');
   
        
         //tranfferencia 
         cy.get("#trans").click()
         cy.url().should('include','/transf.html');
         cy.get('#numConta').type('100000')
         cy.get('#valTrans').type('100')
         cy.get('#desc').type('teste')
         cy.window().then((win) => {
            cy.stub(win, 'alert').as('alerta2');
          });
         cy.get('#buttonTransf').click()
          cy.get('@alerta2').should('have.been.calledWithMatch', 'Transferência realizada com sucesso!');
            
   //volta a inicio.html
   cy.url().should('include','/inicio.html');
   
   //clicar sair  do login 
        cy.get('#sair').click()
        //pagina index.html 
         cy.url().should('include','/index.html');
   //Login na conta padrão para confirmar o valor recebido 
         cy.get('#email').type("padrao@email.com")
         cy.get("#senha").type("1234")
         cy.get('#buttonLogin').click()
         //redirecionamento para o inicio.html
         cy.url().should('include','/inicio.html');
     
         //clicar sair  do login 
        cy.get('#sair').click()
        //pagina index.html 
         cy.url().should('include','/index.html');
   
   })
   it('Deve Realizar o  cadastro e login e realizar transferencia  com erro na conta de destino ', () => {
      cy.visit('http://127.0.0.1:5500/bugBank/index.html');
   
   //cadasto de usuario
   cy.get("#cadastroBtn").click()
   cy.get("#email").type("teste@gmail.com")
   cy.get('#nome').type("teste1")
   cy.get("#senha").type("1234")
   cy.get('#conSenha').type("1234")
   cy.window().then((win) => {
      cy.stub(win, 'alert').as('alerta1');
    });
   cy.get('#buttonCadastro').click()
   
    cy.get('@alerta1').should('have.been.calledWithMatch', /Cadastro realizado! Sua conta é:/);
       //voltando ao index
       cy.url().should('include','/index.html');
       //Reaizar login 
       cy.get('#email').type("teste@gmail.com")
       cy.get("#senha").type("1234")
       cy.get('#buttonLogin').click()
       //Redirecionamento para o incio.html
       cy.url().should('include','/inicio.html');
       //tranfferencia 
       cy.get("#trans").click()
       cy.url().should('include','/transf.html');
       cy.get('#numConta').type('100001')
       cy.get('#valTrans').type('100')
       cy.get('#desc').type('teste')
       cy.window().then((win) => {
         cy.stub(win, 'alert').as('alerta2');
       });
      cy.get('#buttonTransf').click()
       cy.get('@alerta2').should('have.been.calledWithMatch', 'Conta de destino não encontrada');
         
   
          //continua na pagina de transferencia 
          cy.url().should('include','/transf.html');
   })
   it('Deve Realizar o  cadastro e login e realizar transferencia  com saldo insuficiente ', () => {
      cy.visit('http://127.0.0.1:5500/bugBank/index.html');
   
   //cadasto de usuario
   cy.get("#cadastroBtn").click()
   cy.get("#email").type("teste@gmail.com")
   cy.get('#nome').type("teste1")
   cy.get("#senha").type("1234")
   cy.get('#conSenha').type("1234")
   cy.window().then((win) => {
      cy.stub(win, 'alert').as('alerta1');
    });
   cy.get('#buttonCadastro').click()
   
    cy.get('@alerta1').should('have.been.calledWithMatch', /Cadastro realizado! Sua conta é:/);
       //voltando ao index
       cy.url().should('include','/index.html');
       //Reaizar login 
       cy.get('#email').type("teste@gmail.com")
       cy.get("#senha").type("1234")
       cy.get('#buttonLogin').click()
       //Redirecionamento para o incio.html
       cy.url().should('include','/inicio.html');
       //tranfferencia 
       cy.get("#trans").click()
       cy.url().should('include','/transf.html');
       cy.get('#numConta').type('100000')
       cy.get('#valTrans').type('20000')
       cy.get('#desc').type('teste')
       cy.window().then((win) => {
         cy.stub(win, 'alert').as('alerta2');
       });
      cy.get('#buttonTransf').click()
       cy.get('@alerta2').should('have.been.calledWithMatch', 'Saldo insuficiente.');
       
          
          //continua na pagina de transferencia 
          cy.url().should('include','/transf.html');
   })
   it('Deve Realizar o login e realizar transferencia  com valor <=0 ', () => {
      cy.visit('http://127.0.0.1:5500/bugBank/index.html');
   
   //cadasto de usuario
   cy.get("#cadastroBtn").click()
   cy.get("#email").type("teste@gmail.com")
   cy.get('#nome').type("teste1")
   cy.get("#senha").type("1234")
   cy.get('#conSenha').type("1234")
   cy.window().then((win) => {
      cy.stub(win, 'alert').as('alerta1');
    });
   cy.get('#buttonCadastro').click()
   
    cy.get('@alerta1').should('have.been.calledWithMatch', /Cadastro realizado! Sua conta é:/);
       //voltando ao index
       cy.url().should('include','/index.html');
       //Reaizar login 
       cy.get('#email').type("teste@gmail.com")
       cy.get("#senha").type("1234")
       cy.get('#buttonLogin').click()
       //Redirecionamento para o incio.html
       cy.url().should('include','/inicio.html');
       //tranfferencia 
       cy.get("#trans").click()
       cy.url().should('include','/transf.html');
       cy.get('#numConta').type('100000')
       cy.get('#valTrans').type('-100')
       cy.get('#desc').type('teste')
       cy.window().then((win) => {
         cy.stub(win, 'alert').as('alerta2');
       });
      cy.get('#buttonTransf').click()
       cy.get('@alerta2').should('have.been.calledWithMatch', 'Preencha os campos corretamente');
         
      
          
          //continua na pagina de transferencia 
          cy.url().should('include','/transf.html');
   })
   })
   
       
   
         
   
   
   
   
   