// Mengambil elemen-elemen DOM
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const greetingEl = document.getElementById('greeting');
const themeToggleBtn = document.getElementById('theme-toggle');

// --- 1. CLOCK & GREETING ---
function updateClock() {
    const now = new Date();
    timeEl.textContent = now.toLocaleTimeString('en-US', { hour12: false });
    dateEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    
    const hour = now.getHours();
    if (hour < 12) greetingEl.textContent = 'Good Morning';
    else if (hour < 18) greetingEl.textContent = 'Good Afternoon';
    else greetingEl.textContent = 'Good Evening';
}
setInterval(updateClock, 1000);
updateClock();

// --- 2. LIGHT / DARK MODE (Challenge 1) ---
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') document.body.classList.add('dark-mode');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggleBtn.textContent = isDark ? '☀️ Toggle Light Mode' : '🌙 Toggle Dark Mode';
});

// --- 3. FOCUS TIMER ---
let timerInterval;
let timeLeft = 25 * 60; // 25 Menit
let isRunning = false;
const timerDisplay = document.getElementById('timer-display');

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

document.getElementById('start-timer').addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateTimerDisplay();
        } else {
            clearInterval(timerInterval);
            isRunning = false;
            alert("Focus session complete! Take a break.");
        }
    }, 1000);
});

document.getElementById('stop-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 25 * 60;
    updateTimerDisplay();
});
updateTimerDisplay();

// --- 4. TO-DO LIST ---
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = task.text;
        if (task.done) span.classList.add('task-done');
        
        const actions = document.createElement('div');
        actions.className = 'task-actions';
        
        const doneBtn = document.createElement('button');
        doneBtn.textContent = '✔';
        doneBtn.className = 'btn-done';
        doneBtn.onclick = () => { tasks[index].done = !tasks[index].done; saveTasks(); renderTasks(); };
        
        const editBtn = document.createElement('button');
        editBtn.textContent = '✎';
        editBtn.className = 'btn-edit';
        editBtn.onclick = () => editTask(index);
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.className = 'btn-delete';
        deleteBtn.onclick = () => { tasks.splice(index, 1); saveTasks(); renderTasks(); };
        
        actions.append(doneBtn, editBtn, deleteBtn);
        li.append(span, actions);
        taskList.appendChild(li);
    });
}

document.getElementById('add-task-btn').addEventListener('click', () => {
    const text = taskInput.value.trim();
    if (!text) return;
    
    // Tantangan 4: Prevent duplicate tasks
    if (tasks.some(t => t.text.toLowerCase() === text.toLowerCase())) {
        alert('Task already exists!');
        return;
    }
    
    tasks.push({ text, done: false });
    saveTasks();
    renderTasks();
    taskInput.value = '';
});

function editTask(index) {
    const newText = prompt('Edit task:', tasks[index].text);
    if (newText && newText.trim() !== '') {
         if (tasks.some((t, i) => i !== index && t.text.toLowerCase() === newText.trim().toLowerCase())) {
             alert('Task already exists!');
             return;
         }
         tasks[index].text = newText.trim();
         saveTasks();
         renderTasks();
    }
}

// Tantangan 5: Sort Tasks (A-Z)
document.getElementById('sort-tasks-btn').addEventListener('click', () => {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    saveTasks();
    renderTasks();
});
renderTasks();

// --- 5. QUICK LINKS ---
let links = JSON.parse(localStorage.getItem('links')) || [];
const linkNameInput = document.getElementById('link-name');
const linkUrlInput = document.getElementById('link-url');
const linksContainer = document.getElementById('links-container');

function saveLinks() {
    localStorage.setItem('links', JSON.stringify(links));
}

function renderLinks() {
    linksContainer.innerHTML = '';
    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.className = 'link-item';
        a.target = '_blank';
        linksContainer.appendChild(a);
    });
}

document.getElementById('add-link-btn').addEventListener('click', () => {
    const name = linkNameInput.value.trim();
    let url = linkUrlInput.value.trim();
    if (!name || !url) return;
    
    // Tambahkan https:// jika belum ada
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }
    
    links.push({ name, url });
    saveLinks();
    renderLinks();
    linkNameInput.value = '';
    linkUrlInput.value = '';
});
renderLinks();