import { toggle } from './toggle';

const mods = {
  toggle
};

Array.from(document.querySelectorAll('[data-mod]'))
  .forEach((mod) => {
    mods[mod.dataset.mod](mod);
});




