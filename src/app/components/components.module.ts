import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import both FormsModule and ReactiveFormsModule
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarSComponent } from './sidebarS/sidebarS.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, // Add FormsModule to the imports array
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarSComponent // Add this line
  ],
  
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarSComponent
  ]
})
export class ComponentsModule { }
