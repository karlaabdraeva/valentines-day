const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const box = document.querySelector('.box');
const content = document.querySelector('.content');
const gif = document.querySelector('.tenor-gif-embed');

function moveBtn(event) {
    const x = (Math.random() * (window.innerHeight - noBtn.offsetHeight) / 2);
    const y = (Math.random() * (window.innerWidth - noBtn.offsetWidth) / 2);
    event.target.style.top = `${x}px`;
    event.target.style.left = `${y}px`;
}

function showGif() {
    gif.hidden = false;
    requestAnimationFrame(() => {
        gif.classList.add('visible');
    })
    content.remove();
    box.style.marginBottom = `15%`;
}

noBtn.addEventListener('mouseenter', moveBtn);
yesBtn.addEventListener('click', showGif);