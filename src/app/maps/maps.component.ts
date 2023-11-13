
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    modalRef: BsModalRef;
    selectedAbsence: any; // Store the selected absence for editing or viewing details
  
    absences: any[] = [
  {
    employeeName: 'John Doe',
    startDate: new Date('2023-11-01'),
    endDate: new Date('2023-11-03'),
    reason: 'Sick Leave',
    approved: true,
    user: {
      // User details here
    }
  },
  {
    employeeName: 'Jane Smith',
    startDate: new Date('2023-11-05'),
    endDate: new Date('2023-11-07'),
    reason: 'Vacation',
    approved: true,
    user: {
      // User details here
    }
  },
  {
    employeeName: 'Michael Johnson',
    startDate: new Date('2023-11-10'),
    endDate: new Date('2023-11-12'),
    reason: 'Family Emergency',
    approved: false,
    user: {
      // User details here
    }
  },
  {
    employeeName: 'Emily Williams',
    startDate: new Date('2023-11-15'),
    endDate: new Date('2023-11-17'),
    reason: 'Personal Reasons',
    approved: true,
    user: {
      // User details here
    }
  },
  {
    employeeName: 'William Brown',
    startDate: new Date('2023-11-20'),
    endDate: new Date('2023-11-22'),
    reason: 'Maternity Leave',
    approved: true,
    user: {
      // User details here
    }
  },
  {
    employeeName: 'Sophia Martinez',
    startDate: new Date('2023-11-25'),
    endDate: new Date('2023-11-27'),
    reason: 'Work-Related Injury',
    approved: true,
    user: {
      // User details here
    }
  },
  {
    employeeName: 'Oliver Garcia',
    startDate: new Date('2023-11-30'),
    endDate: new Date('2023-12-02'),
    reason: 'Personal Reasons',
    approved: false,
    user: {
      // User details here
    }
  },
  {
    employeeName: 'Isabella Lee',
    startDate: new Date('2023-12-05'),
    endDate: new Date('2023-12-07'),
    reason: 'Vacation',
    approved: true,
    user: {
      // User details here
    }
  },
  {
    employeeName: 'Ethan Rodriguez',
    startDate: new Date('2023-12-10'),
    endDate: new Date('2023-12-12'),
    reason: 'Paternity Leave',
    approved: true,
    user: {
      // User details here
    }
  },
  {
    employeeName: 'Ava Nguyen',
    startDate: new Date('2023-12-15'),
    endDate: new Date('2023-12-17'),
    reason: 'Personal Reasons',
    approved: false,
    user: {
      // User details here
    }
  }
  // Add more entries as needed
];

    constructor(private modalService: BsModalService) {}
  
    openAddAbsenceModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
  
    openEditAbsenceModal(template: TemplateRef<any>, absence: any) {
      this.selectedAbsence = absence;
      this.modalRef = this.modalService.show(template);
    }
  
    // Implement other functions for adding, editing, and deleting absences
  
    ngOnInit(): void {
      // Initialize data or perform other operations on component initialization
    }
  }