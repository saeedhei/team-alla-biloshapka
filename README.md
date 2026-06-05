# Next.js Authentication System and Interactive Coding Scene

This project is a modern Next.js application built with a focus on clean architecture, API-first authentication, and interactive frontend presentation.

The project combines two main directions:

- a scalable authentication foundation using Next.js and CouchDB;
- an animated coding scene that demonstrates how a UI can evolve from a simple Junior-level implementation to a more polished Senior-level result.

The application is developed step by step through feature branches and pull requests.

---

## Project Purpose

The main goal of this project is to build a practical, portfolio-ready Next.js application that demonstrates both backend architecture and frontend presentation skills.

The project focuses on:

- API-first authentication;
- secure user registration and login;
- CouchDB integration;
- local development with Docker;
- email testing with MailDev;
- protected routes;
- reusable component architecture;
- animated frontend logic;
- visual storytelling through code-driven UI changes.

The application is designed in a way that can later support both web and mobile clients.

---

## Current Status

The project is currently in the foundation and interactive UI development stage.

Already implemented:

- CouchDB setup with Docker;
- basic project structure;
- user registration;
- password hashing;
- login endpoint;
- JWT-based authentication;
- protected dashboard route;
- local email testing;
- base frontend layout;
- interactive typing animation;
- animated About section with Junior, Middle, and Senior visual stages.

---

## Tech Stack

### Frontend

- Next.js 15+
- React
- TypeScript
- Tailwind CSS
- Next.js App Router

### Backend

- Next.js API routes
- CouchDB
- nano CouchDB client
- JWT authentication
- bcrypt password hashing
- middleware-based route protection

### Email and Local Development

- Nodemailer
- MailDev
- Docker
- Docker Compose
- pnpm

---

## Main Features

### Authentication Foundation

The project includes a basic authentication system built with Next.js API routes.

Implemented functionality:

- user registration;
- secure password hashing with bcrypt;
- user storage in CouchDB;
- login endpoint;
- JWT token generation;
- HTTP-only cookie support;
- protected dashboard route;
- middleware-based route guard.

The authentication logic is prepared as an API-first foundation, which makes it easier to extend the project for mobile clients or other frontend applications in the future.

---

### CouchDB Integration

CouchDB is used as the database layer.

Implemented functionality:

- CouchDB runs locally through Docker;
- the app connects to CouchDB using the nano client;
- user documents are stored in the database;
- environment variables are used for database credentials;
- Docker configuration keeps local setup predictable and repeatable.

---

### Email Testing with MailDev

Local email testing was added to support the registration flow.

Implemented functionality:

- MailDev local SMTP server;
- Nodemailer transporter configuration;
- email sending after user registration;
- successful testing of the local email flow.

This makes it possible to test emails during development without sending real emails to users.

---

### Protected Dashboard

The project includes a protected dashboard page.

Implemented functionality:

- `/dashboard` route;
- middleware check before access;
- JWT verification;
- redirect or access blocking when the user is not authenticated.

This prepares the project for future private user areas.

---

### Interactive Coding Scene

The project includes an animated frontend scene where code is typed on the left side and the UI preview updates on the right side.

Implemented functionality:

- split-screen layout;
- fake code editor panel;
- character-by-character typing animation;
- deleting animation;
- blinking cursor;
- cinematic pauses;
- visual updates synchronized with code changes.

The purpose of this feature is to create a live coding showcase where the user can visually understand how code changes affect the UI.

---

### Animated About Section

The Home page includes an animated About section that demonstrates a Junior → Middle → Senior progression.

The left side shows animated code changes.

The right side shows the visual result of those changes.

Implemented functionality:

- animated About section layout;
- two-column scene structure;
- code panel on the left;
- visual preview on the right;
- Junior, Middle, and Senior stages;
- stage-based UI updates;
- syntax highlighting in the code panel;
- animated photo behavior;
- photo size transition;
- button alignment transition;
- Senior background image;
- animated Senior background effects.

---

## Junior, Middle and Senior Progression

The animated About section shows how the same UI can improve step by step.

### Junior Stage

The Junior stage shows a simple version of the section.

It focuses on basic structure and minimal styling.

### Middle Stage

The Middle stage improves the layout and presentation.

It adds:

- better spacing;
- improved visual structure;
- photo-based layout;
- stronger button styling;
- more polished section design.

### Senior Stage

The Senior stage presents the final premium version of the section.

It adds:

- dark premium background;
- animated glow effects;
- stronger visual hierarchy;
- cleaner final composition;
- more cinematic presentation.

This progression makes the section useful not only as a UI element, but also as a visual explanation of frontend improvement.

---

## Project Architecture

The project follows a component-based structure.

