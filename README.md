# 📝 React + TypeScript To-Do List

A simple **To-Do List application** built with **React, TypeScript, and Vite**.  
It fetches initial to-dos from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos),  
allows adding, completing, and deleting tasks, and persists data in **localStorage**.

---

## 🚀 Features

✅ Fetches **20 initial to-dos** from JSONPlaceholder API  
✅ **Add new to-dos** (stored locally)  
✅ **Mark to-dos as completed** or pending  
✅ **Delete to-dos** from the list  
✅ **Filter to-dos** (All | Completed | Pending)  
✅ **Local storage support** (persists changes on reload)  

---

## 🛠️ Tech Stack

- **React** (UI Framework)
- **TypeScript** (Type safety)
- **Vite** (Faster builds)
- **CSS / Bootstrap** (Styling)
- **localStorage** (Data persistence)
- **JSONPlaceholder API** (Mock to-dos)

---

## 📂 Project Structure

```
/todo-app
 ├── /src
 │   ├── /components
 │   │   ├── TodoList.tsx
 │   │   ├── TodoForm.tsx
 │   │   ├── TodoFilter.tsx
 │   ├── /types
 │   │   ├── type.ts
 │   ├── /utils
 │   │   ├── localStorage.ts
 │   ├── App.tsx
 |   ├── App.css
 │   ├── main.tsx
 │   ├── index.css
 ├── /public
 ├── package.json
 ├── tsconfig.json
 ├── vite.config.ts
```

---

## 📺 Installation & Setup

### 🔧 Prerequisites
Make sure you have **Node.js** installed. If not, download it from [nodejs.org](https://nodejs.org/).

### 💻 Clone the Repository
```sh
git clone https://github.com/Qurat238/todoListApplication.git
cd todoListApplication
```

### 📌 Install Dependencies
```sh
npm install
```

### 🚀 Run the App
```sh
npm run dev
```
Now open **http://localhost:5173** in your browser.

---

## 📌 Usage

1️⃣ **View To-Dos** → Initial 20 tasks fetched from API  
2️⃣ **Add To-Do** → Type in the input field and press "Add"  
3️⃣ **Complete To-Do** → Click the checkbox  
4️⃣ **Delete To-Do** → Click the delete button  
5️⃣ **Filter To-Dos** → Choose "All", "Completed", or "Pending"

---

## 🎯 Future Improvements

- ✅ Drag & drop reordering  
- ✅ Dark mode  
- ✅ Better UI with animations  

---

## 📝 License
This project is open-source under the **MIT License**.

---

### 💬 **Need Help?**
If you find an issue, please [open an issue](https://github.com/Qurat238/todoListApplication/issues) or create a pull request.

---

🔗 **GitHub Repository:** [https://github.com/Qurat238/todoListApplication](https://github.com/Qurat238/todoListApplication)

