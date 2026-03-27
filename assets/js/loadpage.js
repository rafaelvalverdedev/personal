// Função para mostrar elementos sequencialmente
function showElement(element, delay) {
    setTimeout(() => {
        element.classList.add('show');
    }, delay);
}

function apagaElement(element, delay) {
    setTimeout(() => {
        element.classList.add('some');
    }, delay);
}

window.onload = function () {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Ocultar a tela de carregamento e mostrar o conteúdo após o carregamento
    loader.style.display = 'none';
    content.style.display = 'flex';

    const svg = document.querySelector('svg');
    const header = document.querySelector('header');
    const section = document.getElementById('horizontal').children[0];
    const footer = document.querySelector('footer');
    const logogithub = document.getElementById('logogithub');
    const sections = document.querySelectorAll('.panel');

    sections.forEach((sec, index) => {
        showElement(sec, 2500 + (index * 300));
    });
    showElement(svg, 100);
    apagaElement(svg, 1900);
    showElement(header, 2000);
    showElement(section, 2500);
    showElement(footer, 2500);
    showElement(logogithub, 3000);

};
