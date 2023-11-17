import { Component } from '@angular/core';

@Component({
  selector: 'app-entreprise-info',
  templateUrl: './entreprise-info.component.html',
  styleUrls: ['./entreprise-info.component.css']
})
export class EntrepriseInfoComponent {
  enterprise: any = {
    id: 1,
    nom: "Tech Solutions Inc.",
    adresse: "123 Tech Street",
    ville: "Techville",
    pays: "Techland",
    email: "contact@techsolutions.com",
    telephone: "123-456-7890",
    dateCreation: new Date("2015-07-15"),
    domaineActivite: "Technologie et services informatiques",
    logo: "url_vers_le_logo_de_techsolutions.jpg",
  };
}
