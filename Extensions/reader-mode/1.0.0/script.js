(() => {
  const hidden = 'nav,header,footer,aside,iframe,[role="dialog"],.ad,.ads,.advertisement,.sidebar,.comments';
  const toggle = () => {
    const on = document.documentElement.dataset.bwindReader === 'on';
    document.documentElement.dataset.bwindReader = on ? 'off' : 'on';
    document.querySelectorAll(hidden).forEach(node => { node.style.display = on ? '' : 'none'; });
    button.textContent = on ? 'Ler' : 'Normal';
  };
  const button = document.createElement('button');
  button.id = 'bwind-reader-button'; button.textContent = 'Ler'; button.addEventListener('click', toggle);
  const add = () => { if (!document.getElementById(button.id)) document.body.appendChild(button); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add, {once:true}); else add();
})();
