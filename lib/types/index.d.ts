export interface Product {
  title: string;
  price: number;
  description: string;
  img: string;
  id: number;
}

export interface CartItem extends Product {
  quantity: number;
}
