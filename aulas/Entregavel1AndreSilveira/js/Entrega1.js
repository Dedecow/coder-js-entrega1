let nomeDigitado = '';
let emailDigitado = '';
let rendaDigitada = '';

const tbName = document.getElementById('tb-name');

function salvarNomeTabela() {
    nomeDigitado = prompt('Digite seu nome.')||'Anônimo';
    tbName.textContent = nomeDigitado;
    console.log(
        `Nome registrado para simulação de investimentos foi ${nomeDigitado}`
    );
}
salvarNomeTabela();

const tbEmail = document.getElementById('tb-email');

function salvarEmailTabela() {
    emailDigitado = prompt('Digite seu email.')||'email@email.com';
    tbEmail.textContent = emailDigitado;
    console.log(
        `Email registrado para simulação de investimentos foi ${emailDigitado}`
    );
}
salvarEmailTabela();

const tbRenda = document.getElementById('tb-renda');

function salvarRendaTabela(){
    rendaDigitada=prompt('Digite sua renda.')||'';
    tbRenda.textContent = rendaDigitada;
    console.log(
        `Renda registrada para simulação de investimentos foi ${rendaDigitada}`
    )
}
salvarRendaTabela();

function dadosDigitados() {
    const mensagem =`
    DADOS PARA SIMULAÇÂO:
    -------------------------------
    NOME: ${nomeDigitado}
    EMAIL: ${emailDigitado}
    RENDA: ${rendaDigitada}
    `;
    alert (mensagem);
    console.log('Dados globais:', {nomeDigitado, emailDigitado, rendaDigitada})
}
dadosDigitados()