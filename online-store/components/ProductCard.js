// import createElement from "./../assets/lib/create-element.js";
// import escapeHtml from "./../assets/lib/escape-html.js";

export default class ProductCard {
  constructor(product, cartItemsIds) {
    this.element = null;
    this.container = document.createElement('div');
    this.product = product;
    this.cartItemsIds = cartItemsIds;
    this._render();
    this._addEventListeners(); // ВОТ ЭТО НАДО
  }

  _render() {
    console.log(this.cartItemsIds);

    this.element = `
    <div>
        <div class="card-title">${this.product.name}</div>
        <div class="card-image-container">
          <img
            src="./assets/images/${this.product.image}"
            class="card-image"
            alt="${this.product.name}"
          />        
        </div>
        <div class="card-amount">
          Количество: <span class="card-amount-num">${this.product.amount}</span>
        </div>
        <div class="card-year">
          Год выхода: <span class="card-year-num">${this.product.year}</span>
        </div>
        <div class="card-vendor">
          Производитель: <span class="card-vendor-name">${this.product.vendor}</span>
        </div>
        <div class="card-color">
          Цвет: <span class="card-color-name">${this.product.color}</span>
        </div>
        <div class="card-cameras">
          Камер: <span class="card-cameras-num">${this.product.cameras}</span>
        </div>
        <div class="card-popular">
          Популярный: <span class="card-popular-status">${this.product.popular}</span>
        </div>
      </div>
      `;

      this.container.innerHTML = this.element;
      this.container.classList.add('card');

      if (this.cartItemsIds[this.product.id]) {
        this.container.classList.add('card-in-cart');
      }
  }

  // addEventListeners = () => {
  //   let button = this.elem.querySelector(".card__button");
  //   button.addEventListener("click", this.onClick);
  // };

  // _addEventListeners = () => {
  //   // let button = this.elem.querySelector(".card__button");
  //   this.element.addEventListener("click", this._onClick);
  // };

  // _onClick = () => {
  //   let customEvent = new CustomEvent("product-add", {
  //     bubbles: true,
  //     detail: this.product.id,
  //   });
  //   this.element.dispatchEvent(customEvent);
  // };



  // ---------------- ВОТ ЭТО НАДО ----------------

  _addEventListeners() {
    // let button = this.elem.querySelector(".card__button");
    this.container.addEventListener("click", (e) => {
      let customEvent = new CustomEvent("product-add", {
        detail: this.product.id,
        bubbles: true,        
      });
      this.container.dispatchEvent(customEvent);
      // console.log('a vot tut klick');
      // console.log(e.currentTarget);
      // console.log(e.target);

      let currentElement = e.currentTarget;

      if (currentElement.classList.contains("card")) {
        if (currentElement.classList.contains("card-in-cart")) {
          currentElement.classList.remove("card-in-cart");
        } else {
          currentElement.classList.add("card-in-cart");
        }
        // console.log('dadada');
      }



    });
  };

  // ---------------- ВОТ ЭТО НАДО ----------------

}