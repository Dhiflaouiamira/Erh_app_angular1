import { Role } from "./role";

export class User {
  id: string;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  phoneNumber: number = 0;
  cin: number = 0;
  image: string = '';
  department: string = '';
  address: string = '';
  dateOfBirth: Date = new Date(); 
  salary: number = 0;
  activated: boolean = false;
  role:Role=new Role()
}
