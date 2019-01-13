import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import { GlobalServiceService } from '../../services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  userName : string
  public element: HTMLElement = document.body;
  constructor(private glblsvr : GlobalServiceService) {
    this.userName = this.glblsvr._userName;

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
}
