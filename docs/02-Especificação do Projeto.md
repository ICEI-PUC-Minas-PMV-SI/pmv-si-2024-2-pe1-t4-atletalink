# Especificações do Projeto

## Personas

<br>

<img align="left" width="256" src="https://github.com/user-attachments/assets/f5ef1600-7ed9-472c-91a7-1ea126fcbb36" />

### Camila Ribeiro, 34 anos

Camila Ribeiro é professora de educação infantil em uma escola em Belo Horizonte/MG. Após a pandemia descobriu o vôlei de areia no qual começou a jogar esporadicamente, entretanto, a quadra fechou e ela gostaria continuar praticando de forma recreativa. Agora, procura uma quadra próxima para jogar aos fins de semana e, ocasionalmente, durante a semana com as colegas de trabalho. Ela busca um espaço com boa infraestrutura, horários flexíveis e um ambiente acolhedor. Seus desafios incluem conciliar a prática com sua rotina de trabalho e encontrar uma quadra disponível em horários convenientes.

<br clear="left">
<br>
 
<img align="left" width="256" src="https://github.com/user-attachments/assets/732739a8-bf1b-475f-b796-924f013f528f" />

### Mariana Costa, 42 anos

Mariana Costa é proprietária e gerente de uma quadra esportiva em São Paulo. Ex-atleta, Mariana transformou sua paixão pelos esportes em um negócio próspero, oferecendo um espaço seguro e de qualidade para práticas esportivas como futebol, basquete e vôlei. Casada e com formação superior em Administração de Empresas, ela busca constantemente inovações para melhorar seu empreendimento e aumentar sua visibilidade através de marketing digital e parcerias locais. Mariana enfrenta desafios como a forte concorrência e a manutenção da qualidade de sua quadra com um orçamento limitado. Ela valoriza a saúde e o bem-estar através do esporte e está comprometida em oferecer um atendimento excelente, tornando-se uma referência na comunidade local, com isso, busca uma solução eficiente para gerenciar a agenda da quadra e promover ofertas especiais e eventos. Ela é familiar com ferramentas básicas de gestão e redes sociais e procura visibilidade e facilidade na gestão de reservas, com interesse em funcionalidades que ajudem a maximizar a receita e promover sua quadra.


<br clear="left">
<br>

<img align="left" width="256" src="https://github.com/user-attachments/assets/f772d5d4-c80e-42a5-9e17-5e3f2a4c52d9" />

### João Silva, 27 anos

João Silva é formado em Análise e Desenvolvimento de Sistemas e sempre gostou de praticar esportes, principalmente se forem esportes ao ar livre. Jogou futebol na escola, mas nos últimos anos se apaixonou pelo vôlei de praia e futevôlei. Durante a semana ele trabalha em um escritório e atualmente enfrenta dificuldades em localizar quadras disponíveis e prefere uma reserva rápida e sem complicações. João valoriza uma interface intuitiva e funcionalidades que economizem tempo, esperando suporte e feedback rápidos sobre suas reservas. Funcionalidades desejadas incluem filtros de busca por horário e localização e notificações em tempo real sobre a disponibilidade da quadra.

<br clear="left">


<img align="left" width="256" src="https://github.com/user-attachments/assets/492b5646-ad39-47d8-94a8-165d2ffadc8e" />

### Enzo Henrique, 25 anos

Enzo Henrique é técnico em administração e, desde que seu pai precisou dedicar mais atenção à própria saúde devido à idade avançada, assumiu a gestão da quadra de futebol e da quadra de areia de propriedade de seu pai, localizada em Contagem/MG. Enzo sempre colaborou com o negócio, porém, agora que conduz a atividade integralmente, pretende implementar melhorias nos sistemas de gestão das quadras. Enzo se deparou com uma metodologia de gestão antiga e obsoleta de modo que concluiu ser necessário ampliar a divulgação do espaço bem como gerir o atendimento de forma mais automatizada e eficiente através de uma ferramenta que permita também ampliar sua clientela.









