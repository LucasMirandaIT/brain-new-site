import { Component, OnInit } from '@angular/core';

import { products } from '../../../assets/infos/products';
import { Http } from '@angular/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  produtos;

  constructor(private http: Http) { }

  ngOnInit() {
    this.produtos = products;
  }

}
