/* ============================================
   PataFeliz Petshop — JavaScript Principal
   Fase 2
   ============================================ */

/* --- Relógio em tempo real no navbar --- */
function atualizarRelogio() {
  const el = document.getElementById('relogio');
  if (!el) return;

  const agora = new Date();
  const horas   = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos= String(agora.getSeconds()).padStart(2, '0');

  const dias = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const dia = dias[agora.getDay()];
  const data = agora.toLocaleDateString('pt-BR');

  el.textContent = `${dia}, ${data}  |  ${horas}:${minutos}:${segundos}`;
}

// Inicia o relógio imediatamente e atualiza a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);


/* --- Saudação dinâmica conforme período do dia --- */
function saudacaoPeriodo() {
  const el = document.getElementById('saudacao');
  if (!el) return;

  const hora = new Date().getHours();
  let msg = '';

  if (hora >= 5 && hora < 12)       msg = '🌅 Bom dia! Seu pet merece o melhor.';
  else if (hora >= 12 && hora < 18) msg = '☀️ Boa tarde! Que tal cuidar do seu pet hoje?';
  else                               msg = '🌙 Boa noite! Cuide bem do seu companheiro.';

  el.textContent = msg;
}

saudacaoPeriodo();


/* --- Validação e envio do formulário de cadastro --- */
function configurarFormulario() {
  const form = document.getElementById('formCadastro');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // impede recarregar a página

    // Validação nativa do Bootstrap
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // Coleta os dados principais para exibir na confirmação
    const nome     = document.getElementById('nomeCliente').value;
    const nomePet  = document.getElementById('nomePet').value;
    const servico  = document.getElementById('servico').value;
    const metodo   = document.querySelector('input[name="metodoAgendamento"]:checked');
    const dataAg   = document.getElementById('dataAgendamento').value;
    const horaAg   = document.getElementById('horaAgendamento').value;

    // Preenche o modal de confirmação
    document.getElementById('confirma-nome').textContent    = nome;
    document.getElementById('confirma-pet').textContent     = nomePet;
    document.getElementById('confirma-servico').textContent = servico;
    document.getElementById('confirma-metodo').textContent  = metodo ? metodo.value : '—';
    document.getElementById('confirma-data').textContent    = dataAg
      ? new Date(dataAg + 'T00:00:00').toLocaleDateString('pt-BR') : '—';
    document.getElementById('confirma-hora').textContent    = horaAg || '—';

    // Abre o modal de confirmação
    const modal = new bootstrap.Modal(document.getElementById('modalConfirmacao'));
    modal.show();
  });
}

configurarFormulario();


/* --- Data mínima no calendário (hoje) --- */
function configurarCalendario() {
  const campoData = document.getElementById('dataAgendamento');
  if (!campoData) return;

  const hoje = new Date();
  // Avança 1 dia (agendamento a partir de amanhã)
  hoje.setDate(hoje.getDate() + 1);
  const yyyy = hoje.getFullYear();
  const mm   = String(hoje.getMonth() + 1).padStart(2, '0');
  const dd   = String(hoje.getDate()).padStart(2, '0');
  campoData.min = `${yyyy}-${mm}-${dd}`;
}

configurarCalendario();


/* --- Mostra/oculta campo de endereço para tele-busca --- */
function configurarTelebusca() {
  const radios = document.querySelectorAll('input[name="metodoAgendamento"]');
  const campoEndereco = document.getElementById('blocoEndereco');
  if (!campoEndereco) return;

  radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (this.value === 'Tele-busca') {
        campoEndereco.style.display = 'block';
        document.getElementById('enderecoColeta').required = true;
      } else {
        campoEndereco.style.display = 'none';
        document.getElementById('enderecoColeta').required = false;
      }
    });
  });
}

configurarTelebusca();


/* --- Contador regressivo para próximo final de semana (promoção) --- */
function contadorProximoFimDeSemana() {
  const el = document.getElementById('contador-promo');
  if (!el) return;

  function calcular() {
    const agora  = new Date();
    const diaSemana = agora.getDay(); // 0=Dom, 6=Sáb
    // Próximo sábado
    const diasAteSabado = (6 - diaSemana + 7) % 7 || 7;
    const proximo = new Date(agora);
    proximo.setDate(agora.getDate() + diasAteSabado);
    proximo.setHours(8, 0, 0, 0);

    const diff = proximo - agora;
    if (diff <= 0) { el.textContent = 'Promoção ativa agora!'; return; }

    const dias    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const segs    = Math.floor((diff % (1000 * 60)) / 1000);

    el.textContent =
      `${dias}d ${String(horas).padStart(2,'0')}h ` +
      `${String(minutos).padStart(2,'0')}m ${String(segs).padStart(2,'0')}s`;
  }

  calcular();
  setInterval(calcular, 1000);
}

contadorProximoFimDeSemana();
