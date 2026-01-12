import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Gallery() {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact-us' },
    { label: 'News', href: '/blog' },
  ];

  const socialLinks = [
    { icon: 'fa-facebook-f', href: 'http://www.facebook.com/' },
    { icon: 'fa-twitter', href: 'http://www.twitter.com/' },
    { icon: 'fa-instagram', href: 'http://www.instagram.com/' },
    { icon: 'fa-pinterest-p', href: 'http://www.pinterest.com/' },
  ];

  const contactInfo = [
    { icon: 'fa-map-marker', text: '30 Commercial road fratton, Australia' },
    { icon: 'fa-envelope-open', text: 'needhelp@company.com', href: 'mailto:needhelp@company.com' },
  ];

  const exploreLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Team', href: '/team' },
  ];

  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Charters', href: '/charters' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'News', href: '/news' },
  ];

  const footerContactInfo = [
    { icon: 'fa-phone', text: '+92 ( 8800 ) - 6780', href: 'tel:+9288006780' },
    { icon: 'fa-envelope', text: 'needhelp@company.com', href: 'mailto:needhelp@company.com' },
    { icon: 'fa-map-marker', text: '30 broklyn golden street. New York' },
  ];

  const galleryImages = [
    { src: "/uploads/2023/01/gallery-page-1.jpg", alt: "Luxury Jet Interior", delay: "100ms" },
    { src: "/uploads/2023/01/gallery-page-2.jpg", alt: "Private Jet Fleet", delay: "200ms" },
    { src: "/uploads/2023/01/gallery-page-3.jpg", alt: "VIP Terminal Service", delay: "300ms" },
    { src: "/uploads/2023/01/gallery-page-4.jpg", alt: "Business Jet Cabin", delay: "100ms" },
    { src: "/uploads/2023/01/gallery-page-5.jpg", alt: "Luxury Aviation", delay: "200ms" },
    { src: "/uploads/2023/01/gallery-page-6.jpg", alt: "Executive Travel", delay: "300ms" }
  ];

  return (
    <div className="site page-wrapper">
      <Header
        logoSrc="/uploads/2023/01/logo-dark.png"
        menuItems={menuItems}
        socialLinks={socialLinks}
        contactInfo={contactInfo}
      />

      <main>
        <section className="page-header">
          <div className="page-header-bg"></div>
          <div className="main-slider-border"></div>
          <div className="main-slider-border main-slider-border-two"></div>
          <div className="main-slider-border main-slider-border-three"></div>
          <div className="main-slider-border main-slider-border-four"></div>
          <div className="main-slider-border main-slider-border-five"></div>
          <div className="main-slider-border main-slider-border-six"></div>
          <div className="container">
            <div className="page-header__inner">
              <h2>Gallery</h2>
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li><span>Gallery</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="gallery-page">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">our gallery</span>
              <h2 className="section-title__title">Explore our fleet and<br /> luxury experiences</h2>
            </div>
            <div className="row">
              {galleryImages.map((image, index) => (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={image.delay}>
                  <div className="gallery-page__single">
                    <div className="gallery-page__img">
                      <img decoding="async" src={image.src} alt={image.alt} />
                      <div className="gallery-page__icon">
                        <a href={image.src} className="img-popup">
                          <span className="fa fa-plus"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer
        logoSrc="/uploads/2023/01/logo-light.png"
        aboutText="Private jet charters save your time and give you comfort."
        exploreLinks={exploreLinks}
        links={links}
        contactInfo={footerContactInfo}
        copyrightText="© Copyright 2023 by"
        copyrightLink="#"
        socialLinks={socialLinks}
      />
    </div>
  );
}