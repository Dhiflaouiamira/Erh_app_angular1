import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    roles: string[];
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', roles:['admin', 'superadmin'] },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '', roles:['superadmin'] },
    { path: '/table-list', title: 'user List',  icon:'content_paste', class: '', roles:['superadmin'] },
    { path: '/typography', title: 'entreprise List',  icon:'library_books', class: '', roles:['admin', 'superadmin'] },
    { path: '/icons', title: 'Projects',  icon:'bubble_chart', class: '', roles:['admin', 'manager'] },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '', roles:['client'] },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '', roles:[] },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro', roles:[] },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  appStorage = localStorage;

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
