const containers = document.getElementById('horizontal');
const panels = document.querySelectorAll('.panel');

let currentIndex = 0;
let isScrolling = false;

function changeSection(direction) {
    if (isScrolling) return;

    const nextIndex = currentIndex + direction;

    if (nextIndex < 0 || nextIndex >= panels.length) return;

    isScrolling = true;
    currentIndex = nextIndex;

    containers.style.transform = `translateX(-${currentIndex * 100}vw)`;

    setTimeout(() => {
        isScrolling = false;
    }, 800);
}

function goToSection(index) {
    if (isScrolling) return;

    if (index < 0 || index >= panels.length) return;

    isScrolling = true;
    currentIndex = index;

    containers.style.transform = `translateX(-${currentIndex * 100}vw)`;

    setTimeout(() => {
        isScrolling = false;
    }, 800);
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') changeSection(1);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') changeSection(-1);
});

window.addEventListener('wheel', (e) => {
    if (e.deltaY > 0) {
        changeSection(1);
    } else {
        changeSection(-1);
    }
});