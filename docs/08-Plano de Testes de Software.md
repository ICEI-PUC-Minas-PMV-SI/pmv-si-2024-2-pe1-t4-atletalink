# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

Preencha a tabela com o plano dos testes. Para cada Caso de Teste (CT), associe qual o Requisito Funcional ou não funcional que ele está verificando. Associe também a página (ou artefato) onde o teste será realizado e descreva o cenário do teste. Veja a tabela de exemplo.


**Caso de Teste** | **CT00 - Criar sua conta**
 :--------------: | ------------
**Procedimento**  | 1) Preencha todos os campos do formulário <br> 2) Clique no botão "Criar".
**Requisitos associados** | RF-001 
**Resultado esperado** | Usuário Cadastrado para acessar o site
**Dados de entrada** | Nome Completo, Telefone, Email, Data de Nascimento e Senha
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT00- Fazer login com sua conta**
 :--------------: | ------------
**Procedimento**  | 1) Clique no botão "Entrar" <br> 2) Preencha todos os campos do formulário <br> 3) Clique no botão Entrar
**Requisitos associados** | RF-001
**Resultado esperado** | Acessar o site
**Dados de entrada** | Email e Senha
**Resultado obtido** | Sucesso

**Caso de Teste** | CT01 - Solicitar agendamento de quadra 
 :--------------: | ------------
**Procedimento**  | 1) Seleciona uma data e clique em Confirmar <br> 2) Selecione o horário na quadra desejada <br> 3) Clique no botão "Solicitar agendamento".
**Requisitos associados** | RF-005
**Resultado esperado** | Realizar a solicitação de agendamento pelo usuário esportista                                                                                             
**Dados de entrada** | Seleção do dia e do horário pretendido
**Resultado obtido** | Sucesso

**Caso de Teste** | CT013 - Alterar senha
 :--------------: | ------------
**Procedimento**  |  1) selecione a opcão alterar senha<br> 2) digite a nova senha <br> 3)selecione "salvar dados" <br>
**Requisitos associados** | RF-012
**Resultado esperado** | alterar a senha para uma nova                                                                                           
**Dados de entrada** | "nova senha"
**Resultado obtido** | Sucesso

**Caso de Teste** | CT014 - Pesquisar quadras
 :--------------: | ------------
**Procedimento**  | 1) Selecione a barra de pesquisa <br> 2) pesquise pela quadra <br> 
**Requisitos associados** | RF-013
**Resultado esperado** | aparecer as quadras relacionadas a pesquisa                                                                                            
**Dados de entrada** | "nomes de quadras"
**Resultado obtido** | Sucesso

**Caso de teste** | CT008/CT009 - Cadastramento de Quadra
 :--------------: | ------------
**Procedimento**  | 1) Selecionar o botão de cadastrar quadra <br> 2) incluir os dados da Quadra <br> 3) Salvar os dados da quadra
**Requisitos associados** | RF-007
**Resultado esperado** | Será realizado o cadastramento da quadra juntamente com o formato dos horários
**Dados de entrada** | "Botão de cadastrar quadra"
**Resultado obtido** | Sucesso

**Caso de teste** | CT011 - Edição dos dados da Quadra
 :--------------: | ------------
**Procedimento**  | 1) Selecionar o botão de Edição <br> 2) Editar dados da Quadra <br> 3) Salvar alterações dos dados da quadra
**Requisitos associados** | RF-010
**Resultado esperado** | Será realizado a edição dos dados da quadra
**Dados de entrada** | "ícone de lápis"
**Resultado obtido** | Sucesso

**Caso de teste** | CT012 - Exclusão dos dados da Quadra
 :--------------: | ------------
**Procedimento**  | 1) Selecionar o botão de Exclusão
**Requisitos associados** | RF-011
**Resultado esperado** | Será realizado a exclusão dos dados da quadra
**Dados de entrada** | "ícone de lixeira"
**Resultado obtido** | Sucesso

