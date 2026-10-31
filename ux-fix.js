(() => {
  const drawer = document.querySelector('#drawer');
  if (!drawer) return;
  document.addEventListener('keydown', event => { if (event.key === 'Escape') drawer.hidden = true; });
  drawer.addEventListener('click', event => { if (event.target === drawer) drawer.hidden = true; });
  document.querySelectorAll('[data-view]').forEach(link => link.addEventListener('click', () => { drawer.hidden = true; }));
})();
