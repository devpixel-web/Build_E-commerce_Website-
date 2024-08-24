import { MianCard } from '@UI/index';
import { ourProducts } from '../_data/ourProducts';

export default function ExploreOurProducts() {
  return (
    <div className="mx-auto mt-20 max-w-[1440px] px-[135px]">
      <div className="flex items-center gap-4 pb-6">
        <div className="h-10 w-5 rounded bg-secondary2"></div>
        <p className="font-semibold text-secondary2">This Month</p>
      </div>
      <div className="flex items-center justify-between gap-20 pb-8">
        <p className="text-4xl font-semibold">Best Selling Products</p>
      </div>

      <div className="grid grid-cols-4 gap-16">
        {ourProducts.map((card) => (
          <MianCard
            cardType={card.cardType}
            key={card.title}
            img={card.img}
            title={card.title}
            price={card?.price}
            rating={card.rating}
            totalReview={card.totalReview}
          />
        ))}
      </div>

      <div className="flex justify-center border-b py-16">
        <button type="button" className="rounded bg-secondary2 px-12 py-4 text-white">
          View All Products
        </button>
      </div>
    </div>
  );
}
