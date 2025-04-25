# Controle de Períodos

Este projeto é uma parte de um sistema maior, desenvolvido durante a matéria de **Projeto de Website - Front-End** na faculdade. A proposta é criar um sistema simples de controle de períodos, onde os usuários podem cadastrar cursos, turmas e períodos, além de editar e excluir esses registros.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página.
- **CSS**: Estilização da interface.
- **JavaScript**: Lógica de funcionamento, incluindo manipulação do DOM e LocalStorage.

---

## Funcionalidades

- **Cadastro de Cursos**: Criação de cursos com nome e ano.
- **Cadastro de Períodos**: Cada curso pode ter vários períodos, com nome e turma.
- **Edição e Exclusão de Períodos**: Funcionalidades de edição e exclusão de períodos já cadastrados.

---

## Como Rodar o Projeto Localmente

1. **Clone o repositório** ou baixe os arquivos.
2. Abra o arquivo `index.html` no seu navegador. Não há necessidade de um servidor, pois o projeto usa o `localStorage` para armazenar os dados localmente no navegador.

---

## Como Adicionar Cursos e Períodos ao LocalStorage

Ao acessar o sistema pela primeira vez, o LocalStorage estará vazio. Para testar a funcionalidade, siga os passos abaixo:

1. Abra o console do navegador (pressione F12 ou Ctrl+Shift+I, depois vá para a aba "Console").
2. Execute o código fornecido (detalhado abaixo) para adicionar cursos com períodos.

````

const cursos = [
  {
    curso: "Engenharia de Software",
    ano: 2025,
    periodos: [
      { nome: "1º Semestre", turma: "A" },
      { nome: "2º Semestre", turma: "B" }
    ]
  },
  {
    curso: "Sistemas de Informação",
    ano: 2025,
    periodos: [
      { nome: "1º Semestre", turma: "A" }
    ]
  }
];

localStorage.setItem("controlePeriodos", JSON.stringify(cursos));
````


3. Após rodar o código, o LocalStorage terá dois cursos com períodos cadastrados. Agora, ao acessar a página, os cursos e seus períodos aparecerão nas opções de seleção.

---

## Como Funciona

- **Cadastro de Período**: Ao acessar a página do formulário (`formulario.html`), você pode selecionar um curso e uma turma, além de informar o nome do período. Esses dados são salvos no `localStorage` e aparecerão na página de controle de períodos (`index.html`).
  
- **Edição e Exclusão**: Na página de controle de períodos, você pode editar ou excluir qualquer período cadastrado. Para editar, basta clicar no botão "Editar", que leva você ao formulário de cadastro com os dados já preenchidos. Para excluir, basta clicar em "Excluir" e confirmar a ação.

---

## Aprendizado

Durante o desenvolvimento deste projeto, pude praticar meus conhecimentos de **HTML**, **CSS** e **JavaScript**. Além disso, foi uma oportunidade de aprender a trabalhar com **LocalStorage** para persistir dados no navegador, uma funcionalidade essencial para sistemas simples sem necessidade de banco de dados.

A implementação dessa solução foi desafiadora, principalmente ao lidar com as manipulações de **DOM**, manipulação de **arrays** e **objetos** em **JavaScript**, e a integração entre a interface e o armazenamento local.

**Desenvolvido como parte da matéria de Projeto de Website - Front-End.**

## Vídeos que vi para desenvolver esse projeto:

-  https://youtu.be/wwqOJ2o84S4?si=69tSvgdXCWZAj1_w
-  https://youtu.be/Z7mnxUI4u00?si=1EUHFzWEBTZFQ5Vk
-  https://youtu.be/kwOPAQJDGyI?si=dQpeUi7SVKbCfXmI
-  https://youtu.be/c-D7uV2CiFQ?si=HWAZgGsp1j-QXJyZ
-  https://youtu.be/Fhy-5CtVkiM?si=i5Zq8yJ1nBwWNmIR
-  https://youtu.be/AB35iSr1YyA?si=pUuiou8SAz1N3D15
