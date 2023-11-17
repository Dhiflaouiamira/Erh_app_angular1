import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  projects: any[] = []; // Utilisation d'un tableau de type any pour une liste statique

  constructor() {}

  ngOnInit(): void {
    // Initialisation de la liste statique de projets directement dans le composant
    this.projects = [
      {
        id: 1,
        projectName: 'Project A',
        description: 'Description of Project A',
        startDate: new Date('2023-01-01'),
        endDate: new Date('2023-12-31'),
        status: 'In Progress'
      },
      {
        id: 2,
        projectName: 'Project B',
        description: 'Description of Project B',
        startDate: new Date('2023-02-15'),
        endDate: new Date('2023-11-30'),
        status: 'Completed'
      },
      // Ajoutez d'autres projets si nécessaire
    ];
  }
}
