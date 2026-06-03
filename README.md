# Life Dashboard - To-Do List Application

## 🎯 Overview
A modern, responsive Life Dashboard application featuring a to-do list with local storage functionality, Pomodoro timer, dark mode, and quick links management.

## 🚀 Live Demo
**[Open Life Dashboard](https://infuswater12-debug.github.io/annisa-azzahra/)**

## 📋 Features

### 1. **To-Do List with Local Storage**
- ✅ Add, edit, delete, and complete tasks
- 🔒 Automatic local storage persistence
- 🔄 Sort tasks alphabetically (A-Z)
- 🚫 Prevent duplicate tasks
- 💾 Data persists across sessions

### 2. **Pomodoro Timer**
- ⏱️ 25-minute focus sessions
- ▶️ Start/Stop/Reset controls
- 📢 Completion notification

### 3. **Dark Mode**
- 🌙 Toggle between light and dark themes
- 💾 Theme preference saved in local storage
- 🎨 Smooth color transitions

### 4. **Quick Links**
- 🔗 Add and manage favorite links
- 📋 Store links locally
- 🌐 Quick access to frequently used URLs

### 5. **Real-time Clock & Greeting**
- ⏰ Live clock with HH:MM:SS format
- 📅 Current date display
- 👋 Dynamic greeting (Good Morning/Afternoon/Evening)

## 📦 File Structure
```
annisa-azzahra/
├── index.html      # Main HTML file
├── style.css       # Styling (Light/Dark mode)
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## 🛠️ Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Responsive design with CSS variables
- **JavaScript (ES6+)** - DOM manipulation & local storage
- **Local Storage API** - Data persistence

## 📱 Responsive Design
- ✨ Mobile-friendly (Grid: 2 columns → 1 column on mobile)
- 🖥️ Desktop optimized
- 📐 Max-width: 1000px

## 🎨 Color Scheme

### Light Mode
- Background: `#f4f4f9`
- Cards: `#ffffff`
- Primary: `#6c5ce7` (Purple)
- Success: `#00b894` (Green)
- Danger: `#ff7675` (Red)

### Dark Mode
- Background: `#1a1a2e`
- Cards: `#16213e`
- Primary: `#0f3460` (Dark Blue)
- Primary Hover: `#e94560` (Red)

## 🗂️ Local Storage Keys
```javascript
localStorage.getItem('tasks')    // Stores to-do tasks
localStorage.getItem('links')    // Stores quick links
localStorage.getItem('theme')    // Stores theme preference
```

## 💻 How to Use

### Add a Task
1. Type task name in the input field
2. Click "Add" button
3. Task automatically saves to local storage

### Manage Tasks
- **✔️ Complete** - Mark task as done
- **✎ Edit** - Update task text
- **✖️ Delete** - Remove task
- **Sort A-Z** - Alphabetize all tasks

### Use Timer
1. Click "Start" to begin 25-minute session
2. Click "Stop" to pause
3. Click "Reset" to restart timer

### Toggle Theme
- Click the 🌙/☀️ button to switch between light/dark mode

### Add Quick Links
1. Enter link name and URL
2. Click "Add Link"
3. Links open in new tab

## 🔒 Data Persistence
All data is stored in browser's **localStorage**:
- Tasks persist across page refreshes
- Theme preference is remembered
- Links are saved permanently (until cleared)

## 🌐 Browser Compatibility
- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers

## 📝 Task Object Structure
```javascript
{
  text: "Task description",
  done: false  // true if completed
}
```

## 🔗 Link Object Structure
```javascript
{
  name: "Google",
  url: "https://google.com"
}
```

## 🎯 Features in Detail

### Local Storage Functionality
```javascript
// Save tasks
localStorage.setItem('tasks', JSON.stringify(tasks));

// Load tasks on page load
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Clear data (manual)
localStorage.clear();
```

### Add Task with Validation
```javascript
// Prevent empty tasks
if (!text) return;

// Prevent duplicates (case-insensitive)
if (tasks.some(t => t.text.toLowerCase() === text.toLowerCase())) {
    alert('Task already exists!');
    return;
}

// Add to array and save
tasks.push({ text, done: false });
saveTasks();
```

### Real-time Updates
```javascript
// Updates UI immediately after any change
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        // Create task elements
    });
}
```

## 📊 Performance
- ⚡ Lightweight (~10KB total)
- 🚀 No dependencies
- 💨 Instant local storage operations
- 📈 Optimized for mobile devices

## 🔄 How Local Storage Works

1. **On Page Load**: Retrieves all stored data
   ```javascript
   let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
   ```

2. **On Add/Edit/Delete**: Saves updated data
   ```javascript
   localStorage.setItem('tasks', JSON.stringify(tasks));
   ```

3. **Persistence**: Data remains even after:
   - Page refresh
   - Browser close
   - Device restart (until cache cleared)

4. **Storage Limit**: ~5-10MB per domain

## 🐛 Troubleshooting

### Tasks disappearing?
- Check if localStorage is enabled in browser
- Clear browser cache and try again
- Open DevTools → Storage → Local Storage

### Dark mode not saving?
- Ensure cookies/storage is allowed
- Check browser privacy settings

### Links not working?
- Verify URL format
- Add http:// or https:// prefix

## 📈 Future Enhancements
- ☁️ Cloud synchronization
- 📊 Task statistics
- 🔔 Notifications
- 🎨 Custom themes
- 📥 Import/Export tasks
- 🏷️ Task categories/tags

## 👨‍💻 Developer Info
**Created by:** infuswater12-debug  
**Repository:** https://github.com/infuswater12-debug/annisa-azzahra  
**Last Updated:** 2026-06-03

## 📄 License
Open source - Feel free to use and modify!

## 🤝 Contributing
Found a bug? Have suggestions? Feel free to create an issue or pull request!

---

**Enjoy your Life Dashboard! Happy organizing! 🚀**