Marvel Comics App
Marvel Comics App es una aplicación web construida con React y Vite que permite a los usuarios buscar y explorar cómics del universo Marvel. La aplicación utiliza la API pública de Marvel para obtener información actualizada sobre cómics, personajes y creadores.

Características principales:
Búsqueda de cómics: Los usuarios pueden buscar cómics ingresando un término de búsqueda en el cuadro de búsqueda.
Detalles de cómics: Al hacer clic en un cómic, los usuarios pueden ver detalles como los personajes involucrados, los creadores y una breve descripción.
Interfaz dinámica y responsiva: La aplicación está optimizada para dispositivos móviles y de escritorio, utilizando Bootstrap para un diseño responsivo.
Manejo de errores: La aplicación implementa un ErrorBoundary para capturar errores en la renderización de componentes.
Tecnologías utilizadas:
Frontend:

React: Biblioteca principal para la construcción de la interfaz de usuario.
Vite: Herramienta de compilación rápida para React.
React Router: Para la navegación entre las vistas de la aplicación.
Axios: Para realizar solicitudes HTTP a la API pública de Marvel.
Bootstrap: Para crear un diseño responsivo y atractivo.
Backend:

Node.js: Para obtener las credenciales necesarias para la autenticación con la API de Marvel.
Dependencias principales:
react: ^18.3.1
react-dom: ^18.3.1
axios: ^1.7.7
bootstrap: ^5.3.3
react-router-dom: ^6.x
vite: ^5.4.8

1. Instalación:
Clona este repositorio en tu máquina local:
git clone https://github.com/Brancoarm/proyecto_5.git
2. Dirígete al directorio del proyecto:
cd proyecto_5
3. Instala las dependencias necesarias:
npm install
4. Inicia el servidor de desarrollo:
npm run dev
5. Abre tu navegador en http://localhost:5173 para ver la aplicación en funcionamiento.

Configuración de la API:
Para poder usar la API de Marvel, necesitarás una clave pública y una clave privada de Marvel:

Regístrate en el portal de desarrolladores de Marvel.
Configura un servidor local que maneje la autenticación para las solicitudes a la API de Marvel.
Asegúrate de que el backend de la aplicación maneje los parámetros necesarios (ts, hash, apikey) para autenticar correctamente las solicitudes a la API.

Uso de la aplicación:
Búsqueda: Escribe el nombre del cómic que deseas buscar en el cuadro de búsqueda.
Ver detalles: Haz clic en "Ver Detalles" en cualquier cómic de la lista de resultados para ver más información.
Navegación: La aplicación permite navegar entre la página de búsqueda y la página de detalles sin recargar la página.

Despliegue:
La aplicación puede ser desplegada en servicios como Netlify, Vercel o GitHub Pages. Para desplegarla, sigue estos pasos:

1. Construye la aplicación para producción:
npm run build
2. Despliega la carpeta dist generada en cualquier servicio de hosting estático.

Contribuciones:
Las contribuciones son bienvenidas. Si deseas contribuir, por favor sigue estos pasos:

1. Haz un fork del repositorio.

2. Crea una nueva rama:
git checkout -b feature/nueva-funcionalidad

3. Realiza tus cambios y haz commit:
git commit -m 'Agregar nueva funcionalidad'

4. Haz push a la rama:
git push origin feature/nueva-funcionalidad

5. Abre un Pull Request.

Licencia:
Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo LICENSE para obtener más detalles.
