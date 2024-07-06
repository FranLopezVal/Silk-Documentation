import { Component, ContentChildren, Input, QueryList, ViewChildren } from '@angular/core';
import { MenuComponent } from '../menu.component';

@Component({
  selector: 'app-menu-element',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './menu-element.component.html',
  styleUrl: './menu-element.component.css'
})
export class MenuElementComponent {

  @Input() label?: string;
  @Input() link?: string;
  @Input() icon?: string;
  @ContentChildren(MenuElementComponent) childrens?: QueryList<MenuElementComponent>;

  private _expanded: boolean = false;
  private _selected: boolean = false;

  public get IsExpanded(): boolean {
    return this._expanded;
  }

  public get IsSelected(): boolean {
    return this._selected;
  }

  constructor(private menu: MenuComponent) {}

  collapse() {
    this._expanded = false;
    if (this.childrens) {
      this.childrens.forEach((element) => {
        element.collapse();
      });
    }
  }

  select() {
    this.menu.unselectAll();
    this._selected = true;
    console.log(this.label);  
  }

  unselect() {
    this._selected = false;
    this.childrens?.forEach((element) => {
      element.unselect();
    });
  }

  onClick() {
    if (this.childrens!.length > 0) {
      this._expanded = !this._expanded;
    } else {
      this.select();
    }
  }
}
