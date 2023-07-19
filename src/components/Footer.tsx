import React from 'react';
import Link from 'next/link';
import { Icons } from '@/components/Icons';
import NextImage from '@/components/ui/NextImage';

const Footer = () => {
  return (
    <footer className='Footer overflow-hidden'>

      {/* Main Footer */}
      <div className="footer_top 2xl:bg-[url('/images/bg-footer.webp')] bg-black bg-cover py-5  xl:py-[60px] 2xl:py-[60px] px-4">
        <div className="div_container grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-5 gap-3">
          {/* Footer Info */}
          <div className="info_footer">
            <Link aria-label="logo" href={'/'} className='w-fit'>
              <NextImage src={'/images/white-logo.webp'} alt='Instant Design Studio Logo' height={57} width={162} />
            </Link>
            <p className="web_desc text-[14px] text-white my-10">Full-stack Web, Mobile Design and Development Company.</p>
          </div>
          {/* Quick Links */}
          <div className="quick_links">
            <h2 className="text-[18px] text-white mb-6">Quick Links</h2>
              <Link aria-label="Home" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Home
                </Link>
              <Link aria-label="About Us" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                About Us
                </Link>
              <Link aria-label="Packages" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Packages
                </Link>
              <Link aria-label="Combo Packages" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Combo Packages
                </Link>
              <Link aria-label="Portfolio" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Portfolio
                </Link>
              <Link aria-label="Reviews" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Reviews
                </Link>
          </div>
          {/* Services */}
          <div className="services">
            <h2 className="text-[18px] text-white mb-6">Services</h2>
              <Link aria-label="Website Development" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Website Development
                </Link>
              <Link aria-label="Logo Design" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Logo Design
                </Link>
              <Link aria-label="Ecommerce Solutions" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Ecommerce Solutions
                </Link>
              <Link aria-label="Animation" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Animation
                </Link>
              <Link aria-label="Illustration" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Illustration
                </Link>
              <Link aria-label="Marketing Collateral" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Marketing Collateral
                </Link>
          </div>
          {/* More Services */}
          <div className="more-services">
            <h2 className="text-[18px] text-white mb-6">More Services</h2>
              <Link aria-label="Digital Marketing" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Digital Marketing
                </Link>
              <Link aria-label="Creative Copywriting" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Creative Copywriting
                </Link>
              <Link aria-label="Mobile Apps" href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Mobile Apps
                </Link>
              <Link aria-label="SEO Servicess"  href={'/'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                SEO Servicess
                </Link>
          </div>
          {/* Contact */}
          <div className="Contact_info">
            <h2 className="text-[18px] text-white mb-6">Get in Touch Now!</h2>
              <Link aria-label="Number" href={'tel:937-814-5702'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                937-814-5702
                </Link>
              <Link aria-label="Email" href={'mailto:instantdesignstudio.com'} className='text-white tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                instantdesignstudio.com
                </Link>
              <Link aria-label="Address" href={'#'} className='text-white relative tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue pl-5'>
                <Icons.play className='w-[14px] h-[14px] absolute top-1 left-0' />
                261 North Main St. Front Office Building Centerville, OH 45459
                </Link>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="footer_bottom border-t border-t-[#5d5c5e] bg-[#212121] py-3 px-4">
        <div className="div_container flex items-center justify-center gap-3 flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between xl:justify-between 2xl:justify-between">
          <p className="text-white">
            Copyright © 2023 Instant Design Studio All Rights Reserved.
          </p>
          <div className="socials flex items-center gap-2">
            <Link aria-label='Facebook'
              href={
                'https://www.facebook.com/people/Instant-Design-Studio/100086453293848/'
              }
              className="facebook_social flex items-center justify-center rounded-full bg-white p-2"
            >
              <Icons.facebook className="" />
            </Link>
            <Link aria-label='Instagram'
              href={'https://www.instagram.com/instantdesignstudio1/'}
              className="facebook_social flex items-center justify-center rounded-full bg-white p-2"
            >
              <Icons.insta className="" />
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
