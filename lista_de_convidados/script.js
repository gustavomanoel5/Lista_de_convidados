const addTaskButton = document.getElementById('addTask');
const dltAllTaskButton = document.getElementById('dltAllTask');
const addTaskInput = document.getElementById('taskInput');
const addTaskList = document.getElementById('taskList');
addTaskButton.style.backgroundColor = 'green';
addTaskButton.style.borderRadius = '10px';

//Envento de click no botão "Enter"
addTaskInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        main();
    }
});


//Envento de clici no mouse 
dltAllTaskButton.addEventListener('click', function () {
    const tasks = addTaskList.querySelectorAll('li');
    tasks.forEach(function (task) {
        addTaskList.removeChild(task);
    });
});

function validarNomePróprio(nome) {
    const nomeProprio = /^[A-Za-zÀ-ÖØ-öø-ÿ\s']+$/;
    return nomeProprio.test(nome);
}

//Função principal
function main() {
    const addTaskText = addTaskInput.value.trim();
    if (addTaskText === '' || !validarNomePróprio(addTaskText)) {
        alert('Verifique as informações do convidado, o valor inserido não é válido');
    }
    else {
        addTaskButton.textContent = 'Tarefa adicionada';
        const li = document.createElement('li');
        const span = document.createElement('span');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        span.textContent = addTaskText;

        const dltTaskButton = document.createElement('button');
        dltTaskButton.textContent = 'Deletar Convidado';
        dltTaskButton.classList.add('delete-buttons');

        dltTaskButton.addEventListener('click', function () {
            addTaskList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(dltTaskButton);
        addTaskList.appendChild(li);
        addTaskInput.value = '';

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';
            } else {
                span.style.textDecoration = 'none';
            }
        });
    }
}

addTaskButton.addEventListener('click', main);