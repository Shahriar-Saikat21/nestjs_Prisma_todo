# 📝 NestJS + Prisma + PostgreSQL Todo App

## 🚀 Project Setup

### Prerequisites
- Node.js (v18+ recommended)
- Docker (optional, for PostgreSQL setup)
- npm or yarn

### 🛠️ Installation

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd nestjs-prisma-todo
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Setup PostgreSQL database (Docker optional):**
    ```bash
    docker run --name todo-db -e POSTGRES_USER=todo_user -e POSTGRES_PASSWORD=todo_password -e POSTGRES_DB=todo_db -p 5432:5432 -d postgres
    ```

4. **Configure environment variables:**
    Create a `.env` file in the root folder:
    ```env
    DATABASE_URL=postgresql://todo_user:todo_password@localhost:5432/todo_db
    PORT=3000
    ```

5. **Setup Prisma:**
    ```bash
    npx prisma generate
    npx prisma migrate dev --name init
    ```

6. **Run the server:**
    ```bash
    npm run start:dev
    ```

---

## 📌 Useful Commands

### Prisma commands
```bash
npx prisma generate       # Regenerate Prisma client
npx prisma studio         # Launch Prisma Studio GUI
npx prisma migrate dev    # Create new migrations
```

### NestJS commands
```bash
npm run start:dev        # Run development server
npm run build            # Build project
npm run start:prod       # Run production server
```


