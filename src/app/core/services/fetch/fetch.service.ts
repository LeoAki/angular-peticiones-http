import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }

  getData() {
    fetch('https://dummyjson.com/products/1')
      .then(response => response.json())
      .then(data => console.log('data:', data))
      .catch(error => console.error('Error:', error))
  }
}
