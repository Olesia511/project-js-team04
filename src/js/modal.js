const modalOpen = document.querySelector('.modal-open');
const backdrop = document.querySelector('.js-backdrop');
const modalClose = document.querySelector('.close-btn-modal');

modalOpen.addEventListener('click', onOpenModal);

function onOpenModal() {
    backdrop.classList.remove('is-hidden')
}

modalClose.addEventListener('click', onCloseModal)

function onCloseModal() {
    backdrop.classList.add('is-hidden');
}