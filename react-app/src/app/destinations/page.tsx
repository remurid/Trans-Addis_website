import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Destinations() {
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
    { icon: 'fa-map-marker', text: 'Addis Ababa, Ethiopia ' },
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

  const destinations = [
    {
      name: "New York",
      image: "/uploads/2023/01/destination-1.jpg",
      description: "Experience the city that never sleeps with our premium private jet services.",
      delay: "100ms"
    },
    {
      name: "London",
      image: "/uploads/2023/01/destination-2.jpg",
      description: "Discover the historic charm and modern luxury of London's finest.",
      delay: "200ms"
    },
    {
      name: "Dubai",
      image: "/uploads/2023/01/destination-3.jpg",
      description: "Luxury redefined in the heart of the Middle East.",
      delay: "300ms"
    },
    {
      name: "Paris",
      image: "/uploads/2023/01/destination-4.jpg",
      description: "The city of love awaits with unparalleled elegance and sophistication.",
      delay: "100ms"
    },
    {
      name: "Tokyo",
      image: "/uploads/2023/01/destination-5.jpg",
      description: "Experience the perfect blend of tradition and cutting-edge modernity.",
      delay: "200ms"
    },
    {
      name: "Singapore",
      image: "/uploads/2023/01/destination-6.jpg",
      description: "A tropical paradise offering world-class luxury and hospitality.",
      delay: "300ms"
    }
  ];

  return (
    <div className="site page-wrapper">
      <Header
        logoSrc="/logo.svg"
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
              <h2>Fly direct to the world’s most exclusive destinations</h2>
              <p className="section-subtitle">Curated routes and priority handling to major business hubs and luxury leisure destinations.</p>
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li><span>Destinations</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="destinations-one">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">Popular destinations</span>
              <h2 className="section-title__title">Fly to the world's most<br /> exclusive destinations</h2>
            </div>
            <div className="row">
              {destinations.map((destination, index) => (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={destination.delay}>
                  <div className="destinations-one__single">
                    <div className="destinations-one__img">
                      <img decoding="async" src={destination.image} alt={destination.name} />
                      <div className="destinations-one__content">
                        <h3 className="destinations-one__title">
                          <a href="/booking">{destination.name}</a>
                        </h3>
                        <p className="destinations-one__text">{destination.description}</p>
                        <div className="destinations-one__arrow icon-svg">
                          <a href="/booking">
                            <span aria-hidden="true" className="fas fa-angle-right"></span>
                          </a>
                        </div>
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
        logoSrc="/logo.svg"
        aboutText="Trans Addis Airways provides tailored private jet charters, experienced crews, and dedicated concierge services for corporate and private clients."
        exploreLinks={exploreLinks}
        links={links}
        contactInfo={footerContactInfo}
        copyrightText="© Copyright 2023 by"
        copyrightLink="#"
        socialLinks={socialLinks}
      />
      {/* <ClientScripts /> */}
    </div>
  );
}