```txt
my-app/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── login/
│   │       │   └── route.ts
│   │       └── register/
│   │           └── route.ts
│   │
│   ├── dashboard/
│   │   └── page.tsx
│   │
│   ├── home/
│   │   ├── page.tsx
│   │   ├── HomeScene.tsx
│   │   ├── CodePanel.tsx
│   │   └── VisualPanel.tsx
│   │
│   ├── register/
│   │   └── page.tsx
│   │
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── RegisterPanel.tsx
│
├── lib/
│   └── couchdb.ts
│
├── public/
│   └── photo.jpg
│
├── middleware.ts
├── docker-compose.yml
├── package.json
├── README.md
└── tsconfig.json
```

---

## Refactoring and Code Quality

Several refactoring steps were completed to keep the project easier to read, maintain, and extend.

Completed refactoring:

- extracted code panel data;
- extracted animation helper logic;
- extracted reusable code panel components;
- separated Senior background effects;
- separated About photo logic;
- removed unused animation files;
- removed unused visual code;
- removed unused image assets;
- added short comments for staged visual logic.

Reusable extracted components include:

- `AnimatedClassName`
- `CodePanelHeader`
- `CodeClassName`
- `CodeElementLine`
- `CodeImageLine`

These changes make the animation system cleaner and reduce the amount of logic inside one large component.

---

## Development Progress

The project was developed through several feature branches.

Completed development steps:

1. Initial CouchDB setup with Docker.
2. Basic project structure.
3. MailDev and Nodemailer integration.
4. Interactive Tailwind typing animation.
5. Base Home scene architecture.
6. Animated About section.
7. Junior, Middle, and Senior visual stages.
8. Code-driven visual updates.
9. Photo-based About section layout.
10. Senior background effects.
11. Refactoring of animation and visual components.

---

## Testing

The project was tested locally during development.

Checked functionality:

- CouchDB starts correctly with Docker;
- the app connects to CouchDB;
- registration endpoint works;
- passwords are hashed;
- login endpoint works;
- JWT token is generated;
- protected dashboard route is guarded by middleware;
- MailDev receives local test emails;
- typing animation works in the browser;
- visual preview updates according to the code animation;
- Junior, Middle, and Senior stages work correctly;
- Senior background appears at the correct stage;
- refactored components continue to work after file splitting.

---

## Local Setup

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Open the project folder

```bash
cd my-app
```

### 3. Install dependencies

```bash
pnpm install
```

### 4. Create environment file

Create a `.env.local` file in the root of the project.

Example:

```env
COUCHDB_USER=admin
COUCHDB_PASSWORD=password
JWT_SECRET=your-secret-key
```

The real values should not be committed to GitHub.

### 5. Start CouchDB

```bash
docker-compose up -d
```

### 6. Run the development server

```bash
pnpm dev
```

### 7. Open the app in the browser

```txt
http://localhost:3000
```

---

## Docker Configuration

The project uses Docker for local CouchDB setup.

Example configuration:

```yaml
services:
  couchdb:
    container_name: next-couchdb
    image: couchdb:3.4.2
    environment:
      - COUCHDB_USER=${COUCHDB_USER}
      - COUCHDB_PASSWORD=${COUCHDB_PASSWORD}
    ports:
      - "5984:5984"
    volumes:
      - couchdb_data:/opt/couchdb/data
    restart: always

volumes:
  couchdb_data:
```

---

## Available Scripts

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Start Docker services:

```bash
docker-compose up -d
```

Stop Docker services:

```bash
docker-compose down
```

---

## Roadmap

### Advanced Authentication

Planned improvements:

- add short-lived access tokens;
- add long-lived refresh tokens;
- add refresh token rotation;
- add `/api/auth/refresh` endpoint;
- create a sessions collection in CouchDB;
- track active user sessions;
- support one refresh token per device;
- add device-aware logout;
- add the ability to revoke specific sessions.

### Mobile-Ready API Support

Planned improvements:

- add Bearer Token support;
- prepare authentication flow for mobile clients;
- separate browser cookie flow from mobile token flow.

### Frontend Improvements

Planned improvements:

- improve animation timing;
- polish the final Senior stage;
- improve responsive behavior;
- continue reducing duplicated code;
- keep visual changes synchronized with code animation.

---

## What This Project Demonstrates

This project demonstrates practical experience with:

- Next.js App Router;
- TypeScript;
- API routes;
- middleware;
- authentication flow;
- JWT handling;
- password hashing;
- CouchDB integration;
- Docker-based local development;
- email testing with MailDev;
- component-based frontend architecture;
- Tailwind CSS;
- animated UI logic;
- refactoring;
- pull request based development.

---

## Summary

This project started as a Next.js authentication system and grew into a broader full-stack learning project.

It now includes both backend foundation and frontend visual storytelling.

The backend part demonstrates API-first authentication with CouchDB.

The frontend part demonstrates an interactive coding scene where the UI improves step by step from Junior to Middle to Senior level.

The project is still in active development and will continue to grow toward a more complete authentication architecture and a more polished portfolio presentation.