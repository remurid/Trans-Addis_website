"use client";

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

interface RequestProps {
  shape1: string;
  shape2: string;
}

const Request: React.FC<RequestProps> = ({ shape1, shape2 }) => {
  const [formData, setFormData] = useState({
    flyFrom: '',
    flyTo: '',
    date: null as Date | null,
    time: null as Date | null,
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
              {/* Date Picker */}
              <li>
                <div className="request__input-box relative">
                  <DatePicker
                    selected={formData.date}
                    onChange={(date: Date | null) => setFormData({ ...formData, date })}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select date"
                    className="wpcf7-form-control wpcf7-text !w-full"
                    wrapperClassName="w-full"
                    calendarClassName="custom-datepicker"
                    showPopperArrow={false}
                  />
                  <div className="get-flight__icon-box absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="far fa-calendar-alt text-gray-500"></i>
                  </div>
                </div>
              </li>
              {/* Time Picker */}
              <li>
                <div className="request__input-box relative">
                  <DatePicker
                    selected={formData.time}
                    onChange={(time: Date | null) => setFormData({ ...formData, time })}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    placeholderText="Select time"
                    className="wpcf7-form-control wpcf7-text !w-full"
                    wrapperClassName="w-full"
                    calendarClassName="custom-datepicker"
                    showPopperArrow={false}
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <i className="far fa-clock text-gray-500"></i>
                  </div>
                </div>
              </li>
              {/* Passengers */}
                <li>
                <div className="request__input-box">
                  <div className="select-box">
                  <select
                    className="wpcf7-form-control wpcf7-select nice-select wide !w-full !h-[52px] !border-0 !rounded !px-4 !appearance-none bg-green"
                    value={formData.passengers}
                    name="passengers"
                    onChange={handleChange}
                  >
                    <option value="" disabled>Passengers</option>
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
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