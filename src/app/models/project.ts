import { Activity } from './activity';
import { User } from './user'; 
import { Entreprise } from './entreprise'; 

export class Project {
  id?: number;
  projectName: string = '';
  description: string = '';
  startDate: Date = new Date(); 
  endDate: Date = new Date(); 
  status: string = '';
  activitys?: Activity[] = [];
  user: User = new User(); 
  entreprise: Entreprise = new Entreprise(); 
}
