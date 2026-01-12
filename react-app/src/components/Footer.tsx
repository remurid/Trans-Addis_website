import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface ContactInfo {
  icon: string;
  text: string;
  href?: string;
}

interface FooterProps {
  logoSrc: string;
  aboutText: string;
  exploreLinks: FooterLink[];
  links: FooterLink[];
  contactInfo: ContactInfo[];
  copyrightText: string;
  copyrightLink: string;
  socialLinks: { icon: string; href: string }[];
  shape?: string;
}

const Footer: React.FC<FooterProps> = ({
  logoSrc,
  aboutText,
  exploreLinks,
  links,
  contactInfo,
  copyrightText,
  copyrightLink,
  socialLinks,
  shape,
}) => {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget__column footer-widget__about">
                <div className="footer-widget__logo logo-retina">
                  <a href="/">
                    <img loading="lazy" decoding="async" width="124" height="48" src={logoSrc} alt="Jetly" />
                  </a>
                </div>
                <div className="footer-widget__about-text-box">
                  <p className="footer-widget__about-text">{aboutText}</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget__column footer-widget__Explore">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Explore</h3>
                </div>
                <ul className="footer-widget__Explore-list list-unstyled ml-0">
                  {exploreLinks.map((link, index) => (
                    <li key={index} className="menu-item">
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget__column footer-widget__links">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Links</h3>
                </div>
                <ul className="footer-widget__Explore-list list-unstyled ml-0">
                  {links.map((link, index) => (
                    <li key={index} className="menu-item">
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="footer-widget__column footer-widget__Contact">
                <div className="footer-widget__title-box">
                  <h3 className="footer-widget__title">Contact</h3>
                </div>
                <ul className="footer-widget__Contact-list list-unstyled ml-0">
                  {contactInfo.map((info, index) => (
                    <li key={index}>
                      <div className="icon">
                        <span aria-hidden="true" className={`fas ${info.icon}`}></span>
                      </div>
                      <div className="text">
                        <p>
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
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <div className="site-footer__bottom-left">
            <p className="site-footer__bottom-text">
              {copyrightText} <a href={copyrightLink}>Jetly.com</a>
            </p>
          </div>
          <div className="site-footer__bottom-right">
            <div className="site-footer__social">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.href}>
                  <i aria-hidden="true" className={`fab ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {shape && (
        <div className="site-footer__shape-1 zoom-fade-3">
          <img decoding="async" src={shape} alt="site-footer-shape-1" />
        </div>
      )}
    </footer>
  );
};

export default Footer;