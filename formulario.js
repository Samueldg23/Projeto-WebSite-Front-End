window.onload = function () {
  const selectCurso = document.getElementById("curso");
  const selectTurma = document.getElementById("turma");
  const inputNomePeriodo = document.getElementById("nome");

  const cursos = JSON.parse(localStorage.getItem("controlePeriodos")) || [];
  const turmas = JSON.parse(localStorage.getItem("turmas")) || [];

  cursos.forEach((curso, index) => {
    const option = document.createElement("option");
    option.value = index; 
    option.textContent = `${curso.curso} (${curso.ano})`;
    selectCurso.appendChild(option);
  });

  turmas.forEach((turma) => {
    const option = document.createElement("option");
    option.value = turma.nome;
    option.textContent = turma.nome;
    selectTurma.appendChild(option);
  });

  const editarCursoIndex = localStorage.getItem('editarCursoIndex');
  const editarPeriodoIndex = localStorage.getItem('editarPeriodoIndex');

  if (editarCursoIndex !== null && editarPeriodoIndex !== null) {
    const cursoSelecionado = cursos[editarCursoIndex];
    const periodoSelecionado = cursoSelecionado.periodos[editarPeriodoIndex];

    selectCurso.value = editarCursoIndex;
    selectTurma.value = periodoSelecionado.turma;
    inputNomePeriodo.value = periodoSelecionado.nome;

    document.querySelector('h1').textContent = "Editar Período";

    localStorage.removeItem('editarCursoIndex');
    localStorage.removeItem('editarPeriodoIndex');
  }

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
      cursoSelecionado.periodos[editarPeriodoIndex] = novoPeriodo;
    } else {
      if (!cursoSelecionado.periodos) {
        cursoSelecionado.periodos = [];
      }
      cursoSelecionado.periodos.push(novoPeriodo);
    }

    localStorage.setItem("controlePeriodos", JSON.stringify(cursos));

    alert("Período salvo com sucesso!");
    window.location.href = "index.html";
  });
};
