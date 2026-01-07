# **Personas CRUD - Angular + NestJS**

## 📋 Descripción
Aplicación web full-stack para gestión de personas (CRUD) desarrollada con **Angular 21** en el frontend y **NestJS** en el backend, utilizando **Docker** para la base de datos y despliegue.

## 🚀 Características
- **Frontend**: Angular 21 con Tailwind CSS, componentes standalone
- **Backend**: NestJS con TypeORM, arquitectura modular
- **Base de datos**: PostgreSQL en contenedor Docker
- **CRUD Completo**: Crear, Leer, Actualizar y Eliminar personas
- **Interfaz moderna**: Diseño responsivo con Tailwind CSS
- **API REST**: Endpoints RESTful con validaciones
- **CORS Configurado**: Comunicación segura entre frontend y backend

## 🛠️ Tecnologías
- **Frontend**: Angular 21, TypeScript, Tailwind CSS, RxJS
- **Backend**: NestJS, TypeORM, PostgreSQL
- **Contenedores**: Docker, Docker Compose
- **Herramientas**: Angular CLI, npm

## 📁 Estructura del Proyecto
```
personas-crud/
├── frontend/          # Aplicación Angular
│   ├── src/app/
│   │   ├── components/  # Componentes UI
│   │   ├── services/    # Servicios HTTP
│   │   └── interfaces/  # Interfaces TypeScript
│   └── tailwind.config.js
│
├── backend/           # API NestJS
│   ├── src/
│   │   ├── persons/    # Módulo de personas
│   │   │   ├── dto/    # Data Transfer Objects
│   │   │   ├── entities/# Entidades TypeORM
│   │   │   └── services/# Lógica de negocio
│   └── docker-compose.yml
│
└── README.md
```

## ⚡ Instalación Rápida

### 1. Backend (NestJS)
```bash
cd backend
docker-compose up -d
npm install
npm run start:dev
```

### 2. Frontend (Angular)
```bash
cd frontend
npm install
ng serve
```

## 🌐 Endpoints API
- `GET /persons` - Obtener todas las personas
- `GET /persons/:id` - Obtener persona por ID
- `POST /persons` - Crear nueva persona
- `PUT /persons/:id` - Actualizar persona
- `DELETE /persons/:id` - Eliminar persona

## 🎨 Características del Frontend
- ✅ Componentes standalone de Angular
- ✅ Nueva sintaxis `@if` y `@for` (Angular 17+)
- ✅ Formularios reactivos con validaciones
- ✅ Manejo de errores y loading states
- ✅ Diseño responsivo con Tailwind CSS
- ✅ Navegación con Angular Router

## 🐳 Docker
```yaml
# docker-compose.yml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: personas_db
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
```

## 📸 Capturas de Pantalla
*(Aquí puedes añadir imágenes de tu aplicación)*

## 🧪 Pruebas
```bash
# Backend
npm run test

# Frontend
ng test
```

## 📝 Licencia
MIT

## ✨ Autor
Desarrollado con ❤️ como proyecto de aprendizaje full-stack.

---

⭐ **¡Si te gusta este proyecto, dale una estrella en GitHub!**
