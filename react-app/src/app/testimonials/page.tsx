import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Testimonials() {
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

  const testimonials = [
    {
      name: "Robert Johnson",
      position: "CEO, TechCorp",
      image: "/uploads/2023/01/testimonial-1-3.jpg",
      text: "Trans Nation Airways provided exceptional service for our executive team's travel needs. The professionalism and attention to detail exceeded our expectations.",
      rating: 5,
      delay: "100ms"
    },
    {
      name: "Maria Garcia",
      position: "Event Planner",
      image: "/uploads/2023/01/testimonial-1-4.jpg",
      text: "Planning our celebrity client's private jet travel was seamless with Trans Nation Airways. Their team handled everything perfectly.",
      rating: 5,
      delay: "200ms"
    },
    {
      name: "David Chen",
      position: "Business Owner",
      image: "/uploads/2023/01/testimonial-1-5.jpg",
      text: "The luxury and comfort provided by Trans Nation Airways made our family vacation truly memorable. Highly recommended!",
      rating: 5,
      delay: "300ms"
    }
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
              <h2>Testimonials</h2>
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li><span>Testimonials</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="testimonial-page">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">testimonials</span>
              <h2 className="section-title__title">What our clients say<br /> about their experience</h2>
            </div>
            <div className="row">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay={testimonial.delay}>
                  <div className="testimonial-page__single">
                    <div className="testimonial-page__content">
                      <div className="testimonial-page__rating">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                      <p className="testimonial-page__text">{testimonial.text}</p>
                      <div className="testimonial-page__client-info">
                        <div className="testimonial-page__client-img">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className="testimonial-page__client-details">
                          <h4 className="testimonial-page__client-name">{testimonial.name}</h4>
                          <p className="testimonial-page__client-title">{testimonial.position}</p>
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
        logoSrc="/uploads/2023/01/logo-light.png"
        aboutText="Private jet charters save your time and give you comfort."
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