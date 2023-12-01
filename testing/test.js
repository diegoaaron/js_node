import test from "node:test";
import assert from "node:assert";

test("example test", () => {
  assert.equal(1, 1, "1 no es igual a 0");
});

test("example object test", () => {
  assert.deepEqual({ a: 1 }, { a: 1 }, "Objetos no son iguales");
});

test("async test example", async () => {
  const number = await Promise.resolve(3);
  assert.equal(number, 3, "number is no equal 3");
});

test("try array.findLast", () => {
  const numbers = [2, 4, 6, 8];
  const lastEven = numbers.findLast((n) => n % 2 === 0);
  assert.equal(lastEven, 8, "funcion findLast con error");
});

test("Try Array.findLastIndex", () => {
  const numbers = [2, 4, 6, 8];
  const lastEvenIndex = numbers.findLastIndex((n) => n % 2 === 0);
  assert.equal(lastEvenIndex, 3, "no es el indice correcto");
});

test("fetch", async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const json = await response.json();
  assert.equal(json.name, "ditto", "pokemon incorrecto");
});
