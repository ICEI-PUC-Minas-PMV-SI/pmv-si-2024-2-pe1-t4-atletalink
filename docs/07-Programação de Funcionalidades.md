# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito | Responsável | Artefato Criado |
|------|------------------------|------------|-----------------|
|RF-001| Permitir que o usuário esportista faça cadastro| Pedro | loginRegister.html |
|RF-002| Permitir que os usuários (esportistas e donos de quadra) façam login | Pedro | loginRegister.html |
|RF-003| fornecer a localização do usuario | Gustavo | hub.html |
|RF-004| Permitir a interação entre usuários através de Fórum |  |  |
|RF-005| Permitir que o usuário esportista faça agendamento de horário | Débora | agendamento.html |
|RF-006| Permitir que o usuário esportista forneça feedback sobre a experiência com a quadra | Caio | tela 11 - index.html |
|RF-007| Permitir que o usuário gestor de quadra realize o cadastramento da quadra | João Vitor | gestorCadrastroQuadra.html |
|RF-009| Permitir que o usuário gestor de quadra confirme as reservas | Caio | telas 10, 12 e 14 - index.html |
|RF-010| Edição dos dados da quadra | João Vitor | gestorGerenciarQuadras.html |
|RF-011| Exclusão dos dados da quadra | João Vitor | gestorGerenciarQuadras.html |
|RF-012| Alterar senha | Gustavo | pessoalData.html |
|RF-013| Pesquisar pelas quadras cadrastradas | Gustavo | hub.html |
|RF-014|  fornecer a localização das quadras | Gustavo | hub.html |



## Descrição das estruturas:

## Formulário de Cadastramento de Quadras
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Numero (Inteiro)  | Identificador único da notícia            | 1                                              |
| Nome da Quadara| Texto             | Nome da Quadra                            | Quadra Esporte Nacional                        |
| Endereço       | Texto             | Nome da Rua onde a quadra e localizada    | Rua Espirito Santo                             |
|| Número        | Numero (Inteiro)  | Número do Endereli                        | 20                                             |
| Complemento    | Texto             | Pontos de Referencia do Endereço          | Câmara do Municipal                            |
| Bairro         | Texto             | Bairro que a rua se encontra              | Centro                                         |
| Cidade         | Texto             | Nome da Cidade onde a quadra se encontra  | Belo Horizonte                                 |
| Estado/UF      | Texto             | Estado onde a quadra se encontra          | Minas Gerais                                   |
| CEP            | Numero (Inteiro)  | Número do CEP da cidade                   | 30110-008                                      |
| Telefone de Contato | Numero (Inteiro)  | Telefone de contato do responsável   | (31) 99999-9999                                |
| E-mail         | Texto             | E-mail do reponsável                      | seuemail@email.com                             |
| Modalidade Esportiva | Texto             | Modalidade esportiva da quadra      | Vôlei                                          |
| Tipo de Piso   | Texto             | Tipo de piso da quadra                    | Areia                                          |
| Quadra Coberta | Texto             | Se a quadra possui cobertura              | Sim                                            |
| Descrição      | Texto             | Descrição da quadra                       | Quadra destinada a prática do vôlei de praia   |
| Formato dos Horários | Texto       | Horários disponíveis da quadara           | Tarde e Noite                                  |

## Formulário de Cadastramento de novos usuários
|  **Nome**          | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:------------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome Completo      | Texto             | Nome completo do usuário                  | Michel Miguel Elias Temer Lulia                |
| Telefone           | Número            | Número de telefone do usuário             | (21) 93737-3737                                |
| Email              | Texto             | Endereço eletrônico do usuário            | joaosilva@gmail.com                            |
| Data de Nascimento | Número            | Data de Nascimento do usuário             | 10/10/2000                                     |
| Senha              | Texto             | Chave de acesso da conta do usuário       | astrazuni2077!                                 |

## Formulário de Login
|  **Nome**          | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:------------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Email              | Texto             | Endereço eletrônico do usuário            | joaosilva@gmail.com                            |
| Senha              | Texto             | Chave de acesso da conta do usuário       | astrazuni2077!                                 |

## Formulário de contatação da AtletaLink
|  **Nome**          | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:------------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Nome Completo      | Texto             | Nome completo do usuário                  | Michel Miguel Elias Temer Lulia                |
| Email              | Texto             | Endereço eletrônico do usuário            | joaosilva@gmail.com                            |
| Mensagem           | Texto             | Carta direcionado a AtletaLink            | Olá, gostaria de saber se possuem vagas de estágio.|


