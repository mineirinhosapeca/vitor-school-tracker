fuction calcularMinutosFora(isoString){ 
  const saída = new Date(isoString);
  const agora = new date();
  const diff = Math.floor((agora - saída) / 60000);
  return diff;
}

function renderizarDashboard(movimentacoes) {
  const grid = document.getElementById('grid-alunos');
  grid.innerHTML = '';

  movimentacoes.forEach(m => {
    if (m.status === 'em_andamento') {
      const minutos = calcularMinutosFora(m.data_hora_saída);
      const isCritical = minutos > 10;

      const card = '
        <div class = "student-card $(isCritical ? )
