# 📓 Journal App

Aplicación de notas personales desarrollada durante el curso de **React: De cero a experto ( Hooks y MERN )**. Permite a los usuarios crear, editar y eliminar entradas tipo diario, con la posibilidad de adjuntar imágenes.

---

## 🚀 Funcionalidades principales

- Registro y autenticación de usuarios (con Firebase Authentication)
- CRUD de notas personales
- Subida de imágenes (integración con Cloudinary)
- Guardado automático de cambios
- Interfaz dinámica con React y Redux Toolkit
- Almacenamiento en Firebase Firestore

---

## 🧰 Tecnologías utilizadas

- **React** con **Hooks**
- **Redux Toolkit** y **redux-thunk**
- **React Router DOM**
- **Firebase (Auth & Firestore)**
- **Cloudinary** para gestión de imágenes
- **Material UI** (estilos y componentes)

---

## 📁 Estructura del proyecto

```
src/
├── auth/              # Módulo de autenticación
├── journal/           # Módulo principal de la app
├── store/             # Configuración de Redux Toolkit
├── firebase/          # Configuración de Firebase
├── helpers/           # Funciones auxiliares (e.g. fileUpload)
├── router/            # Rutas de la aplicación
└── App.jsx            # Componente raíz
```
