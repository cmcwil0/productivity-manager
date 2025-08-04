let priority = '!'; // defaults at low

const priorityButton = document.querySelector('.priorityButton');

function updatePriorityButton() {
    if(priority.length < 3) {
        priorityButton.textContent = priorityButton.textContent + '!';
        priority = priorityButton.textContent;
    } else {
        priorityButton.textContent = '!';
        priority = priorityButton.textContent;
    }
}

priorityButton.addEventListener('click', updatePriorityButton); //updates button and priority on click

const createTaskButton = document.querySelector('.createTaskButton');

function createTask() {
    const taskInput = document.querySelector('.taskInput');
    const list = document.querySelector('.todo-list');
    const newElement = document.createElement('li');
    newElement.textContent = taskInput.value + ' ' + priority;
    list.appendChild(newElement);
    
}

createTaskButton.addEventListener('click', createTask);
