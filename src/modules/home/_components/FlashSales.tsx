import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@shadecn/components/ui/carousel';
import { MianCard } from '@UI/index';
import { flashSalesCards } from '../_data/flashSalesCards';

export default function FlashSales() {
  return (
    <div className="mx-auto mt-36 max-w-[1440px] px-[135px]">
      <div className="flex items-center gap-4 pb-6">
        <div className="h-10 w-5 rounded bg-secondary2"></div>
        <p className="font-semibold text-secondary2">Today’s</p>
      </div>

      <div className="flex items-center gap-20 pb-8">
        <p className="text-4xl font-semibold">Flash Sales</p>

        <div className="flex items-center gap-2">
          <div>
            <p className="text-xs font-medium">Days</p>
            <p className="text-[32px] font-bold">03</p>
          </div>
          <p className="text-3xl text-hoverButton">:</p>
          <div>
            <p className="text-xs font-medium">Hours</p>
            <p className="text-[32px] font-bold">12</p>
          </div>
          <p className="text-3xl text-hoverButton">:</p>
          <div>
            <p className="text-xs font-medium">Minutes</p>
            <p className="text-[32px] font-bold">50</p>
          </div>
          <p className="text-3xl text-hoverButton">:</p>
          <div>
            <p className="text-xs font-medium">Seconds</p>
            <p className="text-[32px] font-bold">36</p>
          </div>
        </div>
      </div>
      <div>
        {/* Carousel chadcn */}
        <Carousel
          opts={{
            align: 'start',
          }}>
          <CarouselContent>
            {flashSalesCards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <MianCard
                  key={card.title}
                  cardType={card.cardType}
                  img={card.img}
                  discountAmount={card.discountAmount}
                  title={card.title}
                  price={card?.price}
                  priceBeforeDiscount={card.priceBeforDiscount}
                  rating={card.rating}
                  totalReview={card.totalReview}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div>
            <div className="absolute -top-14 right-10">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
      </div>
      <div className="flex justify-center border-b py-16">
        <button type="button" className="bg-secondary2 px-12 py-4 text-white">
          {' '}
          View All Products
        </button>
      </div>
    </div>
  );
}
