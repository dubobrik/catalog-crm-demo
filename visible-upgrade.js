(() => {
  const header = document.querySelector('header');
  if (!header) return;
  const ribbon = document.createElement('div'); ribbon.className = 'demo-ribbon'; ribbon.innerHTML = '<span>ДЕМО-ПРОТОТИП ДЛЯ ОТДЕЛА ПРОДАЖ</span><span>Каталог · заявки · CRM · Telegram</span>'; header.after(ribbon);
  const hero = document.querySelector('.hero > div');
  if (hero) { const label = document.createElement('span'); label.className = 'demo-label'; label.textContent = 'СИСТЕМА В ОДНОМ ОКНЕ'; hero.prepend(label); const link = document.createElement('a'); link.className = 'hero-crm-link'; link.href = '#crm'; link.dataset.view = 'crm'; link.textContent = 'Показать CRM →'; hero.querySelector('.button')?.after(link); link.onclick = e => { e.preventDefault(); document.querySelectorAll('main>section').forEach(s => s.hidden = s.id !== 'crm'); document.querySelector('#crm').hidden = false; window.scrollTo(0,0); }; }
  const catalog = document.querySelector('.catalog'); if (catalog) { const flow = document.createElement('div'); flow.className = 'demo-flow'; flow.innerHTML = '<div>01 Каталог</div><b>→</b><div>02 Заявка</div><b>→</b><div>03 CRM</div><b>→</b><div>04 Telegram</div>'; catalog.before(flow); }
})();
