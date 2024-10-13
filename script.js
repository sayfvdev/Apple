const img = document.querySelector('.img')
const btns = document.querySelectorAll('button[data-color]')
const pictures = {
    natural: "./img/natural_titan.webp",
    titanium: "./img/desert_titan.webp",
    black: "./img/black_titan.webp",
    white: "./img/white_titan.webp",
}

btns.forEach((btn) => {
    btn.onclick = () => {
        img.style.backgroundImage = `url(${pictures[btn.getAttribute('data-color')]})`
    }
})
