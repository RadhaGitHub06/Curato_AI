
"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '../../Components/ui/button'
import { useRouter } from 'next/navigation';
import { useState } from "react";


import { Navbar,NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu } from '../../Components/ui/resizeable-navbar';

function Header() {
  const router = useRouter();
 
    const navItems = [
      {
        name: "Explore",
        link: "/dashboard/explore",
      },
      {
        name: "Upgrade",
        link: "/dashboard/upgrade",
      },
      {
        name: "Contact",
        link: "",
      },
    ];
   
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   
    return (
      <div className="relative w-full">
        <Navbar>
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="primary" href='/dashboard'>Login / signup</NavbarButton>
             
            </div>
          </NavBody>
   
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>
   


          </MobileNav>
        </Navbar>
   
      </div>
    );
  }

export default Header
