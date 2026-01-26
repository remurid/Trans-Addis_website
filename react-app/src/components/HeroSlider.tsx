'use client';

import React from 'react';
import { motion } from 'framer-motion';

const HeroSlider = () => {
  return (
    <div className="elementor-widget-container">
      <section
        className="main-slider-three clearfix"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '105vh',             // ← much taller now
          height: '105vh',
          display: 'flex',
          alignItems: 'center',
          background: 'none',
        }}
      >
        {/* Moving Clouds Background */}
        {/* <motion.div
          className="image-layer-three"
          style={{
            backgroundImage: "url(/uploads/2023/01/cloud-1.png)",
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            backgroundSize: '200%',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-x', // helps with seamless drift
            willChange: 'transform',             // performance
          }}

          transition={{
            duration: 40,
            repeat: Infinity,
            ease: 'linear',
          }}
        /> */}

        {/* Optional second cloud layer for depth (faster/slower) */}
        <motion.div
          className="image-layer-three"
          style={{
            backgroundImage: "url(/uploads/2023/01/cloud-1.png)",
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            backgroundSize: '120%',
            opacity: 0.75,
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-x',
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* PLANE – starts far right, glides LEFT toward text */}
        <div className="main-slider-three__img">
          <motion.img
            src="/uploads/2023/01/main-slider-three-img-1.png"
            alt="Private Jet"
            initial={{ x: '70vw', opacity: 0 }}     // starts very far right (your current position feel)
            animate={{
              x: '-3vw',                            // ends close to text (adjust 8–15vw range)
              opacity: 1,
              y: [0, -35, 0],                       // floating effect
            }}
            transition={{
              x: { duration: 1.8, ease: [0.22, 1, 0.36, 1] }, // smooth, elegant glide
              opacity: { duration: 1.2 },
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
            }}
            style={{
              width: '100%',
              maxWidth: '950px',                    // big & impressive
              height: 'auto',
              display: 'block',
              opacity: 1,
            }}
          />
        </div>

        {/* CONTENT – lower & left-aligned */}
        <div
          className="main-slider-three__content"
          style={{
            position: 'relative',
            zIndex: 12,
            maxWidth: '680px',
            paddingLeft: '8vw',
            paddingRight: '4vw',
            marginTop: '8vh', // ← pushes text lower on the screen
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="main-slider-three__sub-title"
          >
            Private Jets Charters
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.1 }}
            className="main-slider-three__title"
          >
            Save Time &amp;<br />Fly with Comfort
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1.1 }}
            className="main-slider-three__btn-box"
            style={{ marginTop: '2.2rem', display: 'flex', gap: '1.5rem' }}
          >
            <a href="/contact-us" className="thm-btn main-slider__btn">Book Now</a>
            <a href="/about-us" className="thm-btn main-slider__btn-two">Read More</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSlider;