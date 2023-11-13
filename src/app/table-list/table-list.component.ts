
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  updateuserDetails() {
    throw new Error('Method not implemented.');
    }
    
     
      formvalue!: FormGroup;
      constructor(private userService: UserService) { }
      users: User[] = [];
      newUser: User = new User();
      selecteduser:User= new User();
      showStatus = false;
    
      ngOnInit(): void {
        this.loadUsers();
      }
    
      loadUsers() {
        this.userService.findAll().toPromise()
          .then(oo => this.users = oo)
          .catch(err => console.log)
       
      }
      fetchUsers() {
        this.userService.findAll().subscribe(
          (users) => {
            this.users = users;
          },
          (err) => {
            console.error(err);
          }
        );
      }
      addUser(user: User): void {
        this.userService.addUser(user).subscribe(
          (newUser: User) => {
            this.users.push(newUser);
          },
          (error: any) => {
            console.error('Error adding user:', error);
          }
        );
      }
    
      updateUser(user: User): void {
        this.userService.updateUser(user).subscribe(
          (updatedUser: User) => {
            // Handle the updated user if necessary
          },
          (error: any) => {
            console.error('Error updating user:', error);
          }
        );
      }
      getAllUsers(): void {
        this.userService.findAll().toPromise()
        .then(oo => this.users = oo)
        .catch(err => console.log)
      }
    
      deleteUser(userId: string) {
    
        if (confirm('Are you sure you want to delete this user?')) {
        this.userService.deleteUser(userId).subscribe(
           
          (res) => {
            console.log(res);
            alert('user deleted successfully');
    
            // After deleting the user, fetch the updated list of users again
            this.getAllUsers();
          },
          (err) => {
            console.error(err);
            alert('Something went wrong. Please check the console for more details.');
          }
        );
      }
    
    
    
    
    
    
    
    }}