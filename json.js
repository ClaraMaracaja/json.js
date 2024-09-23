let aluno = {
    nome: "Clara Maracajá",
    idade: 18,
    curso: "Ciência da Computação",
    notas: [9.0, 8.5, 9.5],
    endereco: {
        rua: "Rua Agente Fiscal Paulo de Assis",
        cidade: "João Pessoa",
        estado: "PB"
    }
};

console.log(aluno.nome); 
console.log(aluno.notas[0]); 

aluno.idade = 22; 
aluno.notas.push(10.0); 

let alunoString = JSON.stringify(aluno);
console.log(alunoString); 

let alunoObjeto = JSON.parse(alunoString);
console.log(alunoObjeto); 

for (let propriedade in aluno) {
    console.log(propriedade + ":" + aluno[propriedade]);
}

let mediaNotas = aluno.notas.reduce((acc, nota) => acc + nota, 0) / aluno.notas.length;
console.log('Média das notas:' , mediaNotas); 

console.log(aluno.endereco.cidade); 
console.log(aluno.endereco.estado); 

let alunos = [
    {
        nome: "Julia Gabrielle",
        idade: 19,
        curso: "Medicina",
        notas: [7.5, 9.5, 10.0]
    },
    {
        nome: "Athina Maria",
        idade: 18,
        curso: "Odontologia",
        notas: [9.5, 8.5, 10.0]
    },
    aluno 
];
let alunosFiltrados = alunos.filter(a => {
    let media = a.notas.reduce((acc, nota) => acc + nota, 0) / a.notas.length;
    return media > 8;
});

console.log(alunosFiltrados);