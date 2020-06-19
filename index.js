const storage = localStorage;
const containerForTheList = document.querySelector("#container");
const listOfTasks = document.createElement("ul");
containerForTheList.appendChild(listOfTasks);
const txetFieldForTasks = document.createElement("input");
txetFieldForTasks.type = "text";
document.body.appendChild(txetFieldForTasks);
const addTaskButton = document.createElement("input");
addTaskButton.type = "button";
addTaskButton.value = "Далее";
document.body.appendChild(addTaskButton);
// storage.setItem('tasks', '')

function updateList(s) {
  listOfTasks.innerHTML = "";
  let arrayOfTasks = s.split(",NEXTTASK");
  arrayOfTasks = arrayOfTasks.sort();
  arrayOfTasks.shift();
  arrayOfTasks.map((task) => {
    listOfTasks.innerHTML += `<li> ${task} </li>`;
    return 0;
  });
}

function createTask() {
  const task = txetFieldForTasks.value;
  if (task.length === 0) return;
  txetFieldForTasks.value = "";
  storage.setItem("tasks", `${storage.getItem("tasks")}${task},NEXTTASK`);
  updateList(storage.getItem("tasks"));
}

window.onload = function onWindowLoad() {
  if (storage.getItem("tasks")) updateList(storage.getItem("tasks"));
  else storage.setItem("tasks", "");
};
addTaskButton.onclick = function buttonClicked() {
  createTask();
};

document.addEventListener("keydown", function enterKeyPressed(key) {
  if (key.which === 13) createTask();
});
