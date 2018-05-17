import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product-list/product-list.component'
import { NormalListComponent } from './normal-list/normal-list.component'

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: 'list',
      component: ProductListComponent,
    },
    {
      path: 'normal-list',
      component: NormalListComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProductsRoutingModule {

}

export const routedComponents = [
  ProductsComponent,
  ProductListComponent,
  NormalListComponent,
];
