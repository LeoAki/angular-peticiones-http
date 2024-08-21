import { Component, input } from '@angular/core';
import { ProductNs } from '../../interfaces/product.ns';

@Component({
  selector: 'app-item-product',
  standalone: true,
  imports: [],
  templateUrl: './item-product.component.html',
  styleUrl: './item-product.component.css'
})
export class ItemProductComponent {
  productInfo = input<ProductNs.Item>();

}
