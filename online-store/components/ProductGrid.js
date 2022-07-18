import ProductCard from "./ProductCard.js";
// import dataSet from "./dataSet.js";

export default class ProductGrid {

  constructor(filterParams, products, cartItems) {
    this.products = products;
    this.filterParams = filterParams;
    this.cartItems = cartItems;

    this.layout = null;
    this.container = document.createElement('div');

    this.filteredProducts = null;
    // this.filters = {};
    this._render();
  }

  _render() {
    this.layout = `
      <div class="cards"></div>
    `;

    this.container.innerHTML = this.layout;

    // this._renderContent();
    this._filtered();
    this._renderContent();
  }

  // _renderContent() {
  //   // console.log('ertertert');
  //   // this.container.innerHTML = this.layout;

  // }




  _filtered() {

    this.filteredProducts = this.products
    .filter(item => {
      if (!this.filterParams.vendorOne && !this.filterParams.vendorTwo && !this.filterParams.vendorThree) {
        return item;
      } else if (item.vendorOne) {
        return this.filterParams.vendorOne === item.vendorOne;
      } else if (item.vendorTwo) {
        return this.filterParams.vendorTwo === item.vendorTwo;
      } else if (item.vendorThree) {
        return this.filterParams.vendorThree === item.vendorThree;
      }
    })
    .filter(item => {
      if (!this.filterParams.camerasOne && !this.filterParams.camerasTwo && !this.filterParams.camerasThree) {
        return item;
      } else if (item.camerasOne) {
        return this.filterParams.camerasOne === item.camerasOne;
      } else if (item.camerasTwo) {
        return this.filterParams.camerasTwo === item.camerasTwo;
      } else if (item.camerasThree) {
        return this.filterParams.camerasThree === item.camerasThree;
      }
    })
    .filter(item => {
      if (!this.filterParams.colorBlack && !this.filterParams.colorRed && !this.filterParams.colorWhite) {
        return item;
      } else if (item.colorBlack) {
        return this.filterParams.colorBlack === item.colorBlack;
      } else if (item.colorRed) {
        return this.filterParams.colorRed === item.colorRed;
      } else if (item.colorWhite) {
        return this.filterParams.colorWhite === item.colorWhite;
      }
    })
    .filter(item => {
      if (this.filterParams.isPopular) {
        return this.filterParams.isPopular === item.isPopular;
      } else {
        return item;
      }
    })
    .filter(item => {
      if (this.filterParams.minYear <= item.year && item.year <= this.filterParams.maxYear) {
        return item;
      } else {
        return false;
      }
    })
    .filter(item => {
      if (this.filterParams.minAmount <= item.amount && item.amount <= this.filterParams.maxAmount) {
        return item;
      } else {
        return false;
      }
    })
    .filter(item => {
      return ( (item.name).toLowerCase() ).includes( (this.filterParams.searchString).toLowerCase() );
    });

    if (this.filterParams.sort === 1) {
      this.filteredProducts.sort((a, b) => a.name > b.name ? 1 : -1);
    } else if (this.filterParams.sort === 2) {
      this.filteredProducts.sort((a, b) => a.name > b.name ? 1 : -1).reverse();
    } else if (this.filterParams.sort === 3) {
      this.filteredProducts.sort((a, b) => a.year > b.year ? 1 : -1);
    } else if (this.filterParams.sort === 4) {
      this.filteredProducts.sort((a, b) => a.year > b.year ? 1 : -1).reverse();
    }
    // console.log(this.filteredProducts);
  }



  _renderContent() {
    this.container.querySelector(".cards").innerHTML = "";

    for (let product of this.filteredProducts) {
      let card = new ProductCard(product, this.cartItems);
      this.container.querySelector(".cards").append(card.container);
    }
  };


  _updateContent() {
    this._render();
  }

  // updateFilter = (filters) => {
  //   Object.assign(this.filters, filters);
  //   this.renderContent();
  // };




    // console.log('111111111111');

  //   this.elem.querySelector(".products-grid__inner").innerHTML = "";

  //   for (let product of this.products) {
  //     if (this.filters.noNuts && product.nuts) {
  //       continue;
  //     }

  //     if (this.filters.vegeterianOnly && !product.vegeterian) {
  //       continue;
  //     }

  //     if (
  //       this.filters.maxSpiciness !== undefined &&
  //       product.spiciness > this.filters.maxSpiciness
  //     ) {
  //       continue;
  //     }

  //     if (this.filters.category && product.category != this.filters.category) {
  //       continue;
  //     }

  //     let card = new ProductCard(product);
  //     this.elem.querySelector(".products-grid__inner").append(card.elem);
  //   }
  // };

  // updateFilter = (filters) => {
  //   Object.assign(this.filters, filters);
  //   this.renderContent();
  // };


}
