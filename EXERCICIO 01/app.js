
var sistema = require('./modulo/sistema.js')
var readline = require('readline')

var media, nota1, nota2, nota3, nota4;
var mediaExame, notaExame;

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


entradaDados.question('Entre com o nome do ALUNO: \n', function (aluno) {
    let nome = aluno;
    if (nome == '') {
        console.log('ERRO: É necessário que todos os campos sejam preenchidos ');
        entradaDados.close()
        return false;
    }
    entradaDados.question('Entre com o nome do PROFESSOR: \n', function (professor) {
        let nombre = professor;
        if (nombre == '') {
            console.log('ERRO: É necessário que todos os campos sejam preenchidos ');
            entradaDados.close()
            return false;
        }
        entradaDados.question('Digite o sexo do Aluno: \n', function (sexoAluno) {
            let sexo;
            if (sexoAluno == 'F') {
                sexo = 'Aluna'
            } else if (sexoAluno == 'M') {
                sexo = 'Aluno'
            } else {
                console.log('Digite F para feminino ou M para masculino')
                entradaDados.close()
                return false;
            }

            if (sexo == '') {
                console.log('ERRO: É necessário que todos os campos sejam preenchidos ');
                entradaDados.close()
                return false;
            }
            entradaDados.question('Digite o sexo do Professor: \n', function (sexoProf) {
                let sex;
                if (sexoProf == 'F') {
                    sexo = 'Professora'
                } else if (sexoProf == 'M') {
                    sexo = 'Professor'
                } else {
                    console.log('Digite F para feminino ou M para masculino')
                    entradaDados.close()
                    return false;
                }
                if (sex == '') {
                    console.log('ERRO: É necessário que todos os campos sejam preenchidos ');
                    entradaDados.close()
                    return false;
                }
                entradaDados.question('Nome do curso: \n', function (curso) {
                    let nomeCurso = curso;
                    if (nomeCurso == '') {
                        console.log('ERRO:É necessário que todos os campos sejam preenchidos ');
                        entradaDados.close()
                        return false;
                    }
                    entradaDados.question('Nome da disciplina: \n', function (disciplina) {
                        let disci = disciplina;
                        if (disci == '') {
                            console.log('ERRO: É necessário que todos os campos sejam preenchidos ');
                            entradaDados.close()
                            return false;
                        }
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
                                            console.log('ERRO: Não é possível calcular sem a entrada de valores numéricos. ');
                                            entradaDados.close()
                                            return false;
                                        }
                                        else if ((primeira >= 0 && primeira <= 100)
                                            && (segunda >= 0 && segunda <= 100)
                                            && (terceira >= 0 && terceira <= 100)
                                            && (quarta >= 0 && quarta <= 100)) {

                                            media = (Number(primeira) + Number(segunda) + Number(terceira) + Number(quarta)) / 4;
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
                                        } else {
                                            console.log('ERRO: Não é possível calcular com números fora do limite');
                                            entradaDados.close()
                                            return false;
                                        }
                                        entradaDados.question('Entre com a nota do exame: \n', function (exame) {
                                            let notaExame = exame;
                                            let resultado;
                                            if (notaExame == '') {
                                                console.log('ERRO: Não é possível calcular sem a entrada de valores numéricos.');
                                                entradaDados.close()
                                                return false;
                                            }
                                            mediaExame = (Number(media) + Number(notaExame)) / 2;
                                            mediaExame = mediaExame.toFixed(2);
                                            console.log('Media final = ' + mediaExame);

                                            if (mediaExame >= 60.00) {
                                                console.log("Aprovado no Exame");

                                            } else {
                                                console.log("Reprovado no Exame");
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






















})