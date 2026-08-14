(() => {
  document.documentElement.dataset.bwindNightTheme = 'enabled';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', '#101726');
})();
