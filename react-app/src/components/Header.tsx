"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";
import { usePathname } from "next/dist/client/components/navigation";

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

interface SocialLink {
  icon: string;
  href: string;
}

interface ContactInfo {
  icon: string;
  text: string;
  href?: string;
}

interface HeaderProps {
  logoSrc: string;
  menuItems: MenuItem[];
  socialLinks: SocialLink[];
  contactInfo: ContactInfo[];
}

const Header: React.FC<HeaderProps> = ({
  logoSrc,
  menuItems,
  socialLinks,
  contactInfo,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const [isSticky, setIsSticky] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  const headerClass = isHome 
    ? "main-header-three--home" 
    : "main-header-three--inner";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsSticky(scrollY > 50);
      setShowScroll(scrollY > 125);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      {/* <header className="main-header-three"> */}
      <header className={`main-header-three ${headerClass}`}>
        <div className="main-header-three__top">
          <div className="main-header-three__top-inner">
            <div className="main-header-three__top-left">
              <ul className="list-unstyled ml-0 main-header-three__contact-list">
                {contactInfo.map((info, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                  >
                    <div
                      className="icon"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <i aria-hidden="true" className={`fas ${info.icon}`}></i>
                    </div>
                    <div className="text">
                      <p style={{ margin: 0 }}>
                        {info.href ? (
                          <a href={info.href}>{info.text}</a>
                        ) : (
                          info.text
                        )}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="main-header-three__top-right">
              <div className="main-header-three__social">
                {socialLinks.map((link, index) => (
                  <a key={index} href={link.href}>
                    <i aria-hidden="true" className={`fab ${link.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <nav className="main-menu main-menu-three"> */}
        <nav
          className={`main-menu main-menu-three ${
            isSticky ? "stricky-fixed animated slideInDown" : ""
          }`}
        >
          <div className="main-menu-three__wrapper">
            <div className="main-menu-three__wrapper-inner">
              <div className="main-menu-three__left">
                <div className="main-menu-three__logo logo-retina">
                  <Link href="/">
                    <img
                      decoding="async"
                      width="134"
                      height="34"
                      src={logoSrc}
                      id="thm-logo"
                      alt="Jetly"
                    />
                  </Link>
                </div>
              </div>
              <div className="main-menu-three__main-menu-box">
                <a
                  href="#"
                  className="mobile-nav__toggler"
                  onClick={toggleMobileNav}
                >
                  <i className="fa fa-bars"></i>
                </a>
                <div className="menu-onepage-menu-two-container">
                  <ul
                    id="menu-onepage-menu-two"
                    className="main-menu__list one-page-scroll-menu"
                  >
                    {/* {menuItems.map((item, index) => (
                      <li
                        key={index}
                        className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-${
                          index + 1324
                        }`}
                      >
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))} */}
                    {menuItems.map((item, index) => {
                      const isActive = pathname === item.href;

                      return (
                        <li
                          key={index}
                          className={`menu-item ${
                            isActive ? "current-menu-item" : ""
                          }`}
                        >
                          <Link href={item.href}>{item.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/* <div className="main-menu-three__right">
                <div className="main-menu-three__search-cart-box">
                  <div className="main-menu-three__search-box">
                    <a href="#" className="main-menu-three__search search-toggler fa fa-search" onClick={toggleSearch}></a>
                  </div>
                  <div className="main-menu-three__cart-box">
                    <Link href="/booking" className="main-menu-three__cart fa fa-shopping-cart"></Link>
                  </div>
                </div>
              </div> */}
              <div className="main-menu-three__right">
                <div className="main-menu-three__search-cart-box">
                  <div
                    className="main-menu-three__search-box"
                    onClick={toggleSearch}
                  >
                    <Search className="icon" />
                  </div>

                  <div className="main-menu-three__cart-box">
                    <Link href="/booking">
                      <ShoppingCart className="icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="stricky-header stricked-menu main-menu main-menu-three">
        <div className="sticky-header__content"></div>
      </div>

      <div
        className={`mobile-nav__wrapper ${isMobileNavOpen ? "expanded" : ""}`}
      >
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={toggleMobileNav}
        ></div>
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={toggleMobileNav}
          ></span>
          <div className="logo-box logo-retina">
            <a href="/">
              <img
                decoding="async"
                width="134"
                height="34"
                src={logoSrc.replace("dark", "light")}
                id="mobile-thm-logo"
                alt="Jetly"
              />
            </a>
          </div>
          <div className="mobile-nav__container"></div>
          <ul className="mobile-nav__contact list-unstyled ml-0">
            {contactInfo.slice(1).map((info, index) => (
              <li key={index}>
                <i className={`fa ${info.icon}`}></i>
                <a href={info.href}>{info.text}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              {socialLinks.map((link, index) => (
                <a key={index} className="icon-svg" href="#">
                  <span
                    aria-hidden="true"
                    className={`fab ${link.icon}`}
                  ></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`search-popup ${isSearchOpen ? "active" : ""}`}>
        <div
          className="search-popup__overlay search-toggler"
          onClick={toggleSearch}
        ></div>
        <div className="search-popup__content">
          <form action="/">
            <label htmlFor="search" className="sr-only">
              search here
            </label>
            <input
              type="text"
              id="search"
              name="s"
              placeholder="Search Here..."
            />
            <button
              type="submit"
              aria-label="search submit"
              className="thm-btn"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>

      {/* <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
        <i className="fa fa-arrow-up"></i>
      </a> */}
      <a
        href="#"
        onClick={scrollToTop}
        className={`scroll-to-target scroll-to-top ${
          showScroll ? "visible" : ""
        }`}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: showScroll ? 1 : 0,
          visibility: showScroll ? "visible" : "hidden",
          transition: "all 0.4s ease",
        }}
      >
        <i className="fa fa-arrow-up"></i>
      </a>
    </>
  );
};

export default Header;
