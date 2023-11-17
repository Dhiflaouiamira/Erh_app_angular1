import { Component, OnInit, TemplateRef } from '@angular/core';
import { Project } from 'app/models/project';
import { ProjectService } from 'app/services/project/project.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-icons',
  templateUrl: './icon.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

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
