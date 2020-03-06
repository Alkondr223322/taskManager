let storage = localStorage;
let container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
let list = document.createElement('ul');
container.appendChild(list);
let txt = document.createElement('input');
txt.type = 'text';
document.body.appendChild(txt);
let btn = document.createElement('input');
btn.type = 'button';
btn.value = 'Далее';
document.body.appendChild(btn);
// storage.setItem('tasks', '')
window.onload = function(){
	if(storage.getItem('tasks'))updateList(storage.getItem('tasks'));
	else storage.setItem('tasks', '');
}
btn.onclick = function(){
	createTask();
}
function updateList(s){
	list.innerHTML ='';
	let arrOfTasks = s.split(' ');
	arrOfTasks = arrOfTasks.sort();
	arrOfTasks.shift();
	for(task of arrOfTasks){
		list.innerHTML += `<li> ${task} </li>`;
	}
}
document.addEventListener('keydown', function(e){
	 if(e.which==13) createTask();
});
function createTask(){
	let task = txt.value;
	if(task.length==0) return; 
	txt.value = '';
	storage.setItem('tasks', storage.getItem('tasks')+ `${task} `);
	// console.log(storage.getItem('tasks'));
	updateList(storage.getItem('tasks'));
}