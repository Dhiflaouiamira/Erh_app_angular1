import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './components/login/login.component'; // Import LoginComponent
import { SignupComponent } from './components/signup/signup.component'; // Import SignupComponent
import { ModalModule } from 'ngx-bootstrap/modal';
import { SuperadminLayoutComponent } from './layouts/superAdmin-layout/admin-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent, // Add LoginComponent to the declarations array
    SignupComponent, // Add SignupComponent to the declarations array
    SuperadminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule,
    RouterModule.forRoot([], { useHash: false }),
    ModalModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
