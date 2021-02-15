import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        Lander
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <a href="https://o06vt.bemobtrcks.com/click/1?ns=c%3D39851a0d-62a0-4ff7-8dfe-f06323aed2f2..l%3D1ad1d544-01d5-4771-8b21-3576cbc81493..a%3D0..b%3D0">
          <Button className="text-sm">Start Earning Now</Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
