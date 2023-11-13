import { User } from './user'; // Import the User model if it exists

export class Role {
  id?: number;
  libelle: string="";
  users?: User[];
}
