(() => {
  const crm = document.querySelector('.crm'), head = document.querySelector('.crm-head'), grid = document.querySelector('#productsGrid');
  if (!crm || !head) return;
  const role = document.createElement('select'); role.className = 'role-select'; role.innerHTML = '<option value="admin">Администратор · все заявки</option><option value="manager">Менеджер · мои заявки</option>'; head.insertBefore(role, head.querySelector('#newLead'));
  const catalogAdmin = document.createElement('button'); catalogAdmin.className = 'button light'; catalogAdmin.textContent = 'Управление каталогом'; head.insertBefore(catalogAdmin, head.querySelector('#newLead'));
  catalogAdmin.onclick = () => toast('Режим управления каталогом: здесь меняются цены, фото и тексты');
  const addLead = () => { const name = prompt('Имя клиента для демо-заявки', 'Новый клиент'); if (!name) return; const request = prompt('Запрос клиента', 'Расчёт оборудования и монтажа') || 'Новая заявка'; leads.unshift([name, 'Новая компания', request, 'АК', 'Анна Кузнецова', 'Новая', 'new', 'Только что']); leadRender(); toast('Заявка добавлена в CRM и отправлена в Telegram'); };
  document.querySelector('#newLead').onclick = addLead;
  role.onchange = () => { document.querySelectorAll('#leads .tr').forEach((row, i) => row.style.display = role.value === 'manager' && i % 2 ? 'none' : 'grid'); toast(role.value === 'manager' ? 'Показаны заявки текущего менеджера' : 'Администратор видит все заявки'); };
  grid.addEventListener('click', event => { const card = event.target.closest('.card'); if (!card || event.target.closest('.add')) return; const p = products[Number(card.querySelector('.add').dataset.add)]; toast(`${p[0]} · ${p[2]} · ${p[4]}`); });
})();
