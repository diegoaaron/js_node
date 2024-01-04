import { Scan } from "../model/scan.model.js";
import puppeteer from "puppeteer";

// login en la web

const loginInWeb = async function (req, res) {
  try {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto("https://pe.parimatch.com/es/");

    // Set screen size
    await page.setViewport({ width: 1080, height: 1024 });

    // Wait and click on first result
    const searchResultSelector =
      ".modulor_button__button__1_32_8.modulor_button__always_white__1_32_8.modulor_button__low__1_32_8";
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    const logintag =
      ".modulor_field__field-input__1_32_8.modulor_field__with-label__1_32_8.modulor_field__active__1_32_8";
    await page.waitForSelector(logintag);

    const passtag =
      ".modulor_field__field-input__1_32_8.modulor_field__with-label__1_32_8.modulor_field__with-action-icon__1_32_8";
    
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

await loginInWeb();

// leer apuestas de futbol

const leerApuestasFutbol = async function (req, res) {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};

// leer una unica apuesta

const leerUnicaApuesta = async function (req, res) {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};

// leer apuestas finalizadas

const leerApuestasFinalizadas = async function (req, res) {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
};

export { loginInWeb, leerApuestasFutbol, leerUnicaApuesta, leerApuestasFinalizadas };
