window.onload = function () {
    const container = document.getElementById('controle-periodos');
    const cursos = JSON.parse(localStorage.getItem('controlePeriodos')) || [];
  
    cursos.forEach((curso, cursoIndex) => {
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
        curso.periodos.forEach((periodo, periodoIndex) => {
          const periodoDiv = document.createElement('div');
          periodoDiv.classList.add('periodo');
  
          const label = document.createElement('label');
          label.textContent = `Período: ${periodo.nome} — Turma: ${periodo.turma}`;
  
          // Botões de editar e excluir
          const editarBtn = document.createElement('button');
          editarBtn.textContent = 'Editar';
          editarBtn.style.marginLeft = '10px';
          editarBtn.onclick = function () {
            // Salvamos os dados temporariamente para usar no form
            localStorage.setItem('editarCursoIndex', cursoIndex);
            localStorage.setItem('editarPeriodoIndex', periodoIndex);
            window.location.href = 'form-periodo.html';
          };
  
          const excluirBtn = document.createElement('button');
          excluirBtn.textContent = 'Excluir';
          excluirBtn.style.marginLeft = '5px';
          excluirBtn.onclick = function () {
            if (confirm('Tem certeza que deseja excluir este período?')) {
              curso.periodos.splice(periodoIndex, 1); // remove da lista
              localStorage.setItem('controlePeriodos', JSON.stringify(cursos)); // atualiza storage
              window.location.reload(); // recarrega a página
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
  