## Histórias de Usuários

|EU COMO               | QUERO/PRECISO                        |PARA              
|--------------------------|----------------------------------------|--------------------------------------------|
| Camila Ribeiro, esportista nas horas vagas | Criar um perfil  em plataforma de atividades físicas coletivas | Encontrar mulheres interessadas em jogar vôlei 
| Camila Ribeiro, esportista nas horas vagas | Fazer login com suas informações de cadastro | Selecionar a quadra e o horário para a partida de vôlei
| Mariana Costa, proprietária de quadra esportiva| Utilizar uma ferramenta de divulgação e cadastro |Aumentar a visibilidade da minha quadra e atrair mais clientes
| Mariana Costa, proprietária de quadra esportiva | Realizar a gestão de reservas dos horários da quadra| Otimizar a rotina de gerenciamento interna e simplificar o método de reservas para os usuários  
|João Silva, atleta de finais de semana | Acessar uma funcionalidade que permita a busca de quadras esportivas por localidade | Encontrar locais próximos e viáveis para praticar tênis ou futebol
| João Silva, atleta de finais de semana | Agendar uma partida de futebol | Praticar com os amigos 
| Enzo Henrique, gestor de quadra esportiva | Utilizar uma aplicação de gestão automatizada | Atualizar a modernizar a metodologia de gestão de reservas da sua quadra  </p>




## Requisitos


### Requisitos Funcionais

|ID       | Descrição do Requisito  | Prioridade |
|-------|-------------------------|----|
|RF-001| Permitir que o usuário esportista faça cadastro | ALTA | 
|RF-002| Permitir que o usuário gestor de quadra faça cadastro  | ALTA |
|RF-003| Permitir que os usuários (esportistas e donos de quadra) façam login | ALTA |
|RF-004| Permitir que o usuário esportista use ferramentas de busca para encontrar quadras disponíveis por cidade | ALTA |
|RF-005| Permitir a interação entre usuários através de Fórum | MÉDIA |
|RF-006| Permitir que o usuário esportista faça agendamento de horário | ALTA |
|RF-007| Permitir que o usuário esportista forneça feedback sobre a experiência com a quadra | MÉDIA |
|RF-008| Permitir que o usuário gestor de quadra disponibilize agenda de horários para reseva | ALTA |
|RF-009| Permitir que o usuário gestor de quadra divulgue informações sobre a quadra e divulgue eventos | MÉDIA |
|RF-010| Permitir que o usuário gestor de quadra confirme as reservas | MÉDIA| 
|RF-011| A plataforma gerará relatórios para o uso dos gestores de quadra | MÉDIA|


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O aplicativo deve ser compatível com as principais plataformas e dispositivos | ALTA | 
|RNF-002| A interface do usuário deve seguir as diretrizes de design (Material Design para Android e Human Interface Guidelines para iOS), garantindo uma experiência de usuário consistente e fácil de navegar | MÉDIA | 
|RNF-003| O sistema deve ser capaz de processar até 1000 requisições simultâneas sem comprometer a perfomance | ALTA |
|RNF-004| O sistema deve ter uma disponibilidade mínima de 99,9% ao longo do ano | ALTA |
|RNF-005| O sistema deve ser capaz de se recuperar automaticamente de falhas menores (como desconexões de rede temporárias) sem perda de dados ou impacto negativo na experiência do usuário | ALTA |
|RNF-006| O aplicativo deve ser otimizado para consumir no máximo 5% da bateria de um dispositivo móvel em uma hora de uso contínuo | BAIXA |
|RNF-007| O sistema deve utilizar um JSON Web Server como base de dados para armazenar e recuperar informações de forma rápida e eficiente | ALTA |
|RNF-008| O aplicativo deve garantir a proteção de dados pessoais e financeiros dos usuários, seguindo as melhores práticas de segurança e em conformidade com a LGPD | ALTA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
