function mudarTema() {
  let elementos = document.querySelectorAll('.tema-escuro, .tema-claro');

  elementos.forEach(elemento => {
    if (elemento.classList.contains('tema-escuro')) {
      elemento.classList.remove('tema-escuro');
      elemento.classList.add('tema-claro');
    } else if (elemento.classList.contains('tema-claro')) {
      elemento.classList.remove('tema-claro');
      elemento.classList.add('tema-escuro');
    }
  });
}
