'use client';

import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const ClientScripts = dynamic(() => import('@/components/ClientScripts'), { ssr: false });

export default function TeamCarousel() {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about-us' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact-us' },
    { label: 'News', href: '/blog' },
  ];

  const socialLinks = [
    { href: '#', icon: 'fab fa-facebook-f' },
    { href: '#', icon: 'fab fa-twitter' },
    { href: '#', icon: 'fab fa-instagram' },
    { href: '#', icon: 'fab fa-linkedin-in' },
  ];

  const contactInfo = [
    { icon: 'fa-map-marker', text: '30 Commercial road fratton, Australia' },
    { icon: 'fa-envelope-open', text: 'needhelp@company.com', href: 'mailto:needhelp@company.com' },
  ];

  const footerContactInfo = [
    { icon: 'fa-map-marker', text: '30 Commercial road fratton, Australia' },
    { icon: 'fa-envelope-open', text: 'needhelp@company.com', href: 'mailto:needhelp@company.com' },
  ];

  const exploreLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Our Services', href: '/services' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Gallery', href: '/gallery' },
  ];

  const links = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'FAQ', href: '/faqs' },
  ];
  const teamMembers = [
    {
      name: "Jessica brown",
      position: "Senior pilot",
      image: "/uploads/2023/01/team-1-1.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        pinterest: "#",
        instagram: "#"
      }
    },
    {
      name: "Mike hardson",
      position: "Service Manager",
      image: "/uploads/2023/01/team-1-2.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        pinterest: "#",
        instagram: "#"
      }
    },
    {
      name: "Sarah albert",
      position: "Flight attendant",
      image: "/uploads/2023/01/team-1-3.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        pinterest: "#",
        instagram: "#"
      }
    },
    {
      name: "David smith",
      position: "Flight manager",
      image: "/uploads/2023/01/team-1-4.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        pinterest: "#",
        instagram: "#"
      }
    },
    {
      name: "Christine eve",
      position: "Flight captain",
      image: "/uploads/2023/01/team-1-5.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        pinterest: "#",
        instagram: "#"
      }
    },
    {
      name: "Kevin martin",
      position: "Cabin Crew",
      image: "/uploads/2023/01/team-1-6.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        pinterest: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <div className="page-wrapper">
      <Header
        logoSrc="/uploads/2023/01/logo-light.png"
        menuItems={menuItems}
        socialLinks={socialLinks}
        contactInfo={contactInfo}
      />
      <main>
        <section className="page-header page-header-bg">
          <div className="container">
            <div className="page-header__inner">
              <h2>Team Carousel</h2>
              <p>Meet our professional private jet crew</p>
            </div>
          </div>
        </section>

        <section className="team-carousel-page">
          <div className="container">
            <div className="team-carousel thm-owl__carousel owl-theme owl-carousel carousel-dot-style">
              {teamMembers.map((member, index) => (
                <div key={index} className="item">
                  <div className="team__single">
                    <div className="team__single-inner">
                      <div className="team__img">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="team__content">
                        <h4 className="team__name">
                          <a href="/about-us">{member.name}</a>
                        </h4>
                        <p className="team__title">{member.position}</p>
                        <div className="team__social">
                          <a href={member.social.twitter}><i className="fab fa-twitter"></i></a>
                          <a href={member.social.facebook}><i className="fab fa-facebook"></i></a>
                          <a href={member.social.pinterest}><i className="fab fa-pinterest-p"></i></a>
                          <a href={member.social.instagram}><i className="fab fa-instagram"></i></a>
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
      <ClientScripts />
    </div>
  );
}