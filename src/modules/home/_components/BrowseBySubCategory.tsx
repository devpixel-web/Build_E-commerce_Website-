import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@shadecn/components/ui/carousel';
import { SubCard } from '@UI/index';
import { BsSmartwatch } from 'react-icons/bs';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { IoCameraOutline, IoPhonePortraitOutline } from 'react-icons/io5';
import { MdOutlineHeadphones } from 'react-icons/md';
import { LuGamepad } from 'react-icons/lu';

export default function BrowseBySubCategory() {
  const subCards = [
    {
      icon: <IoPhonePortraitOutline size={50} />,
      text: 'Phone',
    },
    {
      icon: <HiOutlineComputerDesktop size={50} />,
      text: 'Computers',
    },
    {
      icon: <BsSmartwatch size={50} />,
      text: 'SmartWatch',
    },
    {
      icon: <IoCameraOutline size={50} />,
      text: 'Camera',
    },
    {
      icon: <MdOutlineHeadphones size={50} />,
      text: 'Head phones',
    },
    {
      icon: <LuGamepad size={50} />,
      text: 'Gaming',
    },
  ];
  return (
    <div className="mx-auto mt-20 max-w-[1440px] px-[135px]">
      <div className="flex items-center gap-4 pb-6">
        <div className="h-10 w-5 rounded bg-secondary2"></div>
        <p className="font-semibold text-secondary2">Sub Categories</p>
      </div>
      <div className="flex items-center gap-20 pb-8">
        <p className="text-4xl font-semibold">Browse By Sub Category</p>
      </div>

      <div>
        {/* Carousel chadcn */}
        <Carousel
          opts={{
            align: 'start',
          }}>
          <CarouselContent>
            {subCards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                <SubCard key={card.text} icon={card.icon} text={card.text} />
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
    </div>
  );
}
