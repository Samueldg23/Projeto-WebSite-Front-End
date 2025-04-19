// Dados de exemplo para cursos
const cursosExemplo = [
    {
      curso: "Informática",
      ano: 2023,
      periodos: []
    },
    {
      curso: "Administração",
      ano: 2024,
      periodos: []
    },
    {
      curso: "Enfermagem",
      ano: 2023,
      periodos: []
    }
  ];
  
  // Dados de exemplo para turmas
  const turmasExemplo = [
    {
      nome: "Turma A",
      alunos: ["Ana", "Carlos", "João"]
    },
    {
      nome: "Turma B",
      alunos: ["Marina", "Lucas", "Fernanda"]
    },
    {
      nome: "Turma C",
      alunos: ["Diego", "Lara", "Beatriz"]
    }
  ];
  
  // Salvar no localStorage
  localStorage.setItem('controlePeriodos', JSON.stringify(cursosExemplo));
  localStorage.setItem('turmas', JSON.stringify(turmasExemplo));
  
  alert("Dados iniciais salvos com sucesso!");
  