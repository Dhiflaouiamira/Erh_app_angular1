import { User } from './user'; // Import the User model if it exists

export interface Absence {
  id?: number;
  employeeName: string;
  startDate: Date;
  endDate: Date;
  reason: string;
  approved: boolean;
  user: User;
}
