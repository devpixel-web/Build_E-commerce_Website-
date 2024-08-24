import { EmblaOptionsType } from 'embla-carousel';
import { EmblaCarousel } from '@UI/index';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@shadecn/components/ui/accordion';

import '@UI/EmblaCarousel/style/embla.css';
import { categories } from '../_data/categories';

export default function HeroSection() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDES = [0, 1, 2, 3];
  return (
    <div className="mx-auto max-w-[1440px] px-[135px]">
      <div className="flex gap-11">
        {/* Accordion */}
        <div className="border-r pr-2 pt-10">
          <Accordion type="single" collapsible>
            {categories.map((category) => (
              <AccordionItem key={category.value} value={category.value}>
                <AccordionTrigger>{category.title}</AccordionTrigger>
                {category.subcategories?.map((subcategory) => (
                  <AccordionContent key={subcategory}>{subcategory}</AccordionContent>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* EmblaCarousel */}
        <div className="flex-grow pt-10">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
}
