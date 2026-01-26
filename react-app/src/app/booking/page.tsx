"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    departure: '',
    destination: '',
    date: '',
    returnDate: '',
    passengers: '1',
    aircraftType: 'light-jet',
    tripType: 'one-way',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const footerContactInfo = [
    { icon: 'fa-phone', text: '+92 ( 8800 ) - 6780', href: 'tel:+9288006780' },
    { icon: 'fa-envelope', text: 'needhelp@company.com', href: 'mailto:needhelp@company.com' },
    { icon: 'fa-map-marker', text: '30 broklyn golden street. New York' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thank you! Your booking request has been submitted successfully. We will contact you within 24 hours with a personalized quote.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        departure: '',
        destination: '',
        date: '',
        returnDate: '',
        passengers: '1',
        aircraftType: 'light-jet',
        tripType: 'one-way',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper">
      {/* <ClientScripts /> */}
      <Header
        logoSrc="/uploads/2023/01/logo-dark.png"
        menuItems={menuItems}
        socialLinks={socialLinks}
        contactInfo={contactInfo}
      />
      <main>
        <section className="page-header page-header-bg">
          <div className="container">
            <div className="page-header__inner">
              <h2>Book Your Private Jet</h2>
              <p>Experience luxury and convenience with our premium private jet charter services</p>
            </div>
          </div>
        </section>

        <section className="booking-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="booking-form wow fadeInLeft">
                  <h3>Request a Quote</h3>
                  <p>Get a personalized quote for your private jet charter within 24 hours</p>

                  {submitMessage && (
                    <div className={`alert ${submitMessage.includes('error') ? 'alert-danger' : 'alert-success'}`}>
                      {submitMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Number of Passengers</label>
                          <select
                            name="passengers"
                            value={formData.passengers}
                            onChange={handleChange}
                          >
                            <option value="1">1 Passenger</option>
                            <option value="2">2 Passengers</option>
                            <option value="3">3 Passengers</option>
                            <option value="4">4 Passengers</option>
                            <option value="5">5 Passengers</option>
                            <option value="6">6 Passengers</option>
                            <option value="7">7 Passengers</option>
                            <option value="8">8 Passengers</option>
                            <option value="9+">9+ Passengers</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Departure City *</label>
                          <input
                            type="text"
                            name="departure"
                            placeholder="City or Airport Code"
                            value={formData.departure}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Destination City *</label>
                          <input
                            type="text"
                            name="destination"
                            placeholder="City or Airport Code"
                            value={formData.destination}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Trip Type</label>
                          <select
                            name="tripType"
                            value={formData.tripType}
                            onChange={handleChange}
                          >
                            <option value="one-way">One Way</option>
                            <option value="round-trip">Round Trip</option>
                            <option value="multi-city">Multi City</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Aircraft Type</label>
                          <select
                            name="aircraftType"
                            value={formData.aircraftType}
                            onChange={handleChange}
                          >
                            <option value="light-jet">Light Jet (4-6 seats)</option>
                            <option value="midsize-jet">Midsize Jet (7-8 seats)</option>
                            <option value="heavy-jet">Heavy Jet (9-16 seats)</option>
                            <option value="turboprop">Turboprop (6-8 seats)</option>
                            <option value="helicopter">Helicopter</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Departure Date *</label>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                          />
                        </div>
                      </div>
                      {formData.tripType === 'round-trip' && (
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Return Date *</label>
                            <input
                              type="date"
                              name="returnDate"
                              value={formData.returnDate}
                              onChange={handleChange}
                              min={formData.date || new Date().toISOString().split('T')[0]}
                              required
                            />
                          </div>
                        </div>
                      )}
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Additional Requirements</label>
                          <textarea
                            name="message"
                            placeholder="Special requests, preferred times, catering requirements, etc."
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="thm-btn"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Submitting...' : 'Request Quote'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="booking-info wow fadeInRight">
                  <h3>Why Choose Our Service?</h3>
                  <ul className="feature-list">
                    <li><i className="fas fa-check-circle"></i> 24/7 Customer Support</li>
                    <li><i className="fas fa-check-circle"></i> Competitive Pricing</li>
                    <li><i className="fas fa-check-circle"></i> Luxury Fleet</li>
                    <li><i className="fas fa-check-circle"></i> Safe & Reliable</li>
                    <li><i className="fas fa-check-circle"></i> Customized Service</li>
                    <li><i className="fas fa-check-circle"></i> Flexible Scheduling</li>
                  </ul>
                  <div className="contact-info">
                    <h4>Need Immediate Assistance?</h4>
                    <p><i className="fas fa-phone"></i> Call us: +92 (8800) - 6780</p>
                    <p><i className="fas fa-envelope"></i> Email: needhelp@company.com</p>
                    <p><i className="fas fa-clock"></i> Available 24/7</p>
                  </div>
                  <div className="quick-stats">
                    <h4>Fleet Statistics</h4>
                    <div className="stat">
                      <span className="number">395+</span>
                      <span className="label">Professional Pilots</span>
                    </div>
                    <div className="stat">
                      <span className="number">166+</span>
                      <span className="label">Jet Airplanes</span>
                    </div>
                    <div className="stat">
                      <span className="number">280+</span>
                      <span className="label">World Airports</span>
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
        aboutText="Trans Nation Airways is your premier private jet charter service, offering luxury travel solutions worldwide with exceptional safety, comfort, and personalized service."
        socialLinks={socialLinks}
        contactInfo={footerContactInfo}
        exploreLinks={[
          { label: 'About Us', href: '/about-us' },
          { label: 'Services', href: '/services' },
          { label: 'Destinations', href: '/destinations' },
          { label: 'Gallery', href: '/gallery' },
        ]}
        links={[
          { label: 'Terms of Use', href: '/about-us' },
          { label: 'Privacy Policy', href: '/about-us' },
          { label: 'Contact Us', href: '/contact-us' },
          { label: 'News', href: '/blog' },
        ]}
        copyrightText="© 2024 Trans Nation Airways. All rights reserved."
        copyrightLink="/"
      />
    </div>
  );
}