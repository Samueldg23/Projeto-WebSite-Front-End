window.onload = function () {
  const cursosSalvos = JSON.parse(localStorage.getItem('controlePeriodos')) || [];
  const selectTurmas = document.getElementById('turma');
  const spanCurso = document.getElementById('curso-nome');

  // Preenche o select com as turmas disponíveis
  cursosSalvos.forEach(curso => {
    curso.turmas.forEach(turma => {
      const option = document.createElement('option');
      option.value = `${curso.curso}|${curso.ano}|${turma.nome}`; // curso, ano e nome da turma
      option.textContent = turma.nome;
      selectTurmas.appendChild(option);
    });
  });

  // Atualiza o nome do curso ao selecionar a turma
  selectTurmas.addEventListener('change', function () {
    const valorSelecionado = this.value;
    if (valorSelecionado) {
      const [nomeCurso, anoCurso] = valorSelecionado.split('|');
      spanCurso.textContent = `${nomeCurso} (${anoCurso})`;
    } else {
      spanCurso.textContent = 'Selecionar turma';
    }
  });

  // Lógica de salvar período
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const valorSelecionado = selectTurmas.value;
    const nomePeriodo = document.getElementById("nome").value.trim();

    if (!valorSelecionado || !nomePeriodo) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    const [cursoSelecionado, anoSelecionado, turmaSelecionada] = valorSelecionado.split('|');

    const novosDados = cursosSalvos.map(curso => {
      if (curso.curso === cursoSelecionado && curso.ano === anoSelecionado) {
        if (!curso.periodos) {
          curso.periodos = [];
        }

        curso.periodos.push({
          nome: nomePeriodo,
          turma: turmaSelecionada
        });
      }
      return curso;
    });

    localStorage.setItem('controlePeriodos', JSON.stringify(novosDados));
    alert("Período salvo com sucesso!");
    window.location.href = "index.html";
  });
};
