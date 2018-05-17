import { Component } from '@angular/core';

import { ProductService } from '../../../@core/data/products.service';
import { Product } from '../../../@core/data/product.module';

@Component({
  selector: 'ngx-normal-list',
  styleUrls: ['./normal-list.component.scss'],
  templateUrl: './normal-list.component.html',
})


export class NormalListComponent {
  productList: Product[];
  p: number = 1;

  constructor(private service: ProductService) {
    this.productList = this.service.getData();
  }

  edit(id: number) {
    return false;
  }
  delete(id: number) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.service.delete(id);
    }
    return false;
  }
}
