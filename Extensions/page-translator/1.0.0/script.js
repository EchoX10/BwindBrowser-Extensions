(() => {
  const add = () => {
    if (document.getElementById('bwind-translate-button')) return;
    const button = document.createElement('button');
    button.id = 'bwind-translate-button'; button.textContent = 'Traduzir';
    button.addEventListener('click', () => {
      const target = 'https://translate.google.com/translate?sl=auto&tl=pt&u=' + encodeURIComponent(location.href);
      location.assign(target);
    });
    document.body.appendChild(button);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', add, {once:true}); else add();
})();
