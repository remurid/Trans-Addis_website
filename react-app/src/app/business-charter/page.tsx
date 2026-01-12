import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BusinessCharter() {
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
              <h2>Business Charter</h2>
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><span>Business Charter</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="service-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="service-details__left">
                  <div className="service-details__img">
                    <img src="/uploads/2023/01/service-details.jpg" alt="Business Charter" />
                  </div>
                  <div className="service-details__content">
                    <h3 className="service-details__title">Business Charter</h3>
                    <p className="service-details__text">
                      Experience unparalleled luxury and efficiency with our business charter services.
                      Whether you're traveling for corporate meetings, conferences, or executive retreats,
                      our fleet of premium aircraft ensures you arrive refreshed and ready to conduct business.
                    </p>
                    <p className="service-details__text">
                      Our business charter solutions are designed to maximize productivity and comfort,
                      featuring state-of-the-art in-flight offices, high-speed internet, and personalized
                      service from our professional crew.
                    </p>
                  </div>
                  <div className="service-details__benefits">
                    <h3>Benefits Include:</h3>
                    <ul className="list-unstyled service-details__benefits-list">
                      <li><i className="fas fa-check"></i> Flexible scheduling to meet your business needs</li>
                      <li><i className="fas fa-check"></i> Premium aircraft with in-flight office capabilities</li>
                      <li><i className="fas fa-check"></i> Professional crew and personalized service</li>
                      <li><i className="fas fa-check"></i> High-speed Wi-Fi for uninterrupted connectivity</li>
                      <li><i className="fas fa-check"></i> Direct airport-to-airport service</li>
                      <li><i className="fas fa-check"></i> Catering options tailored to your preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="service-details__sidebar">
                  <div className="service-details__sidebar-service">
                    <h3 className="service-details__sidebar-title">Our Services</h3>
                    <ul className="list-unstyled service-details__sidebar-list">
                      <li><a href="/business-charter">Business Charter</a></li>
                      <li><a href="/private-charter">Private Charter</a></li>
                      <li><a href="/jet-rentals">Jet Rentals</a></li>
                      <li><a href="/high-profile-people">High Profile People</a></li>
                      <li><a href="/music-tours">Music Tours</a></li>
                      <li><a href="/sports-teams">Sports Teams</a></li>
                    </ul>
                  </div>
                  <div className="service-details__sidebar-contact">
                    <h3>Need Help?</h3>
                    <p>Call us for immediate assistance</p>
                    <a href="tel:+9288006780" className="service-details__sidebar-phone">+92 ( 8800 ) - 6780</a>
                    <a href="/contact-us" className="thm-btn service-details__sidebar-btn">Contact Us</a>
                  </div>
                </div>
              </div>
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