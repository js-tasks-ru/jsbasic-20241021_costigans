function highlight(table) {
  const rows = table.tBodies[0].rows;

  for (let row of rows) {
    let statusCell = row.cells[3];
    if (statusCell.hasAttribute('data-available')) {
      let availabilityStatus = statusCell.getAttribute('data-available');
      row.classList.add(availabilityStatus === "true" ? 'available' : 'unavailable');
    } else {
      row.hidden = true;
    }

    let genderCell = row.cells[2];
    if (genderCell.textContent === "m") {
      row.classList.add('male');
    } else if (genderCell.textContent === "f") {
      row.classList.add('female');
    }

    let ageCell = row.cells[1];
    if (Number(ageCell.textContent) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
