"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutUs() {
  const counters = [
    {
      count: 395,
      text: 'Professional pilots',
      delay: '100ms',
    },
    {
      count: 166,
      text: 'Jet airplanes',
      delay: '200ms',
    },
    {
      count: 138,
      text: 'Directions',
      delay: '300ms',
    },
    {
      count: 280,
      text: 'World airports',
      delay: '400ms',
    },
  ];
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
    // { label: "News", href: "/news" },
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

  return (
    <div id="page" className="site page-wrapper">
      {/* <ClientScripts /> */}
      <div
        data-elementor-type="wp-post"
        data-elementor-id="1307"
        className="elementor elementor-1307"
      >
        <Header
          logoSrc="/uploads/2023/01/logo-dark.png"
          menuItems={menuItems}
          socialLinks={socialLinks}
          contactInfo={contactInfo}
        />

        <main>
          <section className="page-header">
            <div className="page-header-bg"></div>

            {/* These borders are what make the Jetly theme look authentic */}
            <div className="main-slider-border"></div>
            <div className="main-slider-border main-slider-border-two"></div>
            <div className="main-slider-border main-slider-border-three"></div>
            <div className="main-slider-border main-slider-border-four"></div>
            <div className="main-slider-border main-slider-border-five"></div>
            <div className="main-slider-border main-slider-border-six"></div>

            <div className="container">
              <div className="page-header__inner">
                <h2>About Us</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <div className="xx">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="active">
                      <span style={{ color: "var(--jetly-base)" }}>
                        About Us
                      </span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </section>

          <section className="about-four">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  {/* Framer Motion replaces WOW.js 'slideInLeft' */}
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="about-four__left"
                  >
                    <div className="about-four__img">
                      <img
                        src="/uploads/2023/01/about-four-img-1.jpg"
                        alt="The best private jet charters"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="col-xl-6 col-lg-6">
                  <div className="about-four__right">
                    <div className="section-title text-left">
                      <span className="section-title__tagline">
                        About Company
                      </span>
                      <h2 className="section-title__title">
                        The best private jet charters
                      </h2>
                    </div>

                    <p className="about-four__text-1">
                      There are many variations of passage of lorem available
                      but the majority alteration.
                    </p>

                    <p className="about-four__text-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur condimentum, lacus non faucibus congue, lectus
                      quam viverra nulla, quis egestas neque sapien ac magna.
                    </p>

                    <Link
                      href="/contact-us"
                      className="thm-btn about-four__btn"
                    >
                      Discover More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="counter-three">
            <div
              className="counter-three__shape-1"
              style={{
                backgroundImage:
                  "url(/uploads/2023/01/counter-three-shape-1.png)",
              }}
            ></div>
            {/* <div className="container">
              <ul className="list-unstyled counter-three__list ml-0">
                <li
                  className="counter-three__single wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  <div className="counter-three__count-box count-box">
                    <h3
                      className="count-text"
                      data-stop="395"
                      data-speed="1500"
                    >
                      00
                    </h3>
                  </div>
                  <p className="counter-three__text">Professional pilots</p>
                </li>
                <li
                  className="counter-three__single wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="counter-three__count-box count-box">
                    <h3
                      className="count-text"
                      data-stop="166"
                      data-speed="1500"
                    >
                      00
                    </h3>
                  </div>
                  <p className="counter-three__text">Jet airplanes</p>
                </li>
                <li
                  className="counter-three__single wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="counter-three__count-box count-box">
                    <h3
                      className="count-text"
                      data-stop="138"
                      data-speed="1500"
                    >
                      00
                    </h3>
                  </div>
                  <p className="counter-three__text">Directions</p>
                </li>
                <li
                  className="counter-three__single wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="counter-three__count-box count-box">
                    <h3
                      className="count-text"
                      data-stop="280"
                      data-speed="1500"
                    >
                      00
                    </h3>
                  </div>
                  <p className="counter-three__text">World airports</p>
                </li>
              </ul>
            </div> */}
            <div className="container">
                    <ul className="list-unstyled counter-two__list ml-0">
                      {counters.map((counter, index) => (
                        <li
                          key={index}
                          className={`counter-two__single wow fadeInUp`}
                          data-wow-delay={counter.delay}
                        >
                          <div className="counter-two__count-box count-box">
                            {/* <h3 className="count-text" data-stop={counter.count} data-speed="1500">00</h3> */}
                            <h3>
                              {" "}
                              <AnimatedCounter
                                end={counter.count}
                                duration={1.5}
                                delay={0.3}
                              />{" "}
                            </h3>
                          </div>
                          <p className="counter-two__text">{counter.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
          </section>

          <section className="testimonial-one">
            <div className="testimonial-one__shape-1 zoom-fade-2">
              <img src="/uploads/2023/01/testimonial-shape-1.png" alt="" />
            </div>
            <div className="testimonial-one__shape-2 float-bob-x">
              <img src="/uploads/2023/01/testimonial-shape-2.png" alt="" />
            </div>
            <div className="testimonial-one__shape-3 float-bob-x">
              <img src="/uploads/2023/01/testimonial-shape-3.png" alt="" />
            </div>
            <div className="container">
              <div className="section-title text-center">
                <span className="section-title__tagline">
                  customers feedback
                </span>
                <h2 className="section-title__title">
                  What they're talking about <br /> our flight services
                </h2>
              </div>
              <div className="testimonial-one__bottom">
                <div
                  className="testimonial-one__shape-4"
                  style={{
                    backgroundImage:
                      "url(/uploads/2023/01/testimonial-shape-4-dark.png)",
                  }}
                ></div>
                <div className="testimonial-one__carousel owl-carousel owl-theme thm-owl__carousel carousel-dot-style">
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-img-box">
                        <div className="testimonial-one__img">
                          <img
                            src="/uploads/2023/01/testimonial-1-4.jpg"
                            alt=""
                          />
                          <div className="testimonial-one__icon-box icon-svg">
                            <span className="fa fa-quote-left"></span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-one__content">
                        <p className="testimonial-one__content-text">
                          There are many variations of passage of available but
                          the majority have suffered alteration in some form by
                          injected humor or randomed.
                        </p>
                        <div className="testimonial-one__rating">
                          <div className="testimonial-one__rating-icon">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="testimonial-one__user">
                            <div className="testimonial-one__user-name">
                              <h4>Jimmy smith</h4>
                              <p>Customer</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="testimonial-one__single">
                      <div className="testimonial-one__client-img-box">
                        <div className="testimonial-one__img">
                          <img
                            src="/uploads/2023/01/testimonial-2-2.jpg"
                            alt=""
                          />
                          <div className="testimonial-one__icon-box icon-svg">
                            <span className="fa fa-quote-left"></span>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-one__content">
                        <p className="testimonial-one__content-text">
                          There are many variations of passage of available but
                          the majority have suffered alteration in some form by
                          injected humor or randomed.
                        </p>
                        <div className="testimonial-one__rating">
                          <div className="testimonial-one__rating-icon">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                          <div className="testimonial-one__user">
                            <div className="testimonial-one__user-name">
                              <h4>Sarah Johnson</h4>
                              <p>Business Traveler</p>
                            </div>
                          </div>
                        </div>
                      </div>
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
        {/* <ClientScripts /> */}
      </div>
    </div>
  );
}
