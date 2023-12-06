### Estructura CRUD

La estructura de archivos en una API REST con Express para el CRUD son: 

```plaintext
.
├── config/
│   ├── config.js
│   ├── database.conexion.js
│   └── ...
├── node_modules/
├── src/
│   ├── controllers/
│   │   ├── user.controller.js
│   │   └── ...
│   ├── middleware/
│   │   ├── validation.middleware.js
│   │   └── ...
│   ├── models/
│   │   ├── user.model.js
│   │   └── ...
│   ├── routes/
│   │   ├── user.routes.js
│   │   └── ...
│   └── app.js
├── testing/
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

Explicación de la estructura propuesta:

- **`config/`:** Contiene archivos de configuración para tu aplicación.
  - **`database.js`:** Configuración de la conexión a la base de datos.
  - **`config.js`:** Publicación de variables utilizadas en toda la app consumiendo el archivo .env 

- **`src/`:** Contiene el código fuente de tu aplicación.
  - **`controllers/`:** Manejo de la lógica de la aplicación, cada archivo se encarga de una entidad específica.
  - **`models/`:** Contiene los modelos (estructuras) de datos de tu aplicación, cada uno representa una entidad.
  - **`routes/`:** Contiene las rutas de tu aplicación. Cada archivo de ruta está asociado con un controlador
  - **`middleware/`:** Contiene archivos que procesan las solicitudes antes de que lleguen a los controladores. 
  - **`app.js`:** Archivo principal de configuración de Express.

- **`testing/`:** Contiene archivos de testing para la app.

- **`.env`:** Configuración de variables de entorno.
- **`.gitignore`:** Configuración de archivos y carpetas que no se registraran en git 
- **`index.js`:** Punto de entrada de la aplicación donde se inicia el servidor Express.
- **`package.json`:** Archivo de configuración de Node.js que incluye dependencias, scripts, y otra información relevante.

### Orden desarrollo de funcionalidades

1. crear los archivos y carpetas según el esqueleto superior. 
 - podemos utilizar **npm init --yes** para generar un archivo *package.json* desde cero.
 - utilizar **npm install** para instalar los paquetes.
 - validar que **nodemon** este instalado de forma global.

2. modelo (model)
 - configurar el archivo `config/database.conexion.js`.
 - configurar la conexión de la base de datos en el archivo `app.js`.
 - crear los modelos que utilizara la app.
  - podemos guardar una imagen que diagrame de la interacción de los modelos.

3. Controlador (controller)
 - crear las funciones CRUD para cada modelo definido.

4. Router 
 - Generar las rutas que enlacen las URL con sus respectivas funciones controladoras.

5. Testing
 - Generar y ejecutar funciones de testing para las diferentes funciones controladoras y rutas.

**complemento** 

6. validación 
 - conigurar middleware para formatear y validar la información recibida.
 - programar la validación y formateo de la información recibida.

7. documentación
 - conigurar middleware para generar documentación de la API.
 - programar la documentación de la API.

8. autenticación
 - configurar middleware para solicitar autenticación.
 - configurar las rutas de la API que no necesitan credenciales.
 - configurar las rutas de la API que tendran acceso a través de credenciales.
