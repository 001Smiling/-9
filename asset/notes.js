document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const taskList = document.getElementById('taskList');
    
    const linkInput = document.getElementById('linkInput');
    const addLinkButton = document.getElementById('addLink');
    const linkList = document.getElementById('linkList');
    
    // Функция для добавления новой задачи
    function addNewTask() {
        const taskText = taskInput.value;
        if (taskText.trim() !== '') {
            const li = document.createElement('li');
            li.innerHTML = `<input type="checkbox"> ${taskText} <button class="deleteTask">Удалить</button>`;
            taskList.appendChild(li);
            taskInput.value = ''; // Очищаем поле ввода
        }
    }
    
    // Функция для добавления новой ссылки
    function addNewLink() {
        const linkText = linkInput.value;
        if (linkText.trim() !== '') {
            const linkItem = document.createElement('div');
            linkItem.innerHTML = `<p><a href="${linkText}" target="_blank">${linkText}</a></p>`;
            linkList.appendChild(linkItem);
            linkInput.value = ''; // Очищаем поле ввода
        }
    }
    
    // Обработчик нажатия на кнопку "Добавить" для задач
    addTaskButton.addEventListener('click', addNewTask);
    
    // Обработчик нажатия на Enter в поле ввода для задач
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addNewTask();
        }
    });
    
    // Обработчик нажатия на кнопку "Добавить" для ссылок
    addLinkButton.addEventListener('click', addNewLink);
    
    // Обработчик нажатия на Enter в поле ввода для ссылок
    linkInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addNewLink();
        }
    });
    
    // Обработчик для отметки задачи как выполненной и удаления задачи
    taskList.addEventListener('click', function (event) {
        if (event.target.type === 'checkbox') {
            const listItem = event.target.parentElement;
            if (event.target.checked) {
                listItem.style.textDecoration = 'line-through';
            } else {
                listItem.style.textDecoration = 'none';
            }
        } else if (event.target.classList.contains('deleteTask')) {
            event.target.parentElement.remove();
        }
    });
});