**Caso de teste** | CT002 - Acompanhamento do agendamento
 :--------------: | ------------
**Procedimento**  | 1) Seleciona uma data e clique em Confirmar <br> 2) Selecione o horário na quadra desejada <br> 3) Clique no botão "Solicitar agendamento <br> 4) Clique no botão "Avançar".
**Requisitos associados** | RF-006
**Resultado esperado** | Será realizado o agendamento da quadra
**Dados de entrada** | Seleção da quadra e do horário pretendidos
**Resultado obtido** | Sucesso

## Registro dos Testes de Software
Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |CT00 - Cadastro e Login                                          |
|---|---|
|Requisito Associado | RF-001 - Permitir que o Usuário e Gestor criem uma conta e façam login |
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1567924_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EbU9Lxz6vfJJtwPjh0eTMJMBTrDOiRwqkxUU8tvja8vEow&e=aU5gZj | 

|*Caso de Teste*                                 |CT01 - Solicitar agendamento de quadra                                          |
|---|---|
|Requisito Associado | RF-005 - Permitir que o usuário esportista faça agendamento de horário|
|Link do vídeo do teste realizado: | https://sgapucminasbr-my.sharepoint.com/personal/1285897_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EaJhRgn-UghElY3ALcA86aIBPvdWE7wkMYESaPCpDqX2_Q&e=0kq2q9&nav=eyJwbGF5YmFja09wdGlvbnMiOnt9LCJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbE1vZGUiOiJtaXMiLCJyZWZlcnJhbFZpZXciOiJwb3N0cm9sbC1jb3B5bGluayIsInJlZmVycmFsUGxheWJhY2tTZXNzaW9uSWQiOiJmNzhmMGNiNy1kY2Y0LTQ0YjctYWU4OS1lNTVkMDRjZGFkMDQifX0%3D | 

