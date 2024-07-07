import { Component, ContentChildren, Input, QueryList, ViewChildren } from '@angular/core';
import { MenuElementComponent } from './menu-element/menu-element.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuElementComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  @Input() submenu: boolean = false;
  @Input() collapsed: boolean = false;
  @ContentChildren(MenuElementComponent) menuElements?: QueryList<MenuElementComponent>;

  constructor(private route: Router) {}

  ngAfterContentInit(): void {
    console.log(this.menuElements);
  }

  titleClick() {
    this.collapseAll();
    this.unselectAll();

      this.route.navigate([''], { relativeTo: this.route.routerState.root });
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

  get IsAnyExpanded(): boolean {
    let result = false;
    this.menuElements?.forEach((element) => {
      element.IsExpanded === true ? result = true : null;
    });
    return result;
  }

  onSubmenuClick() {
    if (this.submenu) {
      this.collapsed = !this.collapsed;
      console.log(this.collapsed);
    }
  }
}
