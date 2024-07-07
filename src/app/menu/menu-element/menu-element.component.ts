import { Component, ContentChildren, Input, QueryList } from '@angular/core';
import { MenuComponent } from '../menu.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-element',
  standalone: true,
  imports: [MenuComponent, RouterLinkActive, RouterLink],
  templateUrl: './menu-element.component.html',
  styleUrl: './menu-element.component.css'
})
export class MenuElementComponent {
  @Input() submenu?: boolean = false;
  @Input() label?: string;
  @Input() link?: string;
  @Input() icon?: string;
  @ContentChildren(MenuElementComponent) childrens?: QueryList<MenuElementComponent>;

  private _expanded : boolean = false;
  private _selected: boolean = false;

  public get IsExpanded(): boolean {
    return this._expanded;
  }

  public get IsSelected(): boolean {
    return this._selected;
  }

  constructor(private menu: MenuComponent, private router: Router
  ) {}

  IsActiveRoute(route: string) {
    return this.router.url.includes(route);
  }

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
    if (this.link)
      this.router.navigate([this.link], { relativeTo: this.router.routerState.root });
  }

  unselect() {
    this._selected = false;
    this.childrens?.forEach((element) => {
      element.unselect();
    });
  }

  onClick() {
    this.select();
    if (this.childrens!.length > 0) {
      this._expanded = !this._expanded;
    }
  }
}
