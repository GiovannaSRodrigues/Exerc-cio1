
var sistema = require('./modulo/sistema.js')

var readline = require('readline')

var media, nota1, nota2, nota3, nota4;

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

entradaDados.question('Entre com o nome do ALUNO: \n', function (aluno) {
    let nome = aluno;
    entradaDados.question('Entre com o nome do PROFESSOR: \n', function (professor) {
        let nombre = professor;
        entradaDados.question('Digite o sexo do Aluno: \n', function (sexoAluno) {
            let sexo = sexoAluno;
            entradaDados.question('Digite o sexo do Professor: \n', function (sexoProf) {
                let sex = sexoProf;
                entradaDados.question('Nome do curso: \n', function (curso) {
                    let nomeCurso = curso;
                    entradaDados.question('Nome da disciplina: \n', function (disciplina) {
                        let disci = disciplina;
                        entradaDados.question('Entre com a primeira nota de 0 a 100: \n', function (nota1) {
                            let primeira = nota1;
                            entradaDados.question('Entre com a segunda nota de 0 a 100: \n', function (nota2) {
                                let segunda = nota2;
                                entradaDados.question('Entre com a terceira nota de 0 a 100: \n', function (nota3) {
                                    let terceira = nota3;
                                    entradaDados.question('Entre com a quarta nota de 0 a 100: \n', function (nota4) {
                                        let quarta = nota4;
                                        let resultado;

                                        if (primeira == '' || segunda == '' || terceira == '' || quarta == '') {
                                            console.log('ERRO: Não é possível calcular sem preencher todos os dados');
                                        } else if (isNaN(primeira) || isNaN(segunda) || isNaN(terceira) || isNaN(quarta)) {
                                            console.log('ERRO: Não é possível calcular sem a entrada de valores numéricos. ');
                                        }
                                        else if (nota1 < 0 && nota1 > 100) {
                                            console.log('ERRO: Não é possível calcular com números fora do limite');
                                        }

                                        media = (nota1 + nota2 + nota3 + nota4) / 4;

                                        media = media.toFixed(2);
                                        console.log('Media = ' + media);

                                        if (media >= 70) {
                                            console.log("Aprovado");

                                        } else if (media <= 50) {
                                            console.log("Reprovado");
                                        } else {
                                            (media >= 50 && media <= 69)
                                            console.log('Exame');
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})