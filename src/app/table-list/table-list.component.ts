import { Component, OnInit, TemplateRef } from '@angular/core';
import { User } from 'app/models/user';
import { UserService } from 'app/services/user/user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  users: User[] = [];
  newUser: User = new User();
  selectedUser: User = new User();
  modalRef: BsModalRef;
// Ajoutez une variable pour gérer l'affichage de l'erreur d'email existant
emailExistsError: boolean = false;

  constructor(private userService: UserService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Load users from the service
  loadUsers() {
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
    this.emailExistsError = false; // Reset the emailExistsError flag
  
    // Check if the email already exists
    const emailExists = this.users.some(existingUser => existingUser.email === user.email);
  
    if (emailExists) {
      console.error('User with this email already exists.');
      this.emailExistsError = true; // Display the error message
      return; // Exit the function to prevent adding the user
    }
  
    this.userService.addUser(user).subscribe(
      (addedUser: User) => {
        this.users.push(addedUser); // Add the new user to the list
        this.modalRef.hide(); // Close the modal after successful addition
      },
      (error: any) => {
        console.error('Error adding user:', error);
      }
    );
  }
  


  // Open the Add User modal
  openAddUserModal(addTemplate: TemplateRef<any>) {
    this.newUser = new User(); // Reset newUser object
    this.modalRef = this.modalService.show(addTemplate); // Open the modal
  }

  // Open the Edit User modal
  openEditUserModal(editTemplate: TemplateRef<any>, user: User) {
    this.selectedUser = { ...user }; // Create a copy of the selected user
    this.modalRef = this.modalService.show(editTemplate); // Open the modal
  }

  updateUser(selectedUser: User): void {
    this.userService.updateUser(selectedUser).subscribe(
      () => {
        this.modalRef.hide(); // Close the modal after successful update
      },
      (error: any) => {
        console.error('Error updating user:', error);
        // Log the complete error object for detailed information
        console.log(error);
      }
    );
  }
  

  
  openDetailsUserModal(detailsTemplate: TemplateRef<any>, user: User) {
    this.selectedUser = user; // Set the selected user for details
    this.modalRef = this.modalService.show(detailsTemplate); // Open the modal
  }

  deleteUser(userId: string): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          // Filter out the deleted user from the list
          this.users = this.users.filter(user => user.id !== userId);
        },
        (error: any) => {
          console.error('Error deleting user:', error);
          // Log the complete error object for detailed information
          console.log(error);
        }
      );
    }
  }
}


