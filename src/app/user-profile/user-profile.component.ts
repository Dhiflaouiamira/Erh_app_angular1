import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = new User();
  errMsg = "";

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

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