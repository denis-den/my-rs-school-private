
export default class FilterCheckboxes {

  constructor(filterParams) {
    this.filterParams = filterParams;
    this.layout = null;
    this.container = document.createElement('div');
    this._render();
    // this._addEventListeners();
  }

  _render() {
    this.layout = `
    <div class="controls controls-vendors">
      Вендор:
      <label>
        <input class="checkbox-apple" type="checkbox" name="" id="">
        Apple
      </label>
      <label>
        <input class="checkbox-samsung" type="checkbox" name="" id="">
        Samsung
      </label>
      <label>
        <input class="checkbox-readmi" type="checkbox" name="" id="">
        Readmi
      </label>
    </div>

    <div class="controls controls-cameras">
      Количество камер:
      <label>
        <input class="checkbox-cameras-1" type="checkbox" name="" id="">
        1
      </label>
      <label>
        <input class="checkbox-cameras-2" type="checkbox" name="" id="">
        2
      </label>
      <label>
        <input class="checkbox-cameras-3" type="checkbox" name="" id="">
        3
      </label>
    </div>

    <div class="controls controls-colors">
      Цвет:
      <label>
        <input class="checkbox-color-black" type="checkbox" name="" id="">
        Черный
      </label>
      <label>
        <input class="checkbox-color-red" type="checkbox" name="" id="">
        Красный
      </label>
      <label>
        <input class="checkbox-color-white" type="checkbox" name="" id="">
        Белый
      </label>
    </div>

    <div class="controls controls-popular">
      Популярность:
      <label>
        <input class="checkbox-popular" type="checkbox" name="" id="">
        Показать только популярные
    </div>
    `;

    // this.container = document.createElement('div');

    this.container.innerHTML = this.layout;


    // console.log(this.element.querySelector('.checkbox-apple'));

    if (this.filterParams.vendorOne === true) {
      let checkboxApple = this.container.querySelector('.checkbox-apple');
      checkboxApple.setAttribute('checked', '');
    }

    if (this.filterParams.vendorTwo === true) {
      let checkboxSamsung = this.container.querySelector('.checkbox-samsung');
      checkboxSamsung.setAttribute('checked', '');
    }

    if (this.filterParams.vendorThree === true) {
      let checkboxReadmi = this.container.querySelector('.checkbox-readmi');
      checkboxReadmi.setAttribute('checked', '');
    }

// ----------------------------------


    if (this.filterParams.camerasOne === true) {
      let checkboxCamerasOne = this.container.querySelector('.checkbox-cameras-1');
      checkboxCamerasOne.setAttribute('checked', '');
    }

    if (this.filterParams.camerasTwo === true) {
      let checkboxCamerasTwo = this.container.querySelector('.checkbox-cameras-2');
      checkboxCamerasTwo.setAttribute('checked', '');
    }

    if (this.filterParams.camerasThree === true) {
      let checkboxCamerasThree = this.container.querySelector('.checkbox-cameras-3');
      checkboxCamerasThree.setAttribute('checked', '');
    }

// ----------------------------------

    if (this.filterParams.colorBlack === true) {
      let checkboxColorBlack = this.container.querySelector('.checkbox-color-black');
      checkboxColorBlack.setAttribute('checked', '');
    }

    if (this.filterParams.colorRed === true) {
      let checkboxColorRed = this.container.querySelector('.checkbox-color-red');
      checkboxColorRed.setAttribute('checked', '');
    }

    if (this.filterParams.colorWhite === true) {
      let checkboxColorWhite = this.container.querySelector('.checkbox-color-white');
      checkboxColorWhite.setAttribute('checked', '');
    }

// ----------------------------------

    if (this.filterParams.isPopular === true) {
      let checkboxIsPopular = this.container.querySelector('.checkbox-popular');
      checkboxIsPopular.setAttribute('checked', '');
    }


  }
}