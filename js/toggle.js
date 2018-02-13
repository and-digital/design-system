const _setModal = (args) => {
  const closeModal = () => {
    if(args.target.className.match(args.link.dataset.toggleClass)) {
      args.link.click();
      args.target.removeAttribute('aria-modal');
      document.body.classList.remove('no-overflow');
      document.body.classList.remove('blur-page');
    }
  };

  args.modalClose.addEventListener('click', closeModal);
};

export const toggle = (mod) => {
  const trigger = mod.querySelectorAll('[data-toggle-class]');

  if(!trigger) throw new Error('Please provide a trigger using data-toggle-class attribute and state a class to toggle');

  Array.from(trigger).forEach((link) => {
    const target = document.getElementById(link.dataset.toggleId) || link;
    const isModal = link.dataset.toggleModal !== undefined;

    link.addEventListener('click', (event) => {
      event.preventDefault();
      target.classList.toggle(link.dataset.toggleClass);

      if(isModal) {
        target.setAttribute('aria-modal', true);
        target.querySelector('input').focus();
        document.body.classList.toggle('no-overflow');
        document.body.classList.toggle('blur-page');
      }
    });

    window.addEventListener('keydown', (event) => {
      if((event.code === 'Escape' || event.key === 'Escape'|| event.keyCode === 27) && target.className.match(link.dataset.toggleClass)) {
        link.click();
        window.focus();
      }
    });

    if (isModal) {
      _setModal({
        target,
        link,
        modalClose: target.querySelector('.js-modal-close')
      });
    }
  });
};
