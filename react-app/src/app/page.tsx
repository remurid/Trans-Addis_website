import Header from '@/components/Header';
import About from '@/components/About';
import Request from '@/components/Request';
import WeFly from '@/components/WeFly';
import Charters from '@/components/Charters';
import Benefits from '@/components/Benefits';
import Counter from '@/components/Counter';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact-us' },
    // { label: 'News', href: '/blog' },
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

  const aboutPoints = [
    {
      icon: 'fa-shield-alt',
      title: 'Proven safety',
      text: 'Lorem ipsum text',
    },
    {
      icon: 'fa-plane',
      title: 'On demand',
      text: 'Lorem ipsum text',
    },
  ];

  const charters = [
    {
      image: '/uploads/2023/01/charters-1-1.jpg',
      seats: '6 - 8 seats',
      title: 'Executive jet',
      text: 'Non augue egestas, commodo simply free velit eget, tellus.',
      href: '/services',
    },
    {
      image: '/uploads/2023/01/charters-1-2.jpg',
      seats: '6 - 8 seats',
      title: 'Helicopter',
      text: 'Non augue egestas, commodo simply free velit eget, tellus.',
      href: '/services',
    },
    {
      image: '/uploads/2023/01/charters-1-3.jpg',
      seats: '6 - 8 seats',
      title: 'Turbo prop',
      text: 'Non augue egestas, commodo simply free velit eget, tellus.',
      href: '/services',
    },
  ];

  const benefits = [
    {
      icon: 'fa fa-shield-alt',
      title: 'Safety and security',
      href: '/services',
    },
    {
      icon: 'fa fa-user',
      title: 'Experienced crew',
      href: '/services',
    },
    {
      icon: 'fa fa-plane',
      title: 'Modern aircrafts',
      href: '/services',
    },
    {
      icon: 'fa fa-plane',
      title: 'Modern aircrafts',
      href: '/services',
    },
  ];

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

  const exploreLinks = [
    { label: 'About', href: '/about-us' },
    { label: 'Private Jet Catering', href: '/private-charter' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Flight Search', href: '/destinations' },
    { label: 'Book Flight', href: '/contact-us' },
  ];

  const links = [
    { label: 'Terms of Use', href: '/about-us' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'News & Press', href: '/blog' },
    { label: 'Faqs', href: '/faqs' },
  ];

  const footerContactInfo = [
    { icon: 'fa-phone', text: '+92 ( 8800 ) - 6780', href: 'tel:+9288006780' },
    { icon: 'fa-envelope', text: 'needhelp@company.com', href: 'mailto:needhelp@company.com' },
    { icon: 'fa-map-marker', text: '30 broklyn golden street. New York' },
  ];

  

  return (
    <div id="page" className="site page-wrapper">
      {/* <ClientScripts /> */}
      <div data-elementor-type="wp-post" data-elementor-id="1307" className="elementor elementor-1307">
        <Header
        logoSrc="/logo.svg"
        menuItems={menuItems}
        socialLinks={socialLinks}
        contactInfo={contactInfo}
      />
      <main>
        {/* Hero Section */}
        {/* Hero Section Wrapper */}
      <section className="elementor-section elementor-top-section elementor-element elementor-element-e64a631 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default" data-id="e64a631" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
          <div className="elementor-container elementor-column-gap-no">
            <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3d2fb4b" data-id="3d2fb4b" data-element_type="column">
              <div className="elementor-widget-wrap elementor-element-populated">
                <div className="elementor-element elementor-element-0d9f918 elementor-widget elementor-widget-jetly-main-slider" data-id="0d9f918" data-element_type="widget" data-widget_type="jetly-main-slider.default">
                
                {/* HERE IS THE NEW COMPONENT */}
                <HeroSlider />

              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Request Section */}
        <Request
          shape1="/uploads/2023/01/request-shape-1.png"
          shape2="/uploads/2023/01/request-shape-2.png"
        />
        {/* About Section */}
        <About
          title="Luxury private jet charters for discerning travelers"
          subtitle="What we deliver"
          textOne="Exceptional safety, personalized service, and seamless travel tailored to executives and private clients."
          textTwo="Our cabins, catering and ground logistics are carefully coordinated to exceed expectations on every flight."
          points={aboutPoints}
          image="/uploads/2023/01/about-three-1.jpg"
          experience="25 Years Experience"
          icon="/uploads/2023/01/about-three-icon.png"
          shape="/uploads/2023/01/about-three-shape-1.png"
          buttonText="Learn More"
          buttonHref="/about-us"
        />

        {/* We Fly Section */}
        <WeFly
          backgroundImage="/uploads/2023/01/we-fly-bg.jpg"
          badgeImage="/uploads/2023/01/we-fly-badge.png"
          title="We fly with you to over"
          count={6800}
          text="Modern aircraft, vetted crews and global operations deliver reliable, secure travel across our worldwide network."
          button1Text="Book Now"
          button1Href="/contact-us"
          button2Text="Read More"
          button2Href="/about-us"
        />

        {/* Services Section */}
        <Charters
          shape="/uploads/2023/01/benefits-one-shape-1.png"
          tagline="Luxury Charters"
          title="Select the charter that fits your mission"
          charters={charters}
        />

        {/* Benefits Section */}
        <Benefits
          backgroundImage="/uploads/2023/01/benefit-1-bg-1.png"
          shape="/uploads/2023/01/benefits-one-shape-2.png"
          tagline="Our Benefits"
          title="Learn more about private jet benefits"
          text="Save time and travel in comfort with dedicated service, direct routing and VIP handling for every journey."
          buttonText="Discover More"
          buttonHref="/services"
          benefits={benefits}
        />

        {/* Counter Section */}
        <Counter
          shape="/uploads/2023/01/counter-two-shape-1.png"
          counters={counters}
        />

        {/* Newsletter Section */}
        <Newsletter
          shape1="/uploads/2023/01/newsletter-shape-1.png"
          shape2="/uploads/2023/01/newsletter-shape-2.png"
          tagline="Subscribe Now"
          title="Receive exclusive offers and route updates"
          placeholder="Enter email address"
          buttonText="Subscribe"
          policyText="Check Policy"
        />
      </main>

      {/* Footer */}
      <Footer
        logoSrc="/logo.svg"
        aboutText="Trans Addis Airways provides tailored private jet charters, experienced crews, and dedicated concierge services for corporate and private clients."
        exploreLinks={exploreLinks}
        links={links}
        contactInfo={footerContactInfo}
        copyrightText="© Copyright 2026 by"
        copyrightLink="#"
        socialLinks={socialLinks}
      />
      </div>
    </div>
  );
}
