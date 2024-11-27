import createElement from '../../assets/lib/create-element.js';

/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {
  elem = null;

  #rows = [];

  constructor(rows) {
    this.#rows = rows || this.#rows;

    this.#render();
  }

  #template() {
    return `
      <table>
          <thead>
              <tr>
                  <th>Имя</th>
                  <th>Возраст</th>
                  <th>Зарплата</th>
                  <th>Город</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              ${this.#rows
                .map(
                  (row) => `      
                  <tr>
                      <td>${row.name}</td>
                      <td>${row.age}</td>
                      <td>${row.salary}</td>
                      <td>${row.city}</td>
                      <td><button>X</button></td>
                  </tr>
                `
                )
                .join("\n")}
          </tbody>
      </table>
      `;
  }

  #onButtonClick = ({ target }) => {
    if (target.tagName !== 'BUTTON') {
      return;
    }
    target.closest('tr').remove();
  };

  #render() {
    this.elem = createElement(this.#template());
    this.elem.addEventListener('click', this.#onButtonClick);
  }
}
