const add = document.querySelector('#add')
const modal = document.querySelector('.modal')

add.addEventListener('click', () =>{
    modal.style.display = 'block'
    modal.classList.toggle('pop')
    add_icon.classList.toggle('close-img')
})

const container = document.querySelector('.container')
const themeIcon = document.querySelector('.theme-icon')
const theme = document.querySelector('#theme')
const add_icon = document.querySelector('#add')
const header = document.querySelector('.header')
const content = document.querySelector('.content')
const modalContent = document.querySelector('.modal-content')
const contnet = document.querySelector('.content')

theme.addEventListener('click', () => {
    header.classList.toggle('dark')
    container.classList.toggle('dark')
    add_icon.classList.toggle('dark')
    themeIcon.classList.toggle('dark')
    modalContent.classList.toggle('dark')
    content.classList.toggle('dark')
})
