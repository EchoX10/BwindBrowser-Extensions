(() => {
  const copy = async value => { try { await navigator.clipboard.writeText(value); } catch (_) { const t=document.createElement('textarea');t.value=value;document.body.appendChild(t);t.select();document.execCommand('copy');t.remove(); } };
  const add = () => {
    if (document.getElementById('bwind-tools-toggle')) return;
    const panel=document.createElement('div'); panel.id='bwind-tools-panel';
    const tools=[['Copiar título',()=>copy(document.title)],['Copiar endereço',()=>copy(location.href)],['Copiar seleção',()=>copy(String(getSelection()))]];
    tools.forEach(([label,action])=>{const b=document.createElement('button');b.textContent=label;b.onclick=action;panel.appendChild(b)});
    const toggle=document.createElement('button');toggle.id='bwind-tools-toggle';toggle.textContent='⋮';toggle.onclick=()=>panel.classList.toggle('bwind-open');
    document.body.append(panel,toggle);
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',add,{once:true});else add();
})();
