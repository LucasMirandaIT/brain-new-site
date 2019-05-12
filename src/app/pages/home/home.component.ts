import { Component, OnInit } from '@angular/core';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mobile = false;

  constructor() { }

  ngOnInit() {
    this.checkMobile();
    window.onresize = (e) => {
      this.checkMobile();
    };
  }

  checkMobile() {
    if (window.innerWidth <= 768) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

}
