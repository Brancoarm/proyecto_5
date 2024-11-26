Marvel Comics App

Marvel Comics App es una aplicación web construida con React y Vite que permite a los usuarios buscar y explorar cómics del universo Marvel. La aplicación utiliza la API pública de Marvel para obtener información actualizada sobre cómics, personajes y creadores.

## Arquitectura del Proyecto

El proyecto está dividido en dos partes principales:

### 1. Backend
Ubicado en la carpeta `backend`, incluye lo necesario para la autenticación con la API de Marvel y el manejo de las claves públicas y privadas. Estructura de carpetas:

- **backend**
  - `node_modules/` → Dependencias instaladas para el backend.
  - `.env` → Archivo para configurar las claves de la API de Marvel.
  - `package-lock.json` → Archivo generado automáticamente para asegurar la consistencia de las dependencias.
  - `package.json` → Información del proyecto y las dependencias del backend.
  - `server.js` → Archivo principal para ejecutar el servidor del backend.

### 2. Frontend
Ubicado en la carpeta `frontend`, incluye el desarrollo de la interfaz de usuario con React y Vite. Estructura de carpetas:

- **frontend**
  - `node_modules/` → Dependencias instaladas para el frontend.
  - `public/` → Archivos estáticos accesibles al público.
  - `src/` → Código fuente de la aplicación React.
  - `index.html` → Archivo HTML principal para la aplicación.
  - `package-lock.json` → Archivo generado automáticamente para asegurar la consistencia de las dependencias.
  - `package.json` → Información del proyecto y las dependencias del frontend.
  - `vite.config.js` → Configuración para Vite.

### Archivos adicionales

- **`.gitignore`** → Define qué archivos y carpetas deben ser ignorados por Git.
- **`eslintrc.config.js`** → Configuración para ESLint.
- **`README.md`** → Este archivo, con información del proyecto.

---

## Instrucciones de Inicio

Para iniciar el proyecto, sigue los pasos a continuación:

### 1. Iniciar el Backend
1. Abre una terminal.
2. Navega a la carpeta `backend`: cd C:\Users\branc\Desktop\Proyecto_5\backend
3. Ejecuta el servidor del backend: npm run start

### 2. Iniciar el Frontend
1. Abre otra terminal.
2. Navega a la carpeta `frontend`: cd C:\Users\branc\Desktop\Proyecto_5\frontend
3. Ejecuta el servidor del frontend: npm run dev

### 3. Acceso a la Aplicación
Una vez que ambos servidores estén en funcionamiento, abre tu navegador en la siguiente URL para ver la aplicación: http://localhost:5173
---

## Características Principales

- **Búsqueda de cómics**: Los usuarios pueden buscar cómics ingresando un término de búsqueda en el cuadro de búsqueda.
- **Detalles de cómics**: Al hacer clic en un cómic, los usuarios pueden ver detalles como los personajes involucrados, los creadores y una breve descripción.
- **Interfaz dinámica y responsiva**: La aplicación está optimizada para dispositivos móviles y de escritorio, utilizando Bootstrap para un diseño responsivo.
- **Manejo de errores**: La aplicación implementa un ErrorBoundary para capturar errores en la renderización de componentes.

---

## Instalación

1. Clona este repositorio en tu máquina local: git clone https://github.com/Brancoarm/proyecto_5.git

2. Navega al directorio del proyecto: cd proyecto_5

3. Instala las dependencias necesarias para **backend** y **frontend**:
   
- Para el backend:
  ```
  cd backend
  npm install
  ```
- Para el frontend:
  ```
  cd frontend
  npm install
  ```

4. Sigue las instrucciones en la sección **Instrucciones de Inicio** para ejecutar la aplicación.

---

## Configuración de la API de Marvel

Para poder usar la API de Marvel, necesitarás una clave pública y una clave privada de Marvel.

1. Regístrate en el [portal de desarrolladores de Marvel](https://developer.marvel.com/).
2. Crea un archivo `.env` en la carpeta `backend` con el siguiente contenido: PUBLIC_KEY=tu_clave_publica PRIVATE_KEY=tu_clave_privada
---

## Uso de la Aplicación

1. **Búsqueda**: Escribe el nombre del cómic que deseas buscar en el cuadro de búsqueda.
2. **Ver detalles**: Haz clic en "Ver Detalles" en cualquier cómic de la lista de resultados para ver más información.
3. **Navegación**: La aplicación permite navegar entre la página de búsqueda y la página de detalles sin recargar la página.

---

## Despliegue

La aplicación puede ser desplegada en servicios como Netlify, Vercel o GitHub Pages. Para desplegarla, sigue estos pasos:

1. Construye la aplicación para producción: npm run build


2. Despliega la carpeta `dist` generada en cualquier servicio de hosting estático.

---

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio: git fork https://github.com/Brancoarm/proyecto_5.git

2. Crea una nueva rama: git checkout -b feature/nueva-funcionalidad

3. Realiza tus cambios y haz commit: git commit -m 'Agregar nueva funcionalidad'

4. Haz push a la rama: git push origin feature/nueva-funcionalidad
   
5. Abre un Pull Request.

---

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo LICENSE para obtener más detalles.





