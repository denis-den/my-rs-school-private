
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
    <div class="controls controls-search-filter">
      Поиск: <input class="search-filter" type="search" value="">
    </div>
    `;

    this.container.innerHTML = this.layout;

    if (this.filterParams.searchString !== '') {
      // console.log(this.filterParams.searchString);
      let inputSearch = this.container.querySelector('.search-filter');
      inputSearch.value = this.filterParams.searchString;
    }
  }
  
}