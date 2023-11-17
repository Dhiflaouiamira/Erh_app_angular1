
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Entreprise } from 'app/models/entreprise';
import { EntrepriseService } from 'app/services/entreprise/entreprise.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.css']
})
export class TypographyComponent implements OnInit {
  entreprises: Entreprise[] = [];
  newEntreprise: Entreprise = new Entreprise();
  selectedEntreprise: Entreprise = new Entreprise();
  modalRef: BsModalRef;
// Ajoutez une variable pour gérer l'affichage de l'erreur d'email existant
emailExistsError: boolean = false;

  constructor(private entrepriseService: EntrepriseService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.loadEntreprises();
  }

  // Load entreprises from the service
  loadEntreprises() {
    this.entrepriseService.findAll().subscribe(
      (entreprises) => {
        this.entreprises = entreprises;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  addEntreprise(entreprise: Entreprise): void {
    this.emailExistsError = false; // Reset the emailExistsError flag
  
    // Check if the email already exists
    const emailExists = this.entreprises.some(existingEntreprise => existingEntreprise.email === entreprise.email);
  
    if (emailExists) {
      console.error('Entreprise with this email already exists.');
      this.emailExistsError = true; // Display the error message
      return; // Exit the function to prevent adding the entreprise
    }
  
    this.entrepriseService.addEntreprise(entreprise).subscribe(
      (addedEntreprise: Entreprise) => {
        this.entreprises.push(addedEntreprise); // Add the new entreprise to the list
        this.modalRef.hide(); // Close the modal after successful addition
      },
      (error: any) => {
        console.error('Error adding entreprise:', error);
      }
    );
  }
  


  // Open the Add Entreprise modal
  openAddEntrepriseModal(addTemplate: TemplateRef<any>) {
    this.newEntreprise = new Entreprise(); // Reset newEntreprise object
    this.modalRef = this.modalService.show(addTemplate); // Open the modal
  }

  // Open the Edit Entreprise modal
  openEditEntrepriseModal(editTemplate: TemplateRef<any>, entreprise: Entreprise) {
    this.selectedEntreprise = { ...entreprise }; // Create a copy of the selected entreprise
    this.modalRef = this.modalService.show(editTemplate); // Open the modal
  }

  updateEntreprise(selectedEntreprise: Entreprise): void {
    this.entrepriseService.updateEntreprise(selectedEntreprise).subscribe(
      () => {
        this.modalRef.hide(); // Close the modal after successful update
      },
      (error: any) => {
        console.error('Error updating entreprise:', error);
        // Log the complete error object for detailed information
        console.log(error);
      }
    );
  }
  

  
  openDetailsEntrepriseModal(detailsTemplate: TemplateRef<any>, entreprise: Entreprise) {
    this.selectedEntreprise = entreprise; // Set the selected entreprise for details
    this.modalRef = this.modalService.show(detailsTemplate); // Open the modal
  }

  deleteEntreprise(entrepriseId: string): void {
    if (confirm('Are you sure you want to delete this entreprise?')) {
      this.entrepriseService.deleteEntreprise(entrepriseId).subscribe(
        () => {
          // Filter out the deleted entreprise from the list
          this.entreprises = this.entreprises.filter(entreprise => entreprise.id !== entrepriseId);
        },
        (error: any) => {
          console.error('Error deleting entreprise:', error);
          // Log the complete error object for detailed information
          console.log(error);
        }
      );
    }
  }
}


