import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() { }

  getData() {
    return axios.get('https://dummyjson.com/products/1');
  }
}
