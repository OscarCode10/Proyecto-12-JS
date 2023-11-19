const barMenu = document.querySelector(".barMenu")
const fila1 = document.querySelector(".fila1")
const fila2 = document.querySelector(".fila2")
const fila3 = document.querySelector(".fila3")

barMenu.addEventListener('click', () => {
    fila1.classList.toggle("fila1Animation")
    fila2.classList.toggle("fila2Animation")
    fila3.classList.toggle("fila3Animation")
})
