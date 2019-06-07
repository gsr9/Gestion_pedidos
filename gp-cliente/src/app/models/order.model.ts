import { User } from './user.model';
export class Order {
    id: number;
    firstPlate: string;
    secondPlate: string;
    dessert: string;
    date: Date;
    state: string;
    user: User;
}
