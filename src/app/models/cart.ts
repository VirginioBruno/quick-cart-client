import { Product } from "./product";

export interface Cart {
    id: number;
    products: Product[];
    price: number;
    customerId: string;
}