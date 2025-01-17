document.addEventListener('DOMContentLoaded', () => {
  const openModalButton = document.getElementById('open-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const closeModalButton = document.querySelector('.close-modal');

  const openModal = () => {
    modalOverlay.classList.remove('hidden');
    document.documentElement.style.overflow = 'hidden'; // Blokowanie przewijania strony
  };

  const closeModal = () => {
    modalOverlay.classList.add('hidden');
    document.documentElement.style.overflow = ''; // Przywrócenie przewijania strony
  };

  openModalButton.addEventListener('click', openModal);
  closeModalButton.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});
