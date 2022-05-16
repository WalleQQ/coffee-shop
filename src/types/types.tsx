export interface ICatalog {
  id: number;
  title: string;
  image: string;
  alt: string;
}

export interface IProducts {
  id: number;
  title: string;
  image: string;
  alt: string;
  description: string;
  oldPrice: number;
  price: number;
}
