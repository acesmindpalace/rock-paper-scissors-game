# 🪨📝✂️ Rock, Paper, Scissors Game

This is a **RESTful API-based** Rock, Paper, Scissors game built with **Laravel (PHP)** for the backend and **React (Vite)** for the frontend. The game runs for **10 rounds**, and Player 1 selects moves randomly, while Player 2 selects moves manually from the UI.

## 🚀 Features
- 🏆 Play **10 rounds** of Rock, Paper, Scissors.
- 🔀 **Player 1 (Backend)** selects moves randomly.
- 🎮 **Player 2 (Frontend)** selects moves manually.
- 📊 **Game Summary**: Wins, ties, and win percentages.
- 🛠️ **Easily Expandable**: Add new moves (Lizard, Spock, etc.).
- 🐳 **Docker Support**: Easily run in a containerized environment.

---

## 🛠️ Setup Instructions

### 🔹 **Prerequisites**
Ensure you have the following installed:
- [Docker](https://www.docker.com/get-started)
- [Node.js (LTS)](https://nodejs.org/en/)
- [Composer](https://getcomposer.org/download/)

---

### 🏠 **Step 1: Clone the Repository**
```sh
git clone https://github.com/acesmindpalaace/rock-paper-scissors-game.git
cd rock-paper-scissors-game
```

---

### 🖥 **Step 2: Backend (Laravel API) Setup**
#### ✅ Run Laravel in Docker
```sh
cd backend
docker-compose up --build
```
This will:
- Start a Laravel API server on **`http://localhost:8000`**.
- Enable CORS for frontend access.

#### ✅ Install Laravel Dependencies (If Not Using Docker)
```sh
composer install
php artisan serve
```

---

### 🌐 **Step 3: Frontend (React) Setup**
#### ✅ Run Frontend in Docker
```sh
cd frontend
docker-compose up --build
```
The frontend will be accessible at **`http://localhost:5173`**.

#### ✅ Install & Start Manually (If Not Using Docker)
```sh
cd frontend
npm install
npm run dev
```

---

## 🎮 **How to Play**
1. Open **`http://localhost:5173`** in your browser.
2. **Click a move** (Rock, Paper, Scissors) to play a round.
3. The game will continue for **10 rounds**.
4. After 10 rounds, a **Game Summary** will be displayed.
5. Click **"Play Again"** to reset the game.

---

## 🧪 **Running Tests**
### ✅ **Backend (Laravel) Tests**
Run unit tests for the backend:
```sh
cd backend
php artisan test
```

### ✅ **Frontend (React) Tests**
Run frontend tests with Vitest:
```sh
cd frontend
npm run test
```

---

## ⚡ **API Endpoints**
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/api/moves`    | Get available moves |
| POST   | `/api/play`     | Play a round (Player 1 random, Player 2 chooses) |

---

## 🤖 **Future Enhancements**
- ✅ Add **more moves** (Lizard, Spock).
- ✅ Add **multiplayer support**.
- ✅ Improve **animations & UI**.

---

🚀 **Enjoy Playing Rock, Paper, Scissors!** ✨

