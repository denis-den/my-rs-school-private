
export default class FilterSearch {

  constructor(filterParams) {
    this.filterParams = filterParams;
    this.layout = null;
    this.container = document.createElement('div');
    this._render();
    // this._addEventListeners();
  }

  _render() {
    this.layout = `
    <div class="controls controls-sort">
      <!-- <div>Сортировка:</div><br> -->
      Сортировка:
      <select class="select" name="" id="">
        <option value="1">По названию, от А до Я</option>
        <option value="2">По названию, от Я до А</option>
        <option value="3">По году, по возрастанию</option>
        <option value="4">По году, по убыванию</option>
      </select>
    </div>
    `;

    this.container.innerHTML = this.layout;

    if (this.filterParams.sort !== 1) {
      // console.log(this.filterParams.searchString);
      let inputSelect = this.container.querySelector('.select');
      inputSelect.value = this.filterParams.sort;
    }
  }
  
}