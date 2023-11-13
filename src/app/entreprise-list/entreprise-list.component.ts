
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
  updateentrepriseDetails() {
    throw new Error('Method not implemented.');
    }
    
     
      formvalue!: FormGroup;
      constructor(private entrepriseService: EntrepriseService) { }
      entreprises: Entreprise[] = [];
      newEntreprise: Entreprise = new Entreprise();
      selectedentreprise:Entreprise= new Entreprise();
      showStatus = false;
    
      ngOnInit(): void {
        this.loadEntreprises();
      }
    
      loadEntreprises() {
        this.entrepriseService.findAll().toPromise()
          .then(oo => this.entreprises = oo)
          .catch(err => console.log)
       
      }
      fetchEntreprises() {
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
        this.entrepriseService.addEntreprise(entreprise).subscribe(
          (newEntreprise: Entreprise) => {
            this.entreprises.push(newEntreprise);
          },
          (error: any) => {
            console.error('Error adding entreprise:', error);
          }
        );
      }
    
      updateEntreprise(entreprise: Entreprise): void {
        this.entrepriseService.updateEntreprise(entreprise).subscribe(
          (updatedEntreprise: Entreprise) => {
            // Handle the updated entreprise if necessary
          },
          (error: any) => {
            console.error('Error updating entreprise:', error);
          }
        );
      }
      getAllEntreprises(): void {
        this.entrepriseService.findAll().toPromise()
        .then(oo => this.entreprises = oo)
        .catch(err => console.log)
      }
    
      deleteEntreprise(entrepriseId: string) {
    
        if (confirm('Are you sure you want to delete this entreprise?')) {
        this.entrepriseService.deleteEntreprise(entrepriseId).subscribe(
           
          (res) => {
            console.log(res);
            alert('entreprise deleted successfully');
    
            // After deleting the entreprise, fetch the updated list of entreprises again
            this.getAllEntreprises();
          },
          (err) => {
            console.error(err);
            alert('Something went wrong. Please check the console for more details.');
          }
        );
      }
    
    
    
    
    
    
    
    }}