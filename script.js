// ============================
// 1. DEFININDO A CLASSE VOO
// ============================
class Voo {
    constructor(codigo, origem, destino, horario) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.horario = horario;
        this.status = "Aguardando";

        this.velocidade = 0;
        this.altitude = 0;
        this.distancia = 1000;
    }

    // Atualiza todos os dados na tela
    atualizarTela() {
        document.getElementById("codigo").innerText = this.codigo;
        document.getElementById("origem").innerText = this.origem;
        document.getElementById("destino").innerText = this.destino;
        document.getElementById("horario").innerText = this.horario;
        document.getElementById("status").innerText = this.status;
        document.getElementById("velocidade").innerText = this.velocidade;
        document.getElementById("altitude").innerText = this.altitude;
        document.getElementById("distancia").innerText = this.distancia;

        // Move o avião na tela
        const img = document.getElementById("aviao");
        img.className = "";

        if (this.status === "Aguardando" || this.status === "Pousado") {
            img.classList.add("pousado");

        } else if (this.status === "Decolando") {
            img.classList.add("decolando");

        } else if (this.status === "Em Voo") {
            img.classList.add("em-voo");
        }
    }
}

// ============================
// 2. EXEMPLO DE USO
// ============================

// Criando um voo
const voo1 = new Voo(
    "AZ123",
    "São Paulo",
    "Rio de Janeiro",
    "14:30"
);

// Atualiza a tela inicialmente
voo1.atualizarTela();

// Exemplo: mudar status depois de 2 segundos
setTimeout(() => {
    voo1.status = "Decolando";
    voo1.velocidade = 250;
    voo1.altitude = 1000;
    voo1.atualizarTela();
}, 2000);

// Exemplo: voo em andamento
setTimeout(() => {
    voo1.status = "Em Voo";
    voo1.velocidade = 850;
    voo1.altitude = 10000;
    voo1.distancia = 500;
    voo1.atualizarTela();
}, 4000);