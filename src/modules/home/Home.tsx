import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { IoMdArrowUp } from 'react-icons/io';
import HeroSection from './_components/HeroSection';
import FlashSales from './_components/FlashSales';
import BrowseBySubCategory from './_components/BrowseBySubCategory';
import BestSellingProducts from './_components/BestSellingProducts';
import ExploreOurProducts from './_components/ExploreOurProducts';

export default function Home() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);
  const refScrollUp = useRef<HTMLDivElement>(null);

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition < 200) {
      return setshowGoTop(true);
    } else if (scrollPosition > 200) {
      return setshowGoTop(false);
    }
  };

  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  });

  return (
    <>
      <div ref={refScrollUp}></div>
      <HeroSection />
      <FlashSales />
      <BrowseBySubCategory />
      <BestSellingProducts />
      <ExploreOurProducts />

      <button
        type="button"
        onClick={handleScrollUp}
        className={classNames(
          { fixed: !showGoTop },
          { hidden: showGoTop },
          'bottom-0 right-0 z-50 m-5 rounded-full bg-secondary p-2'
        )}>
        <IoMdArrowUp size={30} />
      </button>
    </>
  );
}
