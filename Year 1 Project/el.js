const todoInput = document.getElementById('todo-input');
        const addBtn = document.getElementById('add-btn');
        const todoList = document.getElementById('todo-list');
        const filterBtns = document.querySelectorAll('.filter-btn');

        // Load tasks from local storage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // Function to render tasks
        function renderTasks(filter = 'all') {
            todoList.innerHTML = '';
            const filteredTasks = tasks.filter(task => {
                if (filter === 'completed') return task.completed;
                if (filter === 'pending') return !task.completed;
                return true;
            });

            filteredTasks.forEach(task => {
                const li = document.createElement('li');
                li.className = 'todo-item';
                li.innerHTML = `
                    <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                    <div>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                `;

                // Toggle completion
                li.querySelector('span').addEventListener('click', () => {
                    task.completed = !task.completed;
                    saveTasks();
                    renderTasks(filter);
                });

                // Edit task
                li.querySelector('.edit-btn').addEventListener('click', () => {
                    const newTask = prompt('Edit your task:', task.text);
                    if (newTask !== null && newTask.trim() !== '') {
                        task.text = newTask.trim();
                        saveTasks();
                        renderTasks(filter);
                    }
                });

                // Delete task
                li.querySelector('.delete-btn').addEventListener('click', () => {
                    tasks = tasks.filter(t => t !== task);
                    saveTasks();
                    renderTasks(filter);
                });

                todoList.appendChild(li);
            });
        }

        // Save tasks to local storage
        function saveTasks() {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }

        // Add task to the list
        addBtn.addEventListener('click', () => {
            const taskText = todoInput.value.trim();
            if (taskText === '') {
                alert('Please enter a task!');
                return;
            }

            tasks.push({ text: taskText, completed: false });
            saveTasks();
            renderTasks();
            todoInput.value = '';
        });

        // Filter tasks
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                renderTasks(filter);
            });
        });

        // Initial render
        renderTasks();