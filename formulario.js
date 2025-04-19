window.onload = function () {
  const selectCurso = document.getElementById("curso");
  const selectTurma = document.getElementById("turma");
  const inputNomePeriodo = document.getElementById("nome");

  const cursos = JSON.parse(localStorage.getItem("controlePeriodos")) || [];
  const turmas = JSON.parse(localStorage.getItem("turmas")) || [];

  // Preencher o select de cursos
  cursos.forEach((curso, index) => {
    const option = document.createElement("option");
    option.value = index; // usaremos o índice para identificar depois
    option.textContent = `${curso.curso} (${curso.ano})`;
    selectCurso.appendChild(option);
  });

  // Preencher o select de turmas
  turmas.forEach((turma) => {
    const option = document.createElement("option");
    option.value = turma.nome;
    option.textContent = turma.nome;
    selectTurma.appendChild(option);
  });

  // Lógica para editar período
  const editarCursoIndex = localStorage.getItem('editarCursoIndex');
  const editarPeriodoIndex = localStorage.getItem('editarPeriodoIndex');

  if (editarCursoIndex !== null && editarPeriodoIndex !== null) {
    const cursoSelecionado = cursos[editarCursoIndex];
    const periodoSelecionado = cursoSelecionado.periodos[editarPeriodoIndex];

    // Preencher os campos com os dados do período a ser editado
    selectCurso.value = editarCursoIndex;
    selectTurma.value = periodoSelecionado.turma;
    inputNomePeriodo.value = periodoSelecionado.nome;

    // Alterar o título para "Editar Período"
    document.querySelector('h1').textContent = "Editar Período";

    // Remover os itens do localStorage que indicam que estamos editando
    localStorage.removeItem('editarCursoIndex');
    localStorage.removeItem('editarPeriodoIndex');
  }

  // Lógica do formulário ao clicar em "Salvar"
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const cursoIndex = selectCurso.value;
    const turmaSelecionada = selectTurma.value;
    const nomePeriodo = inputNomePeriodo.value.trim();

    if (!cursoIndex || !turmaSelecionada || !nomePeriodo) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const cursoSelecionado = cursos[cursoIndex];

    const novoPeriodo = {
      nome: nomePeriodo,
      turma: turmaSelecionada
    };

    if (editarCursoIndex !== null && editarPeriodoIndex !== null) {
      // Se estamos editando, atualizamos o período
      cursoSelecionado.periodos[editarPeriodoIndex] = novoPeriodo;
    } else {
      // Se estamos criando um novo, adicionamos o período
      if (!cursoSelecionado.periodos) {
        cursoSelecionado.periodos = [];
      }
      cursoSelecionado.periodos.push(novoPeriodo);
    }

    // Atualizar o localStorage
    localStorage.setItem("controlePeriodos", JSON.stringify(cursos));

    alert("Período salvo com sucesso!");
    window.location.href = "index.html";
  });
};
