import cad_img_1 from '@assets/imgs/card_img_1.svg';
import cad_img_2 from '@assets/imgs/card_img_2.svg';
import cad_img_3 from '@assets/imgs/card_img_3.svg';
import cad_img_4 from '@assets/imgs/card_img_4.svg';
import cad_img_5 from '@assets/imgs/card_img_5.svg';

interface MainCardTypes {
  cardType: 'discount' | 'new';
  img: string;
  discountAmount: string;
  title: string;
  price: number;
  priceBeforDiscount: number;
  rating: number;
  totalReview: number;
}

export const flashSalesCards: MainCardTypes[] = [
  {
    cardType: 'discount',
    img: cad_img_1,
    discountAmount: '20%',
    title: 'Product 1',
    price: 29.99,
    priceBeforDiscount: 37.5,
    rating: 4.5,
    totalReview: 120,
  },
  {
    cardType: 'discount',
    img: cad_img_2,
    discountAmount: '50%',
    title: 'Product 2',
    price: 49.99,
    priceBeforDiscount: 100,
    rating: 4.0,
    totalReview: 80,
  },
  {
    cardType: 'discount',
    img: cad_img_3,
    discountAmount: '15%',
    title: 'Product 3',
    price: 19.99,
    priceBeforDiscount: 23.5,
    rating: 4.7,
    totalReview: 200,
  },
  {
    cardType: 'discount',
    img: cad_img_4,
    discountAmount: '50%',
    title: 'Product 4',
    price: 59.99,
    priceBeforDiscount: 59.99,
    rating: 4.2,
    totalReview: 50,
  },
  {
    cardType: 'discount',
    img: cad_img_5,
    discountAmount: '10%',
    title: 'Product 5',
    price: 39.99,
    priceBeforDiscount: 44.5,
    rating: 4.8,
    totalReview: 150,
  },
];
