import { Scan } from "../model/scan.model.js";
import puppeteer from "puppeteer";

// busqueda de articulos
const busquedaDeArticulos = async function (req, res) {
  try {
    let { palabra } = req.params;
    let resultados = [];

    // Lanzando navegador
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // Navegando a la URL
    await page.goto("https://tottus.falabella.com.pe/tottus-pe");

    // Definiendo la pantalla
    await page.setViewport({ width: 1080, height: 1024 });

    // Relizo la busqueda
    const searchResultSelector = ".SearchBar-module_searchBar__Input__1kPKS";
    await page.type(searchResultSelector, palabra);

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

    let allItems = await page.$$(itemsResultados);

    for (const elementoHandle of allItems) {
      const tagName = await elementoHandle.$$(".pod-subTitle");
      const tagNameValue = await tagName[0].evaluate((e) => e.textContent);
      const tagNameValueClear = tagNameValue.trim();

      const tagPrice = await elementoHandle.$$(
        ".copy10.primary.medium.jsx-2490421794.normal.line-height-22"
      );
      const tagPriceValue = await tagPrice[0].evaluate((e) => e.textContent);
      const tagPriceValueClear = tagPriceValue.trim();

      let objetoFinal = { tagNameValueClear, tagPriceValueClear };
      resultados.push(objetoFinal);
    }
    await browser.close();

    res.status(200).send(resultados);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { busquedaDeArticulos };
