import { Injectable } from '@angular/core';
import { Product } from './product.module';

@Injectable()
export class ProductService {

  data = [{
    id: 1,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 2,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 3,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 4,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 5,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 6,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 7,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 8,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 9,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 10,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 11,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 12,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 13,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 14,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    id: 15,
    productName: 'Keyboard',
    price: 12.99,
    description: 'good keyboard',
  }, {
    'id': 16,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 17,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 18,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 19,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 20,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 21,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 22,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 23,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 24,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 25,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 26,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 27,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 28,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 29,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 30,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 31,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 32,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 33,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 34,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 35,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 36,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 37,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 38,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 39,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 40,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 41,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 42,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 43,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 44,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 45,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 46,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 47,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 48,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 49,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 50,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 51,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 52,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 53,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 54,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 55,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 56,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 57,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 58,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 59,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }, {
    'id': 60,
    'productName': 'Keyboard',
    'price': 35.99,
    'description': 'very good keyboard',
  }];

  getData() {
    return this.data;
  }

  delete(id: number) {
    for (let i = 0; i < this.data.length; i++) {

      if (this.data[i].id === id) {
        // console.log(`delete:${this.data[i].id}`);
        this.data.splice(i, 1);
        return;
      }
    }
  }

  edit(product: Product) {
    for (let i = 0; i < this.data.length; i++) {

      if (this.data[i].id === product.id) {
        // console.log(`edit:${this.data[i].id}`);
        this.data[i] = product;
        return;
      }
    }
  }
}
