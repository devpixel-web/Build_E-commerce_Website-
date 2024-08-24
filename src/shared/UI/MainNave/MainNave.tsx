import { BsCart3, BsHeart } from 'react-icons/bs';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { IoIosArrowDown } from 'react-icons/io';

import { Button } from '@shadecn/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@shadecn/components/ui/dropdown-menu';
import { ROUTES } from '@constants/routes';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export default function MainNave() {
  const navItems = [
    {
      lable: 'Home',
      route: ROUTES.HOME,
    },
    {
      lable: 'Contact',
      route: '',
    },
    {
      lable: 'About',
      route: '',
    },
    {
      lable: 'Sign Up',
      route: ROUTES.SIGN_UP,
    },
  ];
  return (
    <nav className="border-b">
      {/* OFF */}
      <div className="bg-black">
        <div className="mx-auto flex h-12 max-w-[1440px] items-center justify-end px-[135px]">
          <p className="flex items-center text-sm text-white">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <span>
              <button type="button" className="text-sm font-semibold underline">
                ShopNow
              </button>
            </span>
          </p>

          {/* dropdowenMenu */}
          <div className="pl-[231px]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="z-10 px-0 text-white">
                  English
                  <IoIosArrowDown size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Arabic</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* main nav */}
      <div className="mx-auto flex max-w-[1440px] justify-between px-[135px] pb-4 pt-10">
        <p className="text-2xl font-bold"> Exclusive</p>

        {/* nav item */}

        <ul className="flex items-center gap-12">
          {navItems.map((nav) => (
            <NavLink
              key={nav.lable}
              to={nav.route}
              className={({ isActive }) => classNames({ 'border-b-2': isActive })}>
              {nav.lable}
            </NavLink>
          ))}
        </ul>

        {/*  search and icons */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 rounded bg-secondary pr-5">
            <input
              className="bg-secondary px-5 py-2.5 outline-0 placeholder:text-xs"
              placeholder="What are you looking for?"
            />
            <HiMagnifyingGlass size={20} />
          </div>
          <div className="flex items-center gap-4">
            <BsHeart size={20} />
            <BsCart3 size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
}
