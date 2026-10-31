(() => {
  const grid = document.querySelector('#productsGrid'), catalog = document.querySelector('.catalog');
  if (!grid || !catalog) return;
  const proof = document.createElement('div'); proof.className = 'catalog-proof'; proof.innerHTML = '<div class="proof-item"><b>✓</b><span>Подбор по параметрам</span></div><div class="proof-item"><b>↗</b><span>Комплектация под проект</span></div><div class="proof-item"><b>24</b><span>Часа на первичный расчёт</span></div>';
  const toolbar = catalog.querySelector('.toolbar'); toolbar.after(proof);
  const cta = document.createElement('div'); cta.className = 'catalog-cta'; cta.innerHTML = '<div><strong>Не нашли нужную позицию?</strong><span>Отправьте задачу инженеру, подберём комплект оборудования под объект</span></div><button type="button">Запросить подбор →</button>'; grid.after(cta);
  cta.querySelector('button').onclick = () => document.querySelector('#request')?.scrollIntoView({behavior:'smooth'});
  const specs = {Вентиляция:['до 4 000 м³/ч','подбор по проекту'],Отопление:['12–48 кВт','склад / цех / входная группа'],Автоматика:['220 / 380 В','готовый шкаф управления'],Монтаж:['выезд инженера','смета после осмотра']};
  const decorate = () => grid.querySelectorAll('.card').forEach(card => { if(card.dataset.decorated) return; card.dataset.decorated='1'; const cat=card.querySelector('.cat')?.textContent.trim(); const meta=document.createElement('div'); meta.className='card-meta'; (specs[cat]||['по задаче','уточнить у менеджера']).forEach(x=>{const s=document.createElement('span');s.textContent=x;meta.append(s)}); const bottom=card.querySelector('.bottom'); const add=bottom?.querySelector('.add'); if(bottom&&add){const actions=document.createElement('div');actions.className='card-actions';const quote=document.createElement('button');quote.className='quote-btn';quote.textContent='В заявку';quote.onclick=()=>add.click();actions.append(quote,add);bottom.replaceWith(actions)} card.querySelector('.name')?.after(meta); });
  decorate(); new MutationObserver(decorate).observe(grid,{childList:true});
})();
