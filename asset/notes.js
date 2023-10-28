document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const progressPercent = document.getElementById("progressPercent");

  const linkInput = document.getElementById("linkInput");
  const addLinkButton = document.getElementById("addLink");
  const linkList = document.getElementById("linkList");
  function updateProgress() {
    const totalTasks = taskList.querySelectorAll("li").length;
    const completedTasks = taskList.querySelectorAll("input[type='checkbox']:checked").length;
    const percent = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    progressPercent.textContent = percent.toFixed(2) + "%"; // Отображаем прогресс в процентах
  }
  // Функция для добавления новой задачи
  function addNewTask() {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") {
      const li = document.createElement("li");
      li.innerHTML = `
        <input type="checkbox" class="checkbox" />
        ${taskText}
        <button class="deleteTask button-delete">X</button>
        <div class="task-progress"></div>
      `;
      taskList.appendChild(li);
      taskInput.value = ""; // Очищаем поле ввода
      updateProgress(); // Обновляем прогресс после добавления задачи
    }
  }

  // Функция для добавления новой ссылки
  function addNewLink() {
    const linkText = linkInput.value;
    if (linkText.trim() !== "") {
      const linkItem = document.createElement("div");
      linkItem.innerHTML = `<p><a href="${linkText}" target="_blank">${linkText}</a></p>`;
      linkList.appendChild(linkItem);
      linkInput.value = ""; // Очищаем поле ввода
    }
  }

  // Обработчик нажатия на кнопку "Добавить" для задач
  addTaskButton.addEventListener("click", addNewTask);

  // Обработчик нажатия на Enter в поле ввода для задач
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addNewTask();
    }
  });

  // Обработчик нажатия на кнопку "Добавить" для ссылок
  addLinkButton.addEventListener("click", addNewLink);

  // Обработчик нажатия на Enter в поле ввода для ссылок
  linkInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addNewLink();
    }
  });

  // Обработчик для отметки задачи как выполненной и удаления задачи
  taskList.addEventListener("click", function (event) {
    if (event.target.type === "checkbox") {
      const listItem = event.target.parentElement;
      const progress = listItem.querySelector(".task-progress");
      if (event.target.checked) {
        listItem.style.textDecoration = "line-through";
        progress.style.backgroundColor = "green";
        progress.style.width = "100%";
      } else {
        listItem.style.textDecoration = "none";
        progress.style.backgroundColor = "red";
        progress.style.width = "0%";
      }
      updateProgress(); // Обновляем прогресс после изменения состояния задачи
    } else if (event.target.classList.contains("deleteTask")) {
      event.target.parentElement.remove();
      updateProgress(); // Обновляем прогресс после удаления задачи
    }
  });
});
const switcher = document.getElementById("Switcher");
const body = document.body;

switcher.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
});
