window.onload = function () {
    const container = document.getElementById('controle-periodos');
    const cursos = JSON.parse(localStorage.getItem('controlePeriodos')) || [];
  
    cursos.forEach(curso => {
      // Criar o bloco do curso
      const cursoDiv = document.createElement('div');
      cursoDiv.classList.add('curso');
  
      const tituloCurso = document.createElement('div');
      tituloCurso.classList.add('curso-titulo');
      tituloCurso.textContent = `${curso.curso} (${curso.ano})`;
  
      const periodosContainer = document.createElement('div');
      periodosContainer.classList.add('periodos-container');
  
      // Adiciona os períodos (se houver)
      if (curso.periodos && curso.periodos.length > 0) {
        curso.periodos.forEach(periodo => {
          const periodoDiv = document.createElement('div');
          periodoDiv.classList.add('periodo');
  
          const label = document.createElement('label');
          label.textContent = `Período: ${periodo.nome} — Turma: ${periodo.turma}`;
  
          periodoDiv.appendChild(label);
          periodosContainer.appendChild(periodoDiv);
        });
      } else {
        const vazio = document.createElement('p');
        vazio.textContent = 'Nenhum período cadastrado.';
        periodosContainer.appendChild(vazio);
      }
  
      cursoDiv.appendChild(tituloCurso);
      cursoDiv.appendChild(periodosContainer);
      container.appendChild(cursoDiv);
    });
  };
  