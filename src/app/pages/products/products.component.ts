import { Component, OnInit } from '@angular/core';

import { products } from '../../../assets/infos/products';
import { Http } from '@angular/http';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  produtos;
  mobile: boolean;

  slideConfig = {"slidesToShow": 1, "arrows": true, "dots": true};

  constructor(private http: Http) { }

  ngOnInit() {
    this.checkMobile();
    window.onresize = (e) => {
      this.checkMobile();
    };
    this.produtos = products;
  }

  checkMobile() {
    if (window.innerWidth <= 768) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }


}
