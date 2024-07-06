import { Component, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { MenuElementComponent } from './menu-element/menu-element.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuElementComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @ContentChildren(MenuElementComponent) menuElements?: QueryList<MenuElementComponent>;

  constructor() {}

  ngAfterContentInit(): void {
    console.log(this.menuElements);
  }

  titleClick() {
    this.collapseAll();
    this.unselectAll();
  }

  collapseAll() {
    this.menuElements?.forEach((element) => {
      element.collapse();
    });
  }

  unselectAll() {
    this.menuElements?.forEach((element) => {
      element.unselect();
    });
  }
}
