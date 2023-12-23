document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('button');

    button.addEventListener('click', function () {
      var usuario = document.getElementById('usuario').value;
      var senha = document.getElementById('senha').value;

      // Verifica se o usuário e a senha são ambos 'admin'
      if (usuario === 'admin' && senha === 'admin') {
        // Se for 'admin', redireciona para a página de configurações (substitua 'configuracoes.html' pelo seu arquivo)
        window.location.href = 'configuracoes.html';
      } else {
        // Caso contrário, exibe uma mensagem de erro (você pode personalizar isso conforme necessário)
        alert('Usuário ou senha incorretos. Tente novamente.');
      }
    });
  });