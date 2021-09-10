export class Mealplan {
  id: number;
  sku: string;
  name: string
  description: string;
  price: number;
  imageUrl: string;
  units: number;
  active: boolean;
  dateCreated: Date;
  lastUpdated: Date;
}
