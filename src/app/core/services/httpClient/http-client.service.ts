import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ProductNs } from '../../../interfaces/product.ns';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  baseProductosUrl = environment.baseUrl + 'products';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ProductNs.all> {
    return this.httpClient.get<ProductNs.all>(this.baseProductosUrl + '22222')
    // .pipe(catchError((error: HttpErrorResponse) => {
    //   let errorMessage = '';
    //   if (error.error instanceof ErrorEvent) {
    //     errorMessage = `Error: ${error.error.message}`;
    //   } else {
    //     errorMessage = `Error code: ${error.status}; Message: ${error.message}`;
    //   }

    //   return throwError(() => errorMessage);
    // }));
  }
  getById(id: number): Observable<ProductNs.Item> {
    return this.httpClient.get<ProductNs.Item>(
      `${this.baseProductosUrl}/${id}`
    );
  }
  searchProducts(
    params: ProductNs.SearchProductsParams
  ): Observable<ProductNs.SearchProduct> {
    return this.httpClient.get<ProductNs.SearchProduct>(
      `${this.baseProductosUrl}/search`,
      {
        params: { q: params.q },
      }
    );
  }
  save(data: object) {
    return this.httpClient.post(
      `${this.baseProductosUrl}/add`,
      data,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json', Authorization: 'tokenLeíto'}),
      },
    );
  }
  edit(id: number, data: {title: string}) {
    return this.httpClient.put(
      `${this.baseProductosUrl}/${id}`,
      data
    )
  }
  delete(id: number):Observable<{isDeleted: boolean}> {
    return this.httpClient.delete<{isDeleted: boolean}>(
      `${this.baseProductosUrl}/${id}`
    )
  }
}
