import { Component, inject, OnInit } from '@angular/core';
import { HttpClientService } from '../../core/services/httpClient/http-client.service';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ProductNs } from '../../interfaces/product.ns';
import { AsyncPipe } from '@angular/common';
import { ItemProductComponent } from '../item-product/item-product.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [AsyncPipe, ItemProductComponent, ErrorMessageComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit {

  public products$!: Observable<ProductNs.all>
  public errorMessage!: string;
  productService = inject(HttpClientService);

  ngOnInit(): void {
    this.products$ = this.productService.getAll().pipe(
      catchError((error: string) => {
        this.errorMessage = error;
        return EMPTY;
      })
    );
  }

}
