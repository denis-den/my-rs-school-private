// components here
import FilterCheckboxes from "./components/FilterCheckboxes.js";
import FilterRanges from "./components/FilterRanges.js";
import FilterSearch from "./components/FilterSearch.js";
import FilterSelect from "./components/FilterSelect.js";
import ProductGrid from "./components/ProductGrid.js";

import dataSet from "./components/dataSet.js";


export default class Main {
  constructor(dataSet) {
    this.filterParams = {
      vendorOne: false,
      vendorTwo: false,
      vendorThree: false,
    
      camerasOne: false,
      camerasTwo: false,
      camerasThree: false,
    
      colorBlack:false,
      colorRed: false,
      colorWhite: false,
    
      isPopular: false,
    
      minYear: 2014,
      maxYear: 2022,
    
      minAmount: 10,
      maxAmount: 30,

      searchString: '',
    
      sort: 4,
    };

    // this.cartItems = [1, 2, 4];

    // this.cartItems = {
    //   'apple-iphone-6': 'apple-iphone-6',
    //   'apple-iphone-7': 'apple-iphone-7',
    // };
    this.cartItems = {};
    // this.cartValue = 0;
    this.cartValue = this.cartItems.length;

    this.dataSet = dataSet;
  }
  
  async render() {
    this._renderFilterCheckboxes(this.filterParams);

    // this._renderFilterRanges(this.filterParams);
    // this._renderFilterSearch(this.filterParams);

    this._renderFilterSelect(this.filterParams);

    this._renderCart(this.cartValue);
    this._renderProductGrid(this.filterParams, this.dataSet, this.cartItems);

    document.body.addEventListener("product-add", (e) => {
      // console.log('product-add event!')
      // console.log(e.target);
      console.log(e.detail);

      if (this.cartItems[e.detail]) {
        console.log('содержит');
        delete this.cartItems[e.detail];
        console.log(this.cartItems);
      } else {
        console.log('не содержит');
        this.cartItems[e.detail] = e.detail;
        console.log(this.cartItems);
      }
      // this.cartItems.push({id: e.detail});

      // let product = this.products.find((product) => {
      //   if (product.id == productId) {
      //     return product;
      //   }
      // });
      // this.cart.addProduct(product);
    });



  }

  _renderFilterCheckboxes(params) {
    this.filterCheckboxes = new FilterCheckboxes(params);
    document.querySelector(".controls-container").append(this.filterCheckboxes.container);        
  }

  _renderFilterRanges(params) {
    this.filterRanges = new FilterRanges(params);
    document.querySelector(".controls-container").append(this.filterRanges.container);        
  }

  _renderFilterSearch(params) {
    this.filterSearch = new FilterSearch(params);
    document.querySelector(".controls-container").append(this.filterSearch.container);        
  }

  _renderFilterSelect(params) {
    this.filterSelect = new FilterSelect(params);
    document.querySelector(".controls-container").append(this.filterSelect.container);        
  }

  _renderCart(value) {
    const cartValue = document.body.querySelector('.cart-value');
    cartValue.textContent = value;
  };

  // _renderFilterSelect(params, data) {
  //   this.filterSelect = new FilterSelect(params, data);
  //   document.querySelector(".controls-container").append(this.filterSelect.container);        
  // }



  _renderProductGrid(params, data, cartItems) {
    // console.log(params);
    // console.log(data);
    this.productGrid = new ProductGrid(params, data, cartItems);
    document.querySelector(".controls-container").append(this.productGrid.container);      
  }








}

let main = new Main(dataSet);
main.render();
