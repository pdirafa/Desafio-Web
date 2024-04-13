// Scripts para Silvia Reis Atelier

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode'); // Adiciona ou remove a classe dark-mode do body
}

const modoEscuroBotao = document.querySelector('.modo-escuro button');
if (modoEscuroBotao) {
    modoEscuroBotao.addEventListener('click', toggleDarkMode);
}

// Função para inicializar o mapa
function inicializarMapa() {
    // Cria um novo mapa
    var mapa = L.map('mapa').setView([-19.628613, -43.225014], 18);

    // Adiciona o mapa base (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // Adiciona um marcador ao mapa 
    var marcador = L.marker([-19.628613, -43.225014]).addTo(mapa);
    marcador.bindPopup("<b>Silvia Reis Atelier</b><br>Av. Duque de Caxias, 1199.").openPopup();
}

// Chama a função de inicialização do mapa quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', inicializarMapa);

// Abre o modal com a imagem clicada
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
}

// Fecha o modal quando o botão de fechar é clicado
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Fecha o modal quando o usuário clica fora da imagem
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
