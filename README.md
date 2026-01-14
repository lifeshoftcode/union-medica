# Clínica Unión Médica - Next.js Modern Platform

Este es el repositorio de la nueva plataforma digital de la **Clínica Unión Médica**, desarrollada con **Next.js 15**, **React 19** y **Tailwind CSS**. 

El proyecto ha sido diseñado bajo una arquitectura modular y escalable, priorizando la experiencia de usuario (UX) y un diseño visualmente premium.

---

## 🚀 Arquitectura y Organización del Proyecto

El proyecto sigue la convención de **App Router** de Next.js, organizando las rutas y la lógica de la siguiente manera:

### 📁 Estructura de Directorios

- **`/app`**: Contiene las rutas principales de la aplicación.
  - **`/(root)`**: Página de inicio (`page.tsx`) y layouts generales.
  - **`/nosotros`**: Información institucional, misión, visión y equipo médico.
  - **`/servicios`**: Catálogo de servicios médicos (organizado dinámicamente).
  - **`/pacientes`**: Portal de resultados, laboratorio y servicios al paciente.
  - **`/investigacion`**: Publicaciones científicas y revista médica.
  - **`/contacto`**: Información de contacto y ubicación.
  - **`/api`**: Endpoints de servidor (ej. integración con Gemini para el Chatbot).
- **`/components`**: Componentes de UI globales y compartidos.
  - **`Navbar.tsx`**, **`Footer.tsx`**, **`ChatWidget.tsx`**: Elementos que aparecen en toda la plataforma.
- **`/modules`**: Lógica y componentes específicos por cada página/módulo.
  - **`/home`**: Componentes exclusivos de la página de inicio (Hero, Servicios, Noticias).
- **`/public`**: Recursos estáticos (Logos, videos, imágenes optimizadas).

---

## ✨ Características Principales

### 🖥️ Interfaz de Usuario (UI)
- **Mega Menú Inteligente**: Navegación avanzada por columnas para descubrir servicios médicos de forma intuitiva.
- **Diseño Glassmorphism**: Uso de efectos de desenfoque (`backdrop-blur`) y sombras profundas para un aspecto moderno y limpio.
- **Micro-interacciones**: Animaciones suaves al hacer hover y transiciones fluidas entre secciones.
- **Optimización de Video**: Fondo hero con video auto-play optimizado para carga rápida.

### 🤖 Inteligencia Artificial Integrada
- **Asistente Virtual (UMN)**: Chatbot integrado con la API de **Google Gemini** para responder consultas de pacientes en tiempo real.
- **Fallback Seguro**: Sistema de respuestas locales en caso de fallas de conexión o falta de API Key.

### 📱 Responsividad y Accesibilidad
- Diseño totalmente adaptable a móviles, tablets y escritorio.
- Paleta de colores institucional (`um-green`) aplicada bajo estándares de contraste y legibilidad.

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS 4
- **IA**: Google Generative AI (Gemini Flash 1.5)
- **Iconografía**: SVG Custom Paths & FontAwesome
- **Fuentes**: Google Fonts (Inter)

---

## 🏃 Cómo empezar

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/lifeshoftcode/union-medica.git
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno**:
    Crea un archivo `.env.local` y añade tu clave:
    ```env
    GEMINI_API_KEY=tu_clave_aqui
    ```

4.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```

---

## 📝 Notas de Desarrollo
Este proyecto ha sido reconstruido desde cero para ofrecer una arquitectura limpia. Actualmente, la **Home Page** está al 100% de funcionalidad visual, y la estructura de carpetas ya está preparada para el despliegue de las páginas internas (`/servicios`, `/nosotros`, etc.) siguiendo el mismo estándar de diseño.
