import cad_img_8 from '@assets/imgs/card_img_8.svg';
import cad_img_9 from '@assets/imgs/card_img_9.svg';
import cad_img_10 from '@assets/imgs/card_img_10.svg';
import cad_img_11 from '@assets/imgs/card_img_11.svg';
import cad_img_12 from '@assets/imgs/card_img_12.svg';
import cad_img_13 from '@assets/imgs/card_img_13.svg';
import cad_img_14 from '@assets/imgs/card_img_14.svg';
import cad_img_15 from '@assets/imgs/card_img_15.svg';

interface ourProductsTypes {
  cardType?: 'discount' | 'new';
  img: string;
  title: string;
  price: number;
  rating: number;
  totalReview: number;
}

export const ourProducts: ourProductsTypes[] = [
  {
    img: cad_img_8,
    title: 'Product 1',
    price: 29.99,
    rating: 4.5,
    totalReview: 120,
  },
  {
    img: cad_img_9,
    title: 'Product 2',
    price: 49.99,
    rating: 4.0,
    totalReview: 80,
  },
  {
    img: cad_img_10,
    title: 'Product 3',
    price: 19.99,
    rating: 4.7,
    totalReview: 200,
  },
  {
    cardType: 'new',
    img: cad_img_11,
    title: 'Product 4',
    price: 59.99,
    rating: 1.2,
    totalReview: 50,
  },
  {
    img: cad_img_12,
    title: 'Product 5',
    price: 59.99,
    rating: 4.2,
    totalReview: 50,
  },
  {
    cardType: 'new',
    img: cad_img_13,
    title: 'Product 6',
    price: 59.99,
    rating: 4.2,
    totalReview: 50,
  },
  {
    img: cad_img_14,
    title: 'Product 7',
    price: 59.99,
    rating: 3.3,
    totalReview: 50,
  },
  {
    img: cad_img_15,
    title: 'Product 8',
    price: 59.99,
    rating: 2,
    totalReview: 50,
  },
];
