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

  slides = [
    {img: "https://cdn2.outdoorphotographer.com/2019/01/Moody_Landscapes_1.jpg"},
    {img: "https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2018/06/ultra-wide-mistakes-lead-image.jpg"},
    {img: "https://static.photocdn.pt/images/articles/2017/12/11/articles/2017_8/iStock-875430954-min.jpg"},
    {img: "https://cdn.theatlantic.com/assets/media/img/photo/2017/09/landscapes-of-norway/n03_844052000/main_900.jpg?1507146797"}
  ];
  slideConfig = {"slidesToShow": 1, "" "arrows": true, "dots": true};

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
