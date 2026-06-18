# PataFeliz Petshop — Arquivo de Ajuda (Fase 2)

## Sobre o Projeto

Este projeto é um sistema web front-end desenvolvido como trabalho acadêmico para a
disciplina de Fundamentos de Sistemas Web. O site representa um petshop fictício
chamado **PataFeliz**, com produtos, serviços e um sistema completo de cadastro e
agendamento.

Na **Fase 2**, o projeto evoluiu da Fase 1 (HTML puro) para um sistema moderno,
responsivo, dinâmico e acessível, utilizando **CSS customizado**, **Bootstrap 5** e
**JavaScript**.

---

## Estrutura de Arquivos

```
petshop/
├── index.html        → Página inicial (carrossel, categorias, promoção)
├── alimentos.html     → Categoria: Alimentos
├── acessorios.html    → Categoria: Acessórios
├── higiene.html        → Categoria: Higiene
├── servicos.html       → Tabela de serviços
├── cadastro.html       → Formulário de cadastro do cliente, pet e agendamento
├── style.css            → Estilos customizados (cores, tipografia, layout)
├── script.js             → Funções JavaScript (relógio, validação, modal, etc.)
└── README.md             → Este arquivo de ajuda
```

---

## Ajustes realizados na Fase 2

Em relação à Fase 1, foram implementados os seguintes ajustes e melhorias:

### 1. Uso de CSS / Bootstrap
- Adoção do **framework Bootstrap 5** via CDN para grid responsivo, componentes
  (navbar, cards, modal, formulários) e ícones (Bootstrap Icons).
- Criação do arquivo `style.css` com paleta de cores própria (verde/âmbar),
  tipografia (Google Fonts: Poppins + Open Sans), cards com efeito hover,
  badges personalizados e estilização da tabela de serviços.
- **Carrossel (Carousel) do Bootstrap** na página inicial, com 3 slides
  apresentando o petshop, os produtos e o serviço de banho/tosa, incluindo
  indicadores, controles de navegação e legendas.
- Layout totalmente **responsivo** (mobile-first), com menu colapsável (navbar
  toggler) para dispositivos móveis.

### 2. JavaScript — funções dinâmicas (`script.js`)
- **Relógio em tempo real** no cabeçalho, exibindo dia da semana, data e hora
  atualizados a cada segundo.
- **Saudação dinâmica** na página inicial, que muda conforme o período do dia
  (bom dia / boa tarde / boa noite).
- **Contador regressivo** para a promoção de fim de semana, recalculado a cada
  segundo.
- **Validação de formulário** com Bootstrap (`was-validated`), verificando
  campos obrigatórios, formatos de CPF, telefone, e-mail, datas e horários.
- **Calendário com data mínima**: o campo de data do agendamento não permite
  selecionar o dia atual ou datas passadas (mínimo: a partir de amanhã).
- **Exibição condicional** do campo "endereço para coleta" quando o cliente
  seleciona a opção de tele-busca.
- **Modal de confirmação** (Bootstrap Modal) que resume os dados do
  agendamento após o envio do formulário, sem a necessidade de recarregar a
  página.

### 3. Formulário de Cadastro e Agendamento (`cadastro.html`)
Formulário completo dividido em 3 seções (fieldsets):

**Dados do Cliente:**
- Nome completo (`text`, obrigatório)
- CPF (`text` com `pattern` para validar formato)
- E-mail (`email`, obrigatório)
- Telefone/WhatsApp (`tel` com `pattern`)
- Endereço completo (`text`, obrigatório)
- Data de nascimento (`date`)
- Sexo (`radio button`: Feminino / Masculino / Outro)
- Preferências de contato (`checkbox`: newsletter e lembretes)

**Dados do Pet:**
- Nome do pet (`text`, obrigatório)
- Espécie (`select`: Cão / Gato / Outro)
- Raça (`text`, com `placeholder`)
- Idade (`number`, com `min`/`max`)
- Peso (`number`, decimal)
- Porte (`radio button`: Pequeno / Médio / Grande)
- Observações de saúde (`textarea`)

**Serviço e Agendamento:**
- Serviço desejado (`select`: Banho / Tosa / Banho e Tosa)
- Data do agendamento (`date`, com data mínima = amanhã)
- Horário (`time`, das 08:00 às 18:00)
- Método de atendimento (`radio button`: Entrega no local / Tele-busca)
- Endereço de coleta (exibido dinamicamente se "Tele-busca" for selecionado)
- Aceite dos termos (`checkbox`, obrigatório)

### 4. Acessibilidade (Aula 10)
Foram aplicados diversos requisitos de acessibilidade para deficientes visuais
e usuários de leitores de tela:

- **Atributo `alt`** descritivo em **todas as imagens** do site (fotos de
  produtos, banners do carrossel), descrevendo a cena para audiodescrição.
- **Skip link** ("Pular para o conteúdo principal") no topo de cada página,
  permitindo que usuários de teclado/leitor de tela acessem diretamente o
  conteúdo principal, sem precisar passar pelo menu.
- **Atributos ARIA**: `aria-label`, `aria-labelledby`, `aria-current`,
  `aria-live`, `aria-hidden`, `aria-describedby` em links, botões, seções e
  campos de formulário.
- **HTML semântico**: uso de `<header>`/`<nav>`, `<main>`, `<footer>`,
  `<article>`, `<section>`, `<fieldset>`/`<legend>`, `<address>`.
- **Foco visível** (`focus-visible`) customizado em links, botões e campos de
  formulário, com contraste de cor adequado.
- **Texto alternativo em ícones decorativos** marcados com `aria-hidden="true"`
  para não serem lidos por leitores de tela.
- **Labels associados** a todos os campos de formulário via atributo `for`/`id`.
- **Contraste de cores** adequado entre texto e fundo em toda a interface.

---

## Tecnologias Utilizadas

- **HTML5** — estrutura semântica das páginas
- **CSS3** — estilos customizados (`style.css`)
- **Bootstrap 5.3** — grid responsivo, carrossel, modal, formulários, ícones
- **JavaScript (ES6)** — interatividade, validação e dinamismo (`script.js`)
- **Google Fonts** — tipografia (Poppins + Open Sans)

---

## Como Visualizar o Site

### Localmente
1. Faça o download ou clone o repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno (conexão com a
   internet necessária para carregar Bootstrap, ícones e fontes via CDN)

### Online (GitHub Pages)
Acesse o link do GitHub Pages disponível na seção "About" do repositório.

---

## Páginas e Funcionalidades

| Página | Funcionalidade |
|---|---|
| `index.html` | Carrossel de destaques, saudação dinâmica, contador de promoção, categorias |
| `alimentos.html` | 2 produtos da categoria Alimentos, com foto, descrição e valor |
| `acessorios.html` | 2 produtos da categoria Acessórios, com foto, descrição e valor |
| `higiene.html` | 2 produtos da categoria Higiene, com foto, descrição e valor |
| `servicos.html` | Tabela com 7 serviços, valores e disponibilidade de tele-busca |
| `cadastro.html` | Formulário completo de cadastro (cliente + pet) e agendamento |

---

## Informações de Contato (fictícias)

- **Endereço:** Rua dos Animais, 123 — Cachoeirinha/RS — CEP 94900-000
- **Telefone:** (51) 99999-0000
- **E-mail:** contato@patafeliz.com.br

---

## Autoria

Projeto desenvolvido como atividade acadêmica — Disciplina de Fundamentos de
Sistemas Web.
&copy; 2025 — Todos os direitos reservados.
