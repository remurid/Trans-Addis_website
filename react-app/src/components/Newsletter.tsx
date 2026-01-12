"use client";

import React, { useState } from 'react';

interface NewsletterProps {
  shape1: string;
  shape2: string;
  tagline: string;
  title: string;
  placeholder: string;
  buttonText: string;
  policyText: string;
}

const Newsletter: React.FC<NewsletterProps> = ({
  shape1,
  shape2,
  tagline,
  title,
  placeholder,
  buttonText,
  policyText,
}) => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log(email, isChecked);
  };

  return (
    <section className="newsletter-one">
      <div className="newsletter__shape-1 float-bob-y">
        <img decoding="async" src={shape1} alt="" />
      </div>
      <div className="newsletter__shape-2 float-bob-x">
        <img decoding="async" src={shape2} alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="newslettwe_left">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="newsletter__right">
              <form onSubmit={handleSubmit} className="newsletter__form mc-form" data-url="#">
                <div className="newsletter__input-box">
                  <input
                    type="email"
                    placeholder={placeholder}
                    name="EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="newsletter__btn">
                    {buttonText}
                    <i aria-hidden="true" className="fas fa-plane"></i>
                  </button>
                </div>
              </form>
              <div className="mc-form__response"></div>
              <div className="checked-box">
                <input
                  type="checkbox"
                  name="skipper1"
                  id="skipper"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label htmlFor="skipper">
                  <span></span>
                  {policyText}
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;