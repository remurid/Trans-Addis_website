import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';
import Link from 'next/dist/client/link';

export default function ContactUs() {
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
    <div className="page-wrapper">
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
                <h2>Contact Us</h2>
                <ul className="thm-breadcrumb list-unstyled">
                  <div className="xx">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="active">
                      <span style={{ color: "var(--jetly-base)" }}>
                        Contact Us
                      </span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </section>

          <section className="contact-page">
        <div className="container">
                            <div className="section-title text-center">
                                            <span className="section-title__tagline">Contact us
</span>
                                                                <h2 className="section-title__title">Feel free to get in touch <br></br> with the jetly</h2>
                                    </div>
                                        <div className="row">
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                            <div className="contact-page__single">
                                <div className="contact-page__title-box">
                                    <div className="contact-page__title">
                                        <span>know</span>
                                        <h3>About us</h3>
                                    </div>
                                    <div className="contact-page__icon icon-svg">
                                        <span aria-hidden="true" className="   icon-flight-1"></span>                                    </div>
                                </div>
                                <p className="contact-page__text">Non augue egestas, commodo velit eget, tellus.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                            <div className="contact-page__single">
                                <div className="contact-page__title-box">
                                    <div className="contact-page__title">
                                        <span>write</span>
                                        <h3>Send email</h3>
                                    </div>
                                    <div className="contact-page__icon icon-svg">
                                        <span aria-hidden="true" className="   icon-envelope-back"></span>                                    </div>
                                </div>
                                <p className="contact-page__text"> <a href="mailto:needhelp@company.com">needhelp@company.com</a>
<a href="mailto:info@comapny.com">info@comapny.com</a></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms">
                            <div className="contact-page__single">
                                <div className="contact-page__title-box">
                                    <div className="contact-page__title">
                                        <span>book</span>
                                        <h3>Call now</h3>
                                    </div>
                                    <div className="contact-page__icon icon-svg">
                                        <span aria-hidden="true" className="   icon-call"></span>                                    </div>
                                </div>
                                <p className="contact-page__text"><a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
 <a href="tel:0066680900">+ 00 66680 900</a></p>
                            </div>
                        </div>

                                    </div>
                    </div>
    </section>

        <section className="contact-one">
          <div className="container">
            <div className="contact-one__form-box">
              <div className="contact-one__form">
                <form className="contact-form">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="contact-form__input-box">
                        <input type="text" placeholder="Your name" name="name" required />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-form__input-box">
                        <input type="email" placeholder="Email address" name="email" required />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-form__input-box">
                        <input type="text" placeholder="Phone number" name="phone" required />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="contact-form__input-box">
                        <input type="text" placeholder="Subject" name="subject" required />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="contact-form__input-box text-message-box">
                        <textarea name="message" placeholder="Write message" required></textarea>
                      </div>
                      <div className="contact-form__btn-box">
                        <button type="submit" className="thm-btn contact-form__btn">Send a message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="google-map">
          <iframe
            src="https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=12&output=embed&iwloc=near"
            title="London Eye, London, United Kingdom"
            aria-label="London Eye, London, United Kingdom"
          ></iframe>
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
      <ClientScripts />
    </div>
  );
}