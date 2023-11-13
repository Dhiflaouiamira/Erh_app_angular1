import { Project } from './project'; // Import the Project model if it exists

export interface Activity {
  id?: number;
  activityName: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: string;
  project: Project;
}
