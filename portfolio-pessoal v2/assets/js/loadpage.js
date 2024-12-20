// Função para mostrar elementos sequencialmente
function showElement(element, delay) {
    setTimeout(() => {
        element.classList.add('show');
    }, delay);
}

function apagaElement(element, delay) {
    setTimeout(() => {
        // element.style.display = 'none';
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
    const section = document.querySelector('section');
    const footer = document.querySelector('footer');
    const logogithub = document.getElementById('logogithub');

    showElement(svg, 100);     
    apagaElement(svg, 700);
    showElement(header, 1000); 
    showElement(section, 1500); 
    showElement(footer, 2000);
    showElement(logogithub, 2500);

    // showElement(svg, 1);     
    // apagaElement(svg, 1);
    // showElement(header, 1); 
    // showElement(section, 1); 
    // showElement(footer, 1);
    // showElement(logogithub, 1);



    /*
    // Simular um carregamento de 3 segundos
    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'flex';
    }, 5000);
    */
};
