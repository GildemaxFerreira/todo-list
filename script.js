document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    // Função para adicionar uma nova tarefa
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Por favor, digite uma tarefa!');
            return;
        }

        const li = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const completeButton = document.createElement('button');
        completeButton.textContent = '✔️';
        completeButton.className = 'complete-btn';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Evento para marcar a tarefa como concluída
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Evento para remover a tarefa
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        // Adiciona os botões e o texto na lista
        actionsDiv.appendChild(completeButton);
        actionsDiv.appendChild(deleteButton);
        li.appendChild(taskSpan);
        li.appendChild(actionsDiv);

        taskList.appendChild(li);

        // Limpa o campo de entrada
        taskInput.value = '';
    }

    // Adicionar tarefa ao clicar no botão
    addButton.addEventListener('click', addTask);

    // Adicionar tarefa ao pressionar a tecla "Enter" no campo de entrada
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});