"use client";

import React, { useState } from 'react';

interface RequestProps {
  shape1: string;
  shape2: string;
}

const Request: React.FC<RequestProps> = ({ shape1, shape2 }) => {
  const [formData, setFormData] = useState({
    flyFrom: '',
    flyTo: '',
    date: '',
    time: '',
    passengers: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  // 
  

  return (
    <section className="request">
      <div className="request__shape-1 float-bob-x">
        <img decoding="async" src={shape1} alt="request-shape-1" />
      </div>
      <div className="request__shape-2 float-bob-x">
        <img decoding="async" src={shape2} alt="request-shape-2" />
      </div>
      <div className="container">
        <div className="request__top">
          <form onSubmit={handleSubmit} className="wpcf7-form">
            <ul className="list-unstyled request__input-list clearfix ml-0">
              <li>
                <div className="request__input-box">
                  <input
                    size={40}
                    className="wpcf7-form-control wpcf7-text"
                    placeholder="Fly from"
                    value={formData.flyFrom}
                    name="flyFrom"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </li>
              <li>
                <div className="request__input-box">
                  <input
                    size={40}
                    className="wpcf7-form-control wpcf7-text"
                    placeholder="Fly to"
                    value={formData.flyTo}
                    name="flyTo"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </li>
              <li>
                <div className="request__input-box">
                  <input
                    size={40}
                    className="wpcf7-form-control wpcf7-text"
                    id="datepicker"
                    placeholder="Select date"
                    value={formData.date}
                    name="date"
                    onChange={handleChange}
                    type="text"
                  />
                  <div className="get-flight__icon-box">
                    <i className="far fa-calendar-alt"></i>
                  </div>
                </div>
              </li>
              <li>
                <div className="request__input-box">
                  <input
                    size={40}
                    className="wpcf7-form-control wpcf7-text time-picker"
                    placeholder="Select time"
                    value={formData.time}
                    name="time"
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </li>
              <li>
                <div className="request__input-box">
                  <div className="select-box">
                    <select
                      className="wpcf7-form-control wpcf7-select nice-select wide"
                      value={formData.passengers}
                      name="passengers"
                      onChange={handleChange}
                    >
                      <option data-display="Passengers">Passengers</option>
                      <option value="1">Passengers 01</option>
                      <option value="2">Passengers 02</option>
                      <option value="3">Passengers 03</option>
                      <option value="4">Passengers 04</option>
                    </select>
                  </div>
                </div>
              </li>
            </ul>
            <div className="request__bottom">
              <p className="request__bottom-text">
                <span>*</span> After sending request. We'll contact you for more details about charter.
              </p>
              <button type="submit" className="thm-btn request__btn">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Request;