import { Product } from "./product";

export interface Order {
    price: Number;
    products: Product[];
    customerId: string;
    status: string;
}