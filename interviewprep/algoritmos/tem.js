function updateInventory(currentInventory, newInventory) {
  // revisando cada item del nuevo inventario
  for (let newItem of newInventory) {
    let found = false;

    // comparamos cada nuevo item en el inventario principal
    for (let oldItem of currentInventory) {
      // agregamos saldos para los valores ya presentes
      if (newItem[1] === oldItem[1]) {
        oldItem[0] += newItem[0];
        found = true;
        break;
      }
    }

    // si no se encuentra en el recorrido anterior se agrega como nuevo item
    if (!found) {
      currentInventory.push(newItem);
    }
  }

  // ordenando alfabeticamente
  currentInventory.sort((a, b) => {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
  });

  return currentInventory;
}
