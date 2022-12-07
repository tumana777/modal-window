'use strict';
const showModalEls = document.querySelectorAll('.show-modal');
const closeModalEl = document.querySelector('.close-modal');
const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');

showModalEls.forEach(showModal => {
    showModal.addEventListener('click', openModal)
});

function openModal() {
    modalEl.classList.remove('hidden');
    overlayEl.classList.remove('hidden');
};

function closeModal() {
    modalEl.classList.add('hidden');
    overlayEl.classList.add('hidden');
};

closeModalEl.addEventListener('click', closeModal);

overlayEl.addEventListener('click', closeModal);

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && !modalEl.classList.contains('hidden')) closeModal();
})