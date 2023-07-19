'use client';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/Button';
import { navLinks } from '@/content/navlinks';
// import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/NvigationMenu';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/Sheet';
import useRQGlobalState from '@/utils/useRQGlobalState';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modalActive, setModalActive]: any = useRQGlobalState("modal", false);

  return (
    <>
      <div className="fluid_container fixed inset-x-0 top-0 z-[2]  flex h-[99px] items-center justify-between border-b border-zinc-300 bg-white shadow-xl py-2 text-[21px]">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Link aria-label='Instant Design Studio' href={'/'}>
            <Icons.logo className="h-[71px] w-[200px]" />
          </Link>
          <div className="menu  hidden items-center 2xl:flex">
            <NavigationMenu>
              <NavigationMenuList className="">
                {navLinks.map((navLink) => (
                  <NavigationMenuItem
                    key={navLink.id}
                    className="h-full w-full"
                  >
                    {navLink.sublinks ? (
                      <>
                        <NavigationMenuTrigger className="h-full w-[100%]">
                          <Link aria-label={navLink.name} href={navLink.src} className="h-full w-full">
                            {navLink.name}
                          </Link>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col items-start justify-center  border-b border-b-white ">
                          {navLink.sublinks?.map((sublink) => (
                            <NavigationMenuLink
                              className={
                                'w-full border-b border-b-white py-2 text-[16px]'
                              }
                              key={sublink.id}
                              href={sublink.src}
                            >
                              {sublink.name}
                            </NavigationMenuLink>
                          ))}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        href={navLink.src}
                      >
                        {navLink.name}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* Contact */}
        <div className="nav_contact flex items-center gap-4 ">
          <div className=" hidden items-center gap-4 lg:flex xl:flex 2xl:flex">
            <Link aria-label="Phone"
              href={'tel:937-814-5702'}
              className="flex h-full items-center gap-4"
            >
              <Icons.phone className="h-[18px] w-[18px]" />
              <span className="text-[16px] font-medium">937-814-5702</span>
            </Link>
            <Button variant={'default'} onClick={() => setModalActive(true)} >Get In Touch</Button>
          </div>


          <Sheet>
            <SheetTrigger asChild>
              {/* Humberger Menu */}
              <div
                className="hamburder_menu z-[5] h-[full] 2xl:hidden cursor-pointer"
                onClick={(e) => setIsMobileMenuOpen(!isMobileMenuOpen)}
                // aria-label='navigation'
              >
                <Icons.menu className="h-[40px] w-[40px] text-blue" />
              </div>
            </SheetTrigger>
            <SheetContent side={'full'} className="border-l-0 pt-[60px] overflow-x-hidden overflow-y-auto">
              {/* Mobile Menu Content */}
              <div className="fluid_container  flex flex-col overflow-auto text-white">
                <div className="mobile_menu  flex flex-col items-center justify-center">
                  <ul className="flex w-full flex-col items-center justify-center gap-3">
                    {navLinks.map((navLink) => (
                      <li className="menu_item w-full" key={navLink.id}>
                        {navLink.sublinks ? (
                          <>
                            <div className="hov group w-full">
                              <p aria-label={navLink.name}
                              onClick={(e) => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                // href={navLink.src}
                                className={'flex w-full items-center gap-3'}
                                // className={navigationMenuTriggerStyle()+"w-full"}
                              >
                                {navLink.name}
                                <ChevronDown
                                  className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-hover:rotate-180"
                                  aria-hidden="true"
                                />
                              </p>
                              <div className="top-[20px] hidden w-full  animate-appear-down flex-col items-start justify-center gap-3  border-b bg-gradient-to-r from-blue to-purpule px-[25px] py-[15px] group-hover:flex">
                                {navLink.sublinks?.map((sublink) => (
                                  <SheetTrigger asChild key={sublink.id}>
                                  <Link aria-label={navLink.name}
                                  onClick={(e) => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    href={sublink.src}
                                    className={'w-full animate-appear'}
                                    key={sublink.id}
                                  >
                                    {sublink.name}
                                  </Link>
                                  </SheetTrigger>
                                ))}
                              </div>
                            </div>
                          </>
                        ) : (
                          <SheetTrigger asChild>
                          <Link aria-label={navLink.name} href={navLink.src} className={'w-full '} onClick={(e) => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {navLink.name}
                          </Link>
                          </SheetTrigger>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile Menu */}
    </>
  );
};

export default Navbar;
