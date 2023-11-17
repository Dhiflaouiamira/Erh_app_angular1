import { Project } from '../../models/project';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private clientPhoneNumber: string | null = null; // Initialize the variable to store the client's phone number

  endpoint = environment.API_URL + '/projects';
  private projects: Project[] = []

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Project[]>(this.endpoint);
  }

  addProject(project: Project) {
    delete project.id;
    console.log(project)
    return this.http.post<Project>(this.endpoint, project).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 409) {
          alert('Project already exists.');
        }
        return throwError(error);
      })
    );
  }

  updateProject(project: Project) {
    return this.http.put<Project>(`${this.endpoint}/${project.id}`, project);
  }

  findById(projectId: string) {
    return this.http.get<Project>(`${this.endpoint}/${projectId}`);
  }

  deleteProject(projectId: string) {
    return this.http.delete(`${this.endpoint}/${projectId}`);
  }

  getProject(_id: string) {
    return this.http.get<Project>(`${this.endpoint}/${_id}`);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }



  searchProjects(searchTerm: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.endpoint}?search=${searchTerm}`)
  }

  filterbyrole(role: string): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.endpoint}?role=${role}`);
  }



 
  
}



