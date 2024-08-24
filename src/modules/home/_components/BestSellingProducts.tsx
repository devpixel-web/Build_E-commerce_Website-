import { MianCard } from '@UI/index';
import jbl from '@assets/imgs/jbl.svg';
import { bestSellingProducts } from '../_data/bestSellingProducts';

export default function BestSellingProducts() {
  return (
    <div className="mx-auto mt-20 max-w-[1440px] px-[135px]">
      <div className="flex items-center gap-4 pb-6">
        <div className="h-10 w-5 rounded bg-secondary2"></div>
        <p className="font-semibold text-secondary2">This Month</p>
      </div>
      <div className="flex items-center justify-between gap-20 pb-8">
        <p className="text-4xl font-semibold">Best Selling Products</p>

        <button type="button" className="rounded bg-secondary2 px-12 py-3 text-white">
          View All
        </button>
      </div>

      <div className="flex justify-between">
        {bestSellingProducts.map((card) => (
          <MianCard
            key={card.title}
            img={card.img}
            title={card.title}
            price={card?.price}
            rating={card.rating}
            totalReview={card.totalReview}
          />
        ))}
      </div>

      <div className="mt-36 flex justify-between bg-text2 px-14">
        <div className="flex flex-col justify-center py-16">
          <p className="font-semibold text-Button1">Categories</p>
          <p className="whitespace-nowrap pt-8 text-5xl font-semibold text-white">
            Enhance Your<br></br>Music Experience
          </p>
          <div className="flex items-center gap-6 pt-8">
            <div className="flex h-16 w-1/6 flex-col items-center justify-center rounded-full bg-white">
              <p>23</p>
              <p className="text-xs">Hours</p>
            </div>
            <div className="flex h-16 w-1/6 flex-col items-center justify-center rounded-full bg-white">
              <p>05</p>
              <p className="text-xs">Days</p>
            </div>
            <div className="flex h-16 w-1/6 flex-col items-center justify-center rounded-full bg-white">
              <p>59</p>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="flex h-16 w-1/6 flex-col items-center justify-center rounded-full bg-white">
              <p>35</p>
              <p className="text-xs">Seconds</p>
            </div>
          </div>
          <button type="button" className="mt-8 w-fit rounded bg-Button1 px-12 py-4 text-white">
            Buy Now!
          </button>
        </div>
        <img className="w-[700px]" src={jbl} />
      </div>
    </div>
  );
}
