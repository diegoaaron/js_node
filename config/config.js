import { fileURLToPath } from "url";
import { dirname, join } from "path";

const port = process.env.PORT || 3000;

const urlmongoconexion = process.env.MONGODB_URI;

function obtenerDir(ruta) {
  let dirbase = dirname(fileURLToPath(import.meta.url));
  dirbase = dirbase.substring(0, dirbase.lastIndexOf("/"));
  dirbase = join(dirbase, ruta);
  return dirbase;
}

const dirbasesrc = obtenerDir("src");

export { port, urlmongoconexion, dirbasesrc };
