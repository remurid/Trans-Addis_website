import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Services() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact-us" },
    { label: "News", href: "/blog" },
  ];

  const socialLinks = [
    { icon: "fa-facebook-f", href: "http://www.facebook.com/" },
    { icon: "fa-twitter", href: "http://www.twitter.com/" },
    { icon: "fa-instagram", href: "http://www.instagram.com/" },
    { icon: "fa-pinterest-p", href: "http://www.pinterest.com/" },
  ];

  const contactInfo = [
    { icon: "fa-map-marker", text: "30 Commercial road fratton, Australia" },
    {
      icon: "fa-envelope-open",
      text: "needhelp@company.com",
      href: "mailto:needhelp@company.com",
    },
  ];

  const exploreLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Gallery", href: "/gallery" },
    { label: "Team", href: "/team" },
  ];

  const links = [
    { label: "Services", href: "/services" },
    { label: "Charters", href: "/charters" },
    { label: "Destinations", href: "/destinations" },
    { label: "News", href: "/news" },
  ];

  const footerContactInfo = [
    { icon: "fa-phone", text: "+92 ( 8800 ) - 6780", href: "tel:+9288006780" },
    {
      icon: "fa-envelope",
      text: "needhelp@company.com",
      href: "mailto:needhelp@company.com",
    },
    { icon: "fa-map-marker", text: "30 broklyn golden street. New York" },
  ];

  const services = [
    {
      image: "/uploads/2023/01/service_1.jpg",
      subTitle: "Flight For",
      title: "Business charter",
      text: "Non augue egestas, commodo velit eget, tellus.",
      href: "/business-charter",
    },
    {
      image: "/uploads/2023/01/services-1-2.jpg",
      subTitle: "Flight For",
      title: "Private charter",
      text: "Non augue egestas, commodo velit eget, tellus.",
      href: "/private-charter",
    },
    {
      image: "/uploads/2023/01/services-1-3.jpg",
      subTitle: "Flight For",
      title: "Jet rentals",
      text: "Non augue egestas, commodo velit eget, tellus.",
      href: "/jet-rentals",
    },
    {
      image: "/uploads/2023/01/services-1-4.jpg",
      subTitle: "Flight For",
      title: "High profile people",
      text: "Non augue egestas, commodo velit eget, tellus.",
      href: "/high-profile-people",
    },
    {
      image: "/uploads/2023/01/services-1-5.jpg",
      subTitle: "Flight For",
      title: "Music tours",
      text: "Non augue egestas, commodo velit eget, tellus.",
      href: "/music-tours",
    },
    {
      image: "/uploads/2023/01/services-1-6.jpg",
      subTitle: "Flight For",
      title: "Sports teams",
      text: "Non augue egestas, commodo velit eget, tellus.",
      href: "/sports-teams",
    },
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
              <h2>Services</h2>
              <ul className="thm-breadcrumb list-unstyled">
                <div className="xx">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <span style={{ color: "var(--jetly-base)" }}>Services</span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </section>

        <section className="services-page">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">
                what we're offering
              </span>
              <h2 className="section-title__title">
                Select the service
                <br /> according to your work
              </h2>
            </div>
            <div className="row">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay={`${((index % 3) + 1) * 100}ms`}
                >
                  <div className="services-one__single">
                    <div className="services-one__img">
                      <img
                        decoding="async"
                        src={service.image}
                        alt={service.title}
                      />
                    </div>
                    <div className="services-one__content">
                      <div className="services-one__title-box">
                        <span className="services-one__sub-title">
                          {service.subTitle}
                        </span>
                        <h3 className="services-one__title">
                          <a href={service.href}>{service.title}</a>
                        </h3>
                      </div>
                      <p className="services-one__text">{service.text}</p>
                      <div className="services-one__arrow icon-svg">
                        <a href={service.href}>
                          <span
                            aria-hidden="true"
                            className="fas fa-angle-right"
                          ></span>
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
