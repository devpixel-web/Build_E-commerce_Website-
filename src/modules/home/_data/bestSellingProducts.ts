import cad_img_1 from '@assets/imgs/card_img_6.svg';
import cad_img_2 from '@assets/imgs/card_img_7.svg';
import cad_img_3 from '@assets/imgs/card_img_8.svg';
import cad_img_4 from '@assets/imgs/card_img_9.svg';

interface bestSellingProductsTypes {
  img: string;
  title: string;
  price: number;
  rating: number;
  totalReview: number;
}

export const bestSellingProducts: bestSellingProductsTypes[] = [
  {
    img: cad_img_1,
    title: 'Product 1',
    price: 29.99,
    rating: 4.5,
    totalReview: 120,
  },
  {
    img: cad_img_2,
    title: 'Product 2',
    price: 49.99,
    rating: 4.0,
    totalReview: 80,
  },
  {
    img: cad_img_3,
    title: 'Product 3',
    price: 19.99,
    rating: 4.7,
    totalReview: 200,
  },
  {
    img: cad_img_4,
    title: 'Product 4',
    price: 59.99,
    rating: 4.2,
    totalReview: 50,
  },
];
