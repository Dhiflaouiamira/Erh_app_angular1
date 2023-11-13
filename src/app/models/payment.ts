import { User } from './user'; // Importer le modèle User s'il existe

export class Payment {
  id?: number;
  amount: number = 0;
  paymentDate: Date = new Date(); // Initialisation avec la date actuelle
  paymentMethod: string = '';
  status: string = ''; // Changez en type approprié si PaymentStatus est un enum ou un type personnalisé
  description: string = '';
  user: User = new User();
}
