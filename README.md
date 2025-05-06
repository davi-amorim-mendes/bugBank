
Documentação de Testes-Login Vulture´s Bank

##Pagina 
![arealogado](https://github.com/user-attachments/assets/aee69de8-5213-4604-9f99-6ef954e1e490)
![paginabanco](https://github.com/user-attachments/assets/4bc57c56-e53d-4124-a66a-398d7b5a5acd)![novo erro](https://github.com/user-attachments/assets/a940ed31-3b6d-40c8-af45-70290b9cb77c)






###Fucionalidades 

-Registros e login;

-Transferência ;


### Listas de Testes Feitos 


#Login com Sucesso#

1.1 Login com sucesso 

Pré-condições: usuário já cadastrado com e-mail e senha válidos .

Etapas do teste :

-Preencher campo 'E-mail'
-Preencher campo 'Senha'
-Clicar em 'Login'

Resultado Esperado: Redirecionamento para inicio.html 

1.2.Login com senha incorreta 

Etapa do teste :Preencher e-mail válido e senha incorreta 

Resultado Esperado :Mensagem de erro :"E-mail ou senha incorreto"


3.Login com e-mail inexistente 

Etapa do teste :Preencher e-mail não cadastrado ainda 

Resultado Esperado :Mensagem de erro :" E-mail não cadastrado"

4.Login com campo vazio

Etapa do teste :Enviar Formulário sem preencher algum campo 

Resultado Esperado :Mensagem de erro :" Preencha todos os campos"



#Cadastro#

1.1 Cadastro com sucesso 

Etapa do teste :Preencher e-mail, Nome, Senha e confirmação de senha e clicar em cadastrar .

Resultado Esperado :Redirecionamento para index.html 


1.2 Cadastro de E-mail existente

Etapa do teste :Tentar cadastrar usando e-mail já utilizado .

Resultado Esperado :Mensagem de erro:"E-mail já cadastrado"


1.3 Cadastro com senhas que não coincide 

Etapa do teste :Preencher com senhas diferentes nos dois campos 

Resultado Esperado :Mensagem de erro:"senhas não coincidem"



#Transferência #


1.1 Transferência com sucesso

Pré-condições: conta de destino existe e saldo suficiente 

Etapas do teste :

-Preencher Numero da conta 
-Preencher Valor 
-Preencher Descrição
-Clicar em enviar 

Resultado Esperado: Mensagem "Transferência realizada com sucesso !"

1.2 Transferência para conta inexistente

Resultado Esperado :Mensagem de erro:"Conta de destino não encontrada"

10 .Transferência maior que saldo

Resultado Esperado :Mensagem de erro:"Saldo insuficiente"

11.Transferencia <=  0 R$

Resultado Esperado :Mensagem de erro:"Preencha os campos corretamente"


#Sair #

Resultado Esperado :Redirecionar para index.html



###ERROS E SOLUÇÕES 

1.TypeError:Cannot read properties of null(reading 'addEventListener')

![areatransferencia](https://github.com/user-attachments/assets/e506ede1-9df5-46f9-9215-0511b62cd018)

Causa :O Dom ainda não carregou completamente ao executar o script .

Solução: Usar o evento DOMcontntLoaded :

EX:
![solução](https://github.com/user-attachments/assets/79d52ff5-4239-442e-930b-bce6dc8c1be0)


2.ID Inexistente (cadastroBtn)

Causa: Referência ao ID cadastroBtn no JS mas ausente no HTML .
![cadastroBtn](https://github.com/user-attachments/assets/cdfe744b-6f36-45fa-a286-818d15c69c9f)

Solução : Adicionar o Botão com esse ID .


3.Cypress não mantem dados entre testes 

Causa :Cypress limpa o localStorage por padrão a cada novo teste .

Solução :Criar um usuário padrão .

