# API CRUD Libreria

### 📝 Descripción

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

- **`config/`:** Contiene archivos de configuración para tu aplicación.

  - **`database.js`:** Configuración de la conexión a la base de datos.
  - **`config.js`:** Publicación de variables utilizadas en toda la app consumiendo el archivo .env

- **`src/`:** Contiene el código fuente de tu aplicación.

  - **`controllers/`:** Manejo de la lógica de la aplicación, cada archivo se encarga de una entidad específica.
  - **`models/`:** Contiene los modelos (estructuras) de datos de tu aplicación, cada uno representa una entidad.
  - **`routes/`:** Contiene las rutas de tu aplicación. Cada archivo de ruta está asociado con un controlador
  - **`middleware/`:** Contiene archivos que procesan las solicitudes antes de que lleguen a los controladores.
  - **`app.js`:** Archivo principal de la configuración de Express.

- **`test/`:** Contiene archivos de testing para la app (modelos, controladores y rutas).

- **`.env`:** Configuración de variables de entorno.
- **`.gitignore`:** Configuración de archivos y carpetas que no se registraran en git.
- **`index.js`:** Script que inicia el servidor Express.
- **`package.json`:** Archivo de configuración de Node.js que incluye dependencias, scripts, y otra información relevante.

### 📝 Desarrollo

- Orden de desarrollo del API Libreria en NODE/EXPRESS

01. definir el modelo en una imagen y sus especifcaciones
02. crear el proyecto segun la estructura básica definida
03. configurar los acceso a la BD
04. realizar la cadena de conexión
05. definir los modelos (agregar data de prueba)
06. definir los controladores
07. definir los routers
08. actualizar el archivo app.js
09. levantar la app y hacer una prueba básica con POSTMAN
10. implementar los test para todos los controladores (ava.js)
11. implementar la validación de datos que recibe a través de la API (utiliza express-validator)
12. implementar el servicio de autenticación (jsonwebtoken)
13. implementar el servicio de documentación (swagger-jsdoc y swagger-ui-express)

### ⚙️ Referencias

Información de referencia en la construcción de la API

- [Test AVA docs](https://github.com/avajs/ava/blob/5975b602b771e0dc02382d24b65c5561bd5fc7ee/docs/03-assertions.md)
- [Node-Fetch docs](https://github.com/node-fetch/node-fetch)
- [Ejemplo de express-validator](https://www.freecodecamp.org/espanol/news/como-hacer-la-validacion-de-entradas-simple-y-limpia-en-tu-app-expressjs/)
