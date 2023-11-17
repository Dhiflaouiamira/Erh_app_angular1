import { UserService } from '../../services/user/user.service';

import { FormResponse } from '../../models/form-response';


import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { AuthService } from 'app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  formResponse = new FormResponse();
  user: User = new User();

  constructor(private authService: AuthService,    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {}

  signUp(): void {
    if (this.validateUser(this.user)) {
      this.authService.register(this.user).toPromise()
        .then(res => {
          this.formResponse.setMessage(`Welcome ${this.user.firstName}, visit your email to check your login credentials.`);
          this.user = new User(); // Reset the user object after form submission
          if (confirm('Are you sure you want to delete this user?'))
          // Redirect to login after successful sign-up
          this.router.navigate(['/']); // Change '/login' to your actual login route
        })
        .catch(err => this.formResponse.setError(err.error));
    }
  }

  validateUser(user: User): boolean {
    // Implement your validation logic here
    // Return true if the user data is valid, otherwise return false
    return true;
  }
}
