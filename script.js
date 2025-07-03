function chama_aluno(){
  let aluno = {
      nome: 'José Pimenta',
      idade: 15,
      altura: 1.79,
      nota: 0.1
    };
 //alert (aluno.nome);

 document.getElementById('nome_aluno').textContent = 'Nome:  ' + aluno.nome;
 document.getElementById('idade_aluno').textContent = 'Idade: ' + aluno.idade;
 document.getElementById('altura_aluno').textContent = 'Altura: ' + aluno.altura;
 document.getElementById('nota_aluno').textContent = 'Nota: ' + aluno.nota;

}