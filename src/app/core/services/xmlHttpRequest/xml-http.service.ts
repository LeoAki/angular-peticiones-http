import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class XmlHttpService {

  constructor() { }

  getData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://dummyjson.com/products/1', true); // el tercer parámetro es para indicar si es asíncrono.
    xhr.onload= () => {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
      } else {
        console.log('Error:', xhr.statusText);
      }
    };
    xhr.onerror = () => console.error('Request Failed');
    xhr.send();
  }
}
