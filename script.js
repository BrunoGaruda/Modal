'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
console.log(btnsOpenModal)

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    console.log('button clicked')

    // Neste caso a classe nao adiciona o ponto "." e sim o somente o nome da classe.
    // Caso removermos o hidden o texto aparecerá
    modal.classList.remove('hidden')

    //backdrop-filter blur
    overlay.classList.remove('hidden')
  })

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
})
