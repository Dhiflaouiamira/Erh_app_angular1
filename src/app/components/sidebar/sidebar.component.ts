import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user/user.service';

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
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '', roles:['superadmin','admin',"employee"] },
    { path: '/entreprise-info', title: 'entreprise info',  icon:'unarchive', class: 'library_books', roles:["admin"] },

    { path: '/table-list', title: 'user List',  icon:'content_paste', class: '', roles:['superadmin','admin'] },
    { path: '/typography', title: 'entreprise List',  icon:'library_books', class: '', roles:[, 'superadmin'] },
    { path: '/icons', title: 'Projects',  icon:'bubble_chart', class: '', roles:['admin', 'manager','employee'] },
    { path: '/maps', title: 'Activity',  icon:'location_on', class: '', roles:['manager','employee',"admin"] },
    { path: '/notifications', title: 'paiement',  icon:'notifications', class: '', roles:["employee"] },
    { path: '/upgrade', title: 'absences',  icon:'bubble_chart', class: '', roles:['employee'] },
    { path: '/paiementS', title: 'paiement',  icon:'bubble_chart', class: '', roles:['admin', 'manager',] },
    { path: '/upgradea', title: 'absences',  icon:'bubble_chart', class: '', roles:['admin', 'manager'] },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  appStorage = localStorage;

  user: User = new User();
  errMsg = "";

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

 



  update() {
    this.userService.updateUser(this.user).toPromise()
    .then(uu => this.loadUserProfile())
    .catch(err => this.errMsg = "Error when updating profile")
  }

  loadUserProfile(){
    let userId = localStorage.getItem("id") || ""
    this.userService.findById(userId).toPromise()
    .then(u => this.user = u)
    .catch(err => console.log)
  }
}