|*Caso de Teste*                                 |CT008/CT009/CT0111/CT012- Cadastra quadra, editar e excluir dados da quadra  |
|---|---|
|Requisito Associado | RF-007/RF-010/RF-011 - Permitir que o usuário gestor de quadra cadastre a quadra ,editar e excluir dados da quadra esportista faça agendamento de horário|
|Link do vídeo do teste realizado: |(https://sgapucminasbr-my.sharepoint.com/personal/1567866_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=ESP9MRBUGEJKiv0sSzmAmOYBc5Uo0WZ51wqVFxdUvJQRYA&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=tmC8T3)| 

|*Caso de Teste*                                 |CT02- Alterar dados  |
|---|---|
|Requisito Associado | RF-012 - Permitir que o usuário troque seus dados cadastrados|
|Link do vídeo do teste realizado: |(https://sgapucminasbr-my.sharepoint.com/personal/1566590_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EfwP3eR8H3VDteQjseX5dg8BrwNf-yQgFx1TPQh0Cxd2Lw&e=2ROrRf&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)| 

|*Caso de Teste*                                 |CT02- Pesquisar pelas quadras cadastrados  |
|---|---|
|Requisito Associado | RF-013 - Permitir que o usuário pesquisar pelas quadras cadastrados|
|Link do vídeo do teste realizado: |(https://sgapucminasbr-my.sharepoint.com/personal/1566590_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EfwP3eR8H3VDteQjseX5dg8BrwNf-yQgFx1TPQh0Cxd2Lw&e=2ROrRf&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)|

|*Caso de Teste*                                 |CT02- Acompanhar agendamento  |
|---|---|
|Requisito Associado | RF-012 - Permitir que o usuário gestor de quadra confirme as reservas|
|Link do vídeo do teste realizado: |(https://sgapucminasbr-my.sharepoint.com/personal/1568535_sga_pucminas_br/_layouts/15/guestaccess.aspx?share=EazFAzacN51NtBeXIqC4yvQB-NNj2A4ffYzMgIpLaSET9Q&e=XiPWEa&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)|

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).

# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.

Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Cenários de Teste de Usabilidade 

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1             | Você é um ávido comentador e gosta de dar suas opiniões, ao fim do horário da reserva a qual você agendou, deixe uma avaliação. |
| 2             | Você é um grande praticante de esportes e ficou sabendo de um site onde você pode reservar quadras, crie uma conta e agende uma quadra.  |
| 3             | Você agendou uma reserva, mas se deparou com um imprevisto de última hora e não poderá mais comparecer, acesse sua agenda e cancele a reserva. |
| 4             | Você é dono de um centro esportivo e tem interesse em anunciá-lo, crie uma conta e anuncie sua quadra |

## Registro de Testes de Usabilidade 

Cenário 1: Você é um ávido comentador e gosta de dar suas opiniões, ao fim do horário da reserva da qual você agendou, deixe uma avaliação.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 35 segundos                  |
| 2       | SIM             | 5                    | 60 segundos                  |
| 3       | SIM             | 4                    | 42 segundos                  |
| 4       | SIM             | 5                    | 38 segundos                  |
| **Média**     | 100%           | 4                | 43,75 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 25 segundos |

    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não identifiquei dificultdades para realizar a tarefa.

Cenário 2: Você é um grande praticante de esportes e ficou sabendo de um site onde você pode reservar quadras, crie uma conta e agende uma quadra.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 122 segundos                  |
| 2       | SIM             | 5                    | 100 segundos                  |
| 3       | SIM             | 4                    | 148 segundos                  |
| 4       | SIM             | 5                    | 136 segundos                  |
| **Média**     | 100%           | 4                | 126,5 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 90 segundos |

    Comentários dos usuários: Plataforma excelente e muito inovadora. 
    A plataforma possui uma boa cobertura de quadras.

Cenário 3:  Você agendou uma reserva, mas se deparou com um imprevisto de última hora e não poderá mais comparecer, acesse sua agenda e cancele a reserva.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 38 segundos                  |
| 2       | SIM             | 5                    | 60 segundos                  |
| 3       | SIM             | 5                    | 42 segundos                  |
| 4       | SIM             | 5                    | 55 segundos                  |
| **Média**     | 100%           | 4                | 48,75 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 35 segundos |

    Comentários dos usuários: Processo simples e rápido, nota 10. 
    Sem frescura e enrolação, direto ao ponto.

Cenário 4: Você é dono de um centro esportivo e tem interesse em anunciá-lo, criar uma conta e cadastrar sua quadra.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 280 segundos                  |
| 2       | SIM             | 4                    | 244 segundos                  |
| 3       | SIM             | 4                    | 355 segundos                  |
| 4       | SIM             | 5                    | 312 segundos                  |
| **Média**     | 100%           | 4                | 297,75 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 4 | 235 segundos |

    Comentários dos usuários: Excelente plataforma para divulgação de quadras esportivas. 
    A home do gestor é muito intuitiva.
    
## Avaliação dos Testes de Usabilidade

Com base nos resultados obtidos, foi possível constatar que a aplicação web apresentou um alto índice de sucesso na interação dos usuários, com todos os cenários propostos sendo concluídos com êxito.

Além disso, a satisfação subjetiva dos usuários durante a execução dos cenários foi positiva, conforme indicado pelas médias das avaliações, que se mantiveram em torno de 4, considerado um bom desempenho.

No entanto, observamos uma discrepância significativa no tempo médio de conclusão das tarefas entre os usuários e o especialista/desenvolvedor em todos os cenários. Essa diferença, embora parcialmente esperada devido ao conhecimento prévio do desenvolvedor sobre a interface, organização das páginas e posicionamento dos elementos.

Diante dessa diferença, identificamos oportunidades claras para melhorar a usabilidade em determinadas áreas da aplicação, visando tornar a experiência mais intuitiva e eficiente para os usuários.

