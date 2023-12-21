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
  - **`app.js`:** Archivo principal de la configuración de Express.

- **`test/`:** Contiene archivos de testing para la app.

- **`.env`:** Configuración de variables de entorno.
- **`.gitignore`:** Configuración de archivos y carpetas que no se registraran en git.
- **`index.js`:** Script que inicia el servidor Express.
- **`package.json`:** Archivo de configuración de Node.js que incluye dependencias, scripts, y otra información relevante.

