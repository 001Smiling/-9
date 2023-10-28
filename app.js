const searchInput = document.getElementById('input');
const boxes = document.querySelectorAll('.box1');

searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase();

  boxes.forEach(function(box) {
    const boxText = box.textContent.toLowerCase();

    if (boxText.includes(searchText)) {
      box.style.display = 'flex';
    } else {
      box.style.display = 'none';
    }
  });
});

// Получаем элементы
const addBtn = document.getElementById('addBtn');
const blocksContainer = document.getElementById('blocksContainer');

// Обработчик нажатия на кнопку добавления блока
addBtn.addEventListener('click', function() {
  // Создаем элементы блока
  const block = document.createElement('div');
  const input = document.createElement('input');
  const saveBtn = document.createElement('button');

  input.type = 'text';
  saveBtn.textContent = 'Сохранить';

  // Обработчик нажатия на кнопку сохранения
  saveBtn.addEventListener('click', function() {
    // Получаем введенное название
    const name = input.value;

    // Создаем элемент для отображения названия
    const nameText = document.createElement('span');
    nameText.textContent = name;

    // Заменяем инпут на название
    block.replaceChild(nameText, input);
    // Удаляем кнопку сохранения
    block.removeChild(saveBtn);

    // Показываем кнопку добавления блока
    addBtn.style.display = 'block';
  });

  // Добавляем элементы к блоку
  block.appendChild(input);
  block.appendChild(saveBtn);
  
  // Добавляем блок в контейнер
  blocksContainer.appendChild(block);

  // Скрываем кнопку добавления блока
  addBtn.style.display = 'none';
});

// При обновлении страницы проверяем, есть ли сохраненные блоки
if (localStorage.getItem('blocks')) {
  const savedBlocks = JSON.parse(localStorage.getItem('blocks'));

  for (let i = 0; i < savedBlocks.length; i++) {
    const savedBlock = savedBlocks[i];

    // Создаем элементы блока
    const block = document.createElement('div');
    const nameText = document.createElement('span');
    const deleteBtn = document.createElement('button');
    
    nameText.textContent = savedBlock;
    deleteBtn.textContent = 'Удалить';

    // Обработчик нажатия на кнопку удаления
    deleteBtn.addEventListener('click', function() {
      // Удаляем блок из контейнера
      blocksContainer.removeChild(block);
      
      // Сохраняем обновленное состояние блоков
      const blocks = Array.from(blocksContainer.children).map(function(el) {
        return el.querySelector('span').textContent;
      });
      localStorage.setItem('blocks', JSON.stringify(blocks));
    });

    // Добавляем элементы к блоку
    block.appendChild(nameText);
    block.appendChild(deleteBtn);

    // Добавляем блок в контейнер
    blocksContainer.appendChild(block);
  }
}

// При обновлении страницы сохраняем состояние блоков
window.addEventListener('beforeunload', function() {
  const blocks = Array.from(blocksContainer.children).map(function(el) {
    return el.querySelector('span').textContent;
  });

  localStorage.setItem('blocks', JSON.stringify(blocks));
});


