import { Component, OnInit, TemplateRef } from '@angular/core';
import { Project } from 'app/models/project';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  modalRef: BsModalRef;
  selectedProject: Project = new Project(); // Store the selected project for editing or viewing details

  constructor(private modalService: BsModalService) {}

  projects: any[] = [
    {
      id: 1,
      projectName: 'Projet A',
      description: 'Description du projet A',
      startDate: new Date('2023-11-01'),
      endDate: new Date('2023-12-31'),
      status: 'En cours'
    },
    {
      id: 2,
      projectName: 'Projet B',
      description: 'Description du projet B',
      startDate: new Date('2023-11-05'),
      endDate: new Date('2023-12-30'),
      status: 'En attente'
    },
    {
      id: 3,
      projectName: 'Projet C',
      description: 'Description du projet C',
      startDate: new Date('2023-11-10'),
      endDate: new Date('2023-12-20'),
      status: 'Terminé'
    },
    {
      id: 4,
      projectName: 'Projet D',
      description: 'Description du projet D',
      startDate: new Date('2023-11-15'),
      endDate: new Date('2023-12-25'),
      status: 'En cours'
    },
    {
      id: 5,
      projectName: 'Projet E',
      description: 'Description du projet E',
      startDate: new Date('2023-11-20'),
      endDate: new Date('2023-12-15'),
      status: 'En attente'
    },
    {
      id: 6,
      projectName: 'Projet F',
      description: 'Description du projet F',
      startDate: new Date('2023-11-25'),
      endDate: new Date('2023-12-10'),
      status: 'Terminé'
    },
    {
      id: 7,
      projectName: 'Projet G',
      description: 'Description du projet G',
      startDate: new Date('2023-11-30'),
      endDate: new Date('2023-12-05'),
      status: 'En cours'
    },
    {
      id: 8,
      projectName: 'Projet H',
      description: 'Description du projet H',
      startDate: new Date('2023-12-01'),
      endDate: new Date('2023-12-31'),
      status: 'En attente'
    },
    {
      id: 9,
      projectName: 'Projet I',
      description: 'Description du projet I',
      startDate: new Date('2023-12-05'),
      endDate: new Date('2023-12-25'),
      status: 'Terminé'
    },
    {
      id: 10,
      projectName: 'Projet J',
      description: 'Description du projet J',
      startDate: new Date('2023-12-10'),
      endDate: new Date('2023-12-20'),
      status: 'En cours'
    }
  ];


  openAddProjectModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openEditProjectModal(template: TemplateRef<any>, project: Project) {
    this.selectedProject = { ...project };
    this.modalRef = this.modalService.show(template);
  }

  openDetailsProjectModal(template: TemplateRef<any>, project: Project) {
    this.selectedProject = { ...project };
    this.modalRef = this.modalService.show(template);
  }

  addProject(project: Project) {
    // Logic to add a new project
    // this.projects.push(project);
    this.modalRef.hide();
  }

  editProject(project: Project) {
    // Logic to edit the selected project
    // this.projects[index] = updatedProject;
    this.modalRef.hide();
  }

  deleteProject(project: Project) {
    // Logic to delete the selected project
    // this.projects.splice(index, 1);
  }

  ngOnInit(): void {}
}