(() => {
  'use strict';
  const selectors = [
    '[id*="ad-"]', '[id^="ad_"]', '[class*=" ad-"]', '[class^="ad-"]',
    '[class*="advert"]', '[id*="advert"]', '[data-ad]', '[data-ad-slot]',
    'iframe[src*="doubleclick"]', 'iframe[src*="googlesyndication"]',
    '.sponsored', '.promoted', '.taboola', '.outbrain'
  ];

  const hideAds = root => {
    if (!root || !root.querySelectorAll) return;
    root.querySelectorAll(selectors.join(',')).forEach(node => {
      if (node.dataset.bwindAdHidden === '1') return;
      node.dataset.bwindAdHidden = '1';
      node.style.setProperty('display', 'none', 'important');
      node.style.setProperty('visibility', 'hidden', 'important');
    });
  };

  const start = () => {
    hideAds(document);
    new MutationObserver(records => {
      records.forEach(record => record.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches && node.matches(selectors.join(','))) {
            node.style.setProperty('display', 'none', 'important');
          }
          hideAds(node);
        }
      }));
    }).observe(document.documentElement, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
