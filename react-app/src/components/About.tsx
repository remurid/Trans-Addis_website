"use client";
import { motion, Variants } from "framer-motion";
import React from "react";

interface Point {
  icon: string;
  title: string;
  text: string;
}

interface AboutProps {
  title: string;
  subtitle: string;
  textOne: string;
  textTwo: string;
  points: Point[];
  image: string;
  experience: string;
  icon: string;
  shape: string;
  buttonText: string;
  buttonHref: string;
}
const containerVariants = {
  hidden: {
    opacity: 0,
    x: -120, // starts from left, off-screen
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5, // similar to your original 2500ms (2.5s) but smoother
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // nice overshoot/cubic-bezier feel
      delay: 0.1, // matches your original 100ms delay
    },
  },
};

const floatVariants: Variants = {
  float: {
    y: [0, -15, 0] as [number, number, number], // gentle up-down floating like float-bob-x
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

const About: React.FC<AboutProps> = ({
  title,
  subtitle,
  textOne,
  textTwo,
  points,
  image,
  experience,
  icon,
  shape,
  buttonText,
  buttonHref,
}) => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-6be6c142 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
      data-id="6be6c142"
      data-element_type="section"
      id="about"
      data-settings='{"stretch_section":"section-stretched"}'
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4a33ed0c"
          data-id="4a33ed0c"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-5c3103ac elementor-widget elementor-widget-jetly-about"
              data-id="5c3103ac"
              data-element_type="widget"
              data-widget_type="jetly-about.default"
            >
              <div className="elementor-widget-container">
                {/* About Three Start */}
                <section className="about-three">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="about-three__left">
                          <motion.div
                            className="about-three__img-box"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
                            variants={containerVariants}
                          >
                            {/* Main Image */}
                            <div className="about-three__img">
                              <img
                                decoding="async"
                                src={image}
                                alt="about-three-1"
                                title="about-three-1"
                              />
                            </div>

                            {/* Experience Circle */}
                            <div className="about-three__experience">
                              <div className="about-three__curved-circle">
                                <div className="curved-circle">
                                  <span
                                    className="curved-circle--item"
                                    data-circle-options='{"radius": 100}'
                                  >
                                    {experience}
                                  </span>
                                </div>
                              </div>

                              <div className="about-three__icon-box">
                                <div className="about-three__icon">
                                  <img
                                    decoding="async"
                                    src={icon}
                                    alt="about-three-icon"
                                    title="about-three-icon"
                                  />
                                </div>
                              </div>
                            </div>

                            {/* Floating Shape – keeps original bobbing effect */}
                            <motion.div
                              className="about-three__shape-1"
                              variants={floatVariants}
                              animate="float"
                            >
                              <img
                                decoding="async"
                                src={shape}
                                alt="about-three-shape-1"
                                title="about-three-shape-1"
                              />
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="about-three__right">
                          <div className="section-title text-left">
                            <span className="section-title__tagline">
                              {subtitle}
                            </span>
                            <h2 className="section-title__title">{title}</h2>
                          </div>
                          <p className="about-three__text-one">{textOne}</p>
                          <p className="about-three__text-two">{textTwo}</p>
                          <ul className="about-three__points list-unstyled ml-0">
                            {points.map((point, index) => (
                              <li key={index}>
                                <div className="about-three__points-icon icon-svg-large">
                                  <span
                                    aria-hidden="true"
                                    className={`fa ${point.icon}`}
                                  ></span>
                                </div>
                                <div className="about-three__points-text">
                                  <h3>{point.title}</h3>
                                  <p>{point.text}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <a
                            href={buttonHref}
                            className="thm-btn about-three__btn"
                          >
                            {buttonText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* About Three End */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
