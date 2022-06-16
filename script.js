const add = document.querySelector('#add')
const modal = document.querySelector('.modal')
const theme = document.querySelector('#theme')
const header = document.querySelector('.header')
const container = document.querySelector('.container')
const add_icon = document.querySelector('.add-img')

add.addEventListener('click', () =>{
    modal.style.display = 'block'
    modal.classList.toggle('pop')
    add_icon.classList.toggle('close-img')
})

add.addEventListener('touch', () => {
    add_icon.classList.toggle('close-img')
})  

theme.addEventListener('click', () => {
    container.classList.toggle('dark')
    header.classList.toggle('darkHeader')
})