'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

const closeModel = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

const openModel = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

for (let i = 0; i < btnsOpenModal.length; i++)
  // Ativando o model removendo a class hidden com a função
  btnsOpenModal[i].addEventListener('click', openModel)

// Fechamento no botão com a função
btnCloseModal.addEventListener('click', closeModel)

// Fechamento clicando fora do model (overlay) com a função
overlay.addEventListener('click', closeModel)

//Global event ao clicar no "esc" (escape)
// Parametro "e" para função ser executada quando a tecla for pressionada
document.addEventListener('keydown', function (e) {
  //e.key será o botão clicado
  // console.log(e.key)
  // Escape tem que ser com letra maiúscula
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel()
  }
})
