"use client"

import { useRouter } from 'next/navigation'
import { useState } from "react"

import { Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu
 } from '../../Components/ui/resizeable-navbar'

function Header() {
  const router = useRouter()

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
      link: "#contact",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="/dashboard">Login / Signup</NavbarButton>
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

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, index) => (
              <a
                key={`mobile-link-${index}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-300 py-2 block"
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col gap-4 mt-4">
              <NavbarButton
                variant="primary"
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  router.push("/dashboard")
                }}
              >
                Login / Signup
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}

export default Header
