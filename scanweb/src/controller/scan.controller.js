import { Scan } from "../model/scan.model.js";
import puppeteer from "puppeteer";

// tiempo de espera

function waitforme(millisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, millisec);
  });
}

async function printy() {
  for (let i = 0; i < 2; ++i) {
    await waitforme(1000);
    console.log(i);
  }
  console.log("Loop execution finished!)");
}

// busqueda de articulos

const busquedaDeArticulos = async function (req, res) {
  try {
    // Lanzando navegador
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navegando a la URL
    await page.goto("https://tottus.falabella.com.pe/tottus-pe");

    // Definiendo la pantalla
    await page.setViewport({ width: 1080, height: 1024 });

    // Relizo la busqueda
    const searchResultSelector = ".SearchBar-module_searchBar__Input__1kPKS";
    await page.type(searchResultSelector, "televisor");

    // Ejecuto la busqueda
    const buttonResultSelector = ".SearchBar-module_searchIcon__FS7b4";
    await page.click(buttonResultSelector);

    // Ordenando resultados por el más barato
    const buttonOrden = ".jsx-1051336967.dropdown-select";
    await page.waitForSelector(buttonOrden);
    await page.click(buttonOrden);

    const searchMasBaratos = ".jsx-1051336967.dropdown-list-item";
    await page.waitForSelector(searchMasBaratos);
    await page.click(searchMasBaratos);

    // Seleccionando grupo de items ordenados
    const grupoResultados = ".jsx-1221811815.search-results--products";
    await page.waitForSelector(grupoResultados);

    // Validamos la carga de todos los items
    const itemsResultados = ".jsx-1484439449.search-results-4-grid.grid-pod";
    await page.waitForSelector(itemsResultados);

    

    let quotes = await page.evaluate(() => {
      let quoteelements = document.body.querySelectorAll(
        ".jsx-1484439449.search-results-4-grid.grid-pod"
      );
      console.log(quoteelements);
      let avion = Object.values(quoteelements).map((x) => {
        return x.textContent;
      });
      return avion;
    });

    console.log(quotes, quotes.length);

    // Locate the full title with a unique string
    // const textSelector = await page.waitForSelector("text/Customize and automate");
    // const fullTitle = await textSelector?.evaluate((el) => el.textContent);

    // Print the full title
    // console.log('The title of this blog post is "%s".', fullTitle);

    // await browser.close();
  } catch (error) {
    console.log(error);
    //   res.status(500).send(error);
  }
};

await busquedaDeArticulos();

export { busquedaDeArticulos };
