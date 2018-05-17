import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxPaginationModule } from 'ngx-pagination';

import { ThemeModule } from '../../@theme/theme.module';
import { ProductsRoutingModule, routedComponents } from './products-routing.module';
import { ProductService } from '../../@core/data/products.service';

@NgModule({
  imports: [
    ThemeModule,
    ProductsRoutingModule,
    Ng2SmartTableModule,
    NgxPaginationModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ProductService,
  ],
})
export class ProductsModule { }
