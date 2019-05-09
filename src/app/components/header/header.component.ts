import { Component, OnInit } from '@angular/core';

import { fromEvent, Observable, BehaviorSubject } from "rxjs";
import { Http } from '@angular/http';

import { menu } from '../../../assets/infos/menu';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  mobile: Boolean;

  menuJSON;

  constructor(private http: Http) { }

  ngOnInit() {
    this.checkMobile();
    window.onresize = (e) => {
      this.checkMobile();
    };
    this.menuJSON = menu;
  }

  checkMobile() {
    if (window.innerWidth <= 768) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  clickMenu(clickedMenu, evento) {
    this.changeSelectedMenu(evento);
    this.closeAllSubMenus();
    if (clickedMenu.submenu) {
      const selected = document.getElementById(`submenus-${clickedMenu.id}`);
      selected.classList.add('active');
    } else {
      this.closeAllSubMenus();
      const menuToggle = document.getElementById('menuToggleInput') as HTMLInputElement;
      menuToggle.checked = false;
    }
  }

  closeAllSubMenus() {
    const submenus = Array.from(document.getElementsByClassName('submenus'));
    submenus.map((submenu) => {
      submenu.classList.remove('active');
    });
  }
  changeSelectedMenu(evento) {
    const menuOptions = Array.from(document.getElementsByClassName('menu-options'));
    menuOptions.map((option) => {
      option.classList.remove('selected');
    });
    evento.srcElement.classList.add('selected');
  }
}
