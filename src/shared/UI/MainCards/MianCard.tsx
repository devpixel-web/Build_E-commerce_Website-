import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { Rating } from 'react-simple-star-rating';

interface MianCardProps {
  cardType?: 'discount' | 'new';
  img: string;
  discountAmount?: string;
  title: string;
  price: number;
  priceBeforeDiscount?: number;
  rating: number;
  totalReview: number;
}

export default function MianCard({
  cardType,
  img,
  discountAmount,
  title,
  price,
  priceBeforeDiscount,
  rating,
  totalReview,
}: MianCardProps) {
  const [isAddInWishList, setAddInWishList] = useState(false);

  return (
    <div className="h-[350px] w-[270px]">
      <div className="group relative flex h-[250px] w-full items-center justify-center overflow-hidden rounded bg-secondary">
        {cardType === 'discount' && (
          <div className="absolute left-3 top-3 rounded bg-secondary2 px-3 py-1 text-xs text-white">
            {discountAmount}
          </div>
        )}
        {cardType === 'new' && (
          <div className="absolute left-3 top-3 rounded bg-Button1 px-3 py-1 text-xs text-white">
            new
          </div>
        )}

        <button
          type="button"
          onClick={() => setAddInWishList(!isAddInWishList)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary">
          {isAddInWishList ? (
            <FaHeart className="text-secondary2" size={20} />
          ) : (
            <FaRegHeart size={20} />
          )}
        </button>

        <button
          type="button"
          onClick={() => setAddInWishList(!isAddInWishList)}
          className="absolute right-3 top-[54px] flex h-8 w-8 items-center justify-center rounded-full bg-primary">
          <MdOutlineRemoveRedEye size={20} />
        </button>

        <img src={img} className="object-contain" />

        <button
          type="button"
          className="absolute bottom-0 w-full translate-y-full bg-black py-2 text-center font-medium text-white duration-300 ease-out group-hover:translate-y-0">
          Add To Cart
        </button>
      </div>

      <div className="flex flex-col gap-2 pt-2">
        <p className="font-medium">{title}</p>
        <div className="flex items-center gap-3">
          <p className="text-secondary2">${price}</p>
          {cardType === 'discount' && (
            <p className="text-black/50 line-through"> $ {priceBeforeDiscount}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Rating
            readonly
            size={20}
            transition
            initialValue={rating}
            SVGclassName={'inline-block'}
          />
          <p className="text-sm text-black/50">({totalReview})</p>
        </div>
      </div>
    </div>
  );
}
