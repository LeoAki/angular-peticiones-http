import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { XmlHttpService } from './core/services/xmlHttpRequest/xml-http.service';
import { FetchService } from './core/services/fetch/fetch.service';
import { AxiosService } from './core/services/axios/axios.service';
import { HttpClientService } from './core/services/httpClient/http-client.service';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListProductsComponent, MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular_peticiones_http';
  xmlService = inject(XmlHttpService);
  fetchService = inject(FetchService);
  axiosService = inject(AxiosService);
  httpClienteService = inject(HttpClientService);
  ngOnInit(): void {
    // this.httpClienteService.searchProducts({q: 'phone'}).pipe(map(x => x.products)).subscribe((x) => console.log('productos::', x));
    // this.httpClienteService.save({}).subscribe();
    // this.httpClienteService.edit(1, {title: 'Iphone 15 Pro-Mac'}).subscribe();
    // this.httpClienteService.delete(1).pipe(map(x => x.isDeleted)).subscribe((y)=> console.log('isDeleted::',y));
  }
}
