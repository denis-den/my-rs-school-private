
export default class FilterRanges {

  constructor(filterParams) {
    this.filterParams = filterParams;
    this.layout = null;
    this.container = document.createElement('div');
    this._render();
    // this._addEventListeners();
  }

  _render() {
    this.layout = `
    <div class="controls controls-ranges">
      <input type="range"><br>
      <input type="range">      
    </div>    
    `;

    this.container.innerHTML = this.layout;
  }



  // qwe() {
  //   console.log('qqqqqqqqqq')
  // }

  // console.log(qqqqqqqqqq)
  
}