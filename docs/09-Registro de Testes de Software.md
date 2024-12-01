# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.


**Caso de Teste** | **CT00 - Criar conta parte 1** [exemplo]
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Clique em criar conta <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão "Continuar".
**Requisitos associados** | RF-001
**Resultado esperado** | Prosseguir para a parte 2 do cadastro
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT00- Criar conta parte 2** [exemplo]
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Criar conta" <br> 
**Requisitos associados** | RF-001
**Resultado esperado** | Usuário cadastrado
**Dados de entrada** | Inserção de dados válidos no formulário de cadastro
**Resultado obtido** | Sucesso

**Caso de Teste** | CT01 - Solicitar agendamento de quadra 
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.teste.com.br <br> 2) Seleciona uma data e clique em Confirmar <br> 3) Selecione o horário na quadra desejada <br> 3) Clique no botão "Solicitar agendamento".
**Requisitos associados** | RF-006
**Resultado esperado** | Realizar a solicitação de agendamento pelo usuário esportista                                                                                             
**Dados de entrada** | Seleção do dia e do horário pretendido
**Resultado obtido** | Sucesso

**Caso de Teste** | CT02 - Alterar senha
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.index.html <br> 2) selecione a opcão alterar senha<br> 3) digite a nova senha <br> 4)selecione "salvar dados" <br>
**Requisitos associados** | RF-02
**Resultado esperado** | alterar a senha para uma nova                                                                                           
**Dados de entrada** | "nova senha"
**Resultado obtido** | Sucesso

**Caso de Teste** | CT015 - Pesquisar quadras
 :--------------: | ------------
**Procedimento**  | 1) Acesse o endereço www.index.html <br> 2) Selecione a barra de pesquisa <br> 3) pesquise pela quadra <br> 
**Requisitos associados** | RF-015
**Resultado esperado** | aparecer as quadras relacionadas a pesquisa                                                                                            
**Dados de entrada** | "nomes de quadras"
**Resultado obtido** | Sucesso

**Caso de teste** | CT015 - Trocar pagina
 :--------------: | ------------
**Procedimento**  | 1) selecione um dos ícones do rodapé
**Requisitos associados** | RF-015
**Resultado esperado** | Ser direcionado para a pagina correspodente ao ícone selecionado.                                                                                          
**Dados de entrada** | "ícone selecionado"
**Resultado obtido** | Sucesso
## Registro dos Testes de Software
