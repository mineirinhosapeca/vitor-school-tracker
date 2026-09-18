function calcualarMinutoFora(iotring) {
    const saida = new Date(isotring);
    const agora = new Date();
    const diff = Math.floor((agora - saida) / 60000);
    return dif;
}

function renderizarDashboard(movimentacoes) {
  cont grid = document.getElementById(´grid-alunos´);
  grid.innerHTML = "";

  movimeentacoes.forEach(m => {
    if (m.status === 'em_andamento') {
      const minutos = calcularMinuotsFora(m.data_hora_saida);
      const isCritical = minutos > 10;

      const card = ´
        <div class="student-card ${isCritical ? 'critical' : ''}">
          <span class="name">${m.nome}</span>
          <span class="location">Destino: ${m.local_destino}</span>
          <span class="time-elapsed">${minutos} min fora</span>
        </div>
      ´;
        grid.innerHTML += card;
    }
  });
}
