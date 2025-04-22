window.onload = function () {
    const container = document.getElementById('controle-periodos');
    const cursos = JSON.parse(localStorage.getItem('controlePeriodos')) || [];
  
    cursos.forEach((curso, cursoIndex) => {
      const cursoDiv = document.createElement('div');
      cursoDiv.classList.add('curso');
  
      const tituloCurso = document.createElement('div');
      tituloCurso.classList.add('curso-titulo');
      tituloCurso.textContent = `${curso.curso} (${curso.ano})`;
  
      const periodosContainer = document.createElement('div');
      periodosContainer.classList.add('periodos-container');
  
      if (curso.periodos && curso.periodos.length > 0) {
        curso.periodos.forEach((periodo, periodoIndex) => {
          const periodoDiv = document.createElement('div');
          periodoDiv.classList.add('periodo');
  
          const label = document.createElement('label');
          label.textContent = `Período: ${periodo.nome} — Turma: ${periodo.turma}`;
  
          const editarBtn = document.createElement('button');
          editarBtn.textContent = 'Editar';
          editarBtn.style.marginLeft = '10px';
          editarBtn.onclick = function () {
            localStorage.setItem('editarCursoIndex', cursoIndex);
            localStorage.setItem('editarPeriodoIndex', periodoIndex);
            window.location.href = 'form-periodo.html';
          };
  
          const excluirBtn = document.createElement('button');
          excluirBtn.textContent = 'Excluir';
          excluirBtn.style.marginLeft = '5px';
          excluirBtn.onclick = function () {
            if (confirm('Tem certeza que deseja excluir este período?')) {
              curso.periodos.splice(periodoIndex, 1); 
              localStorage.setItem('controlePeriodos', JSON.stringify(cursos));
              window.location.reload();
            }
          };
  
          periodoDiv.appendChild(label);
          periodoDiv.appendChild(editarBtn);
          periodoDiv.appendChild(excluirBtn);
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
  