import React from 'react';

interface Benefit {
  icon: string;
  title: string;
  href: string;
}

interface BenefitsProps {
  backgroundImage: string;
  shape: string;
  tagline: string;
  title: string;
  text: string;
  buttonText: string;
  buttonHref: string;
  benefits: Benefit[];
}

const Benefits: React.FC<BenefitsProps> = ({
  backgroundImage,
  shape,
  tagline,
  title,
  text,
  buttonText,
  buttonHref,
  benefits,
}) => {
  return (
    <section className="benefits-one" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="benefits-one__shape-2 float-bob-y">
        <img decoding="async" src={shape} alt="benefits-one-shape-2" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="benefits-one__left">
              <div className="section-title text-left">
                <span className="section-title__tagline">{tagline}</span>
                <h2 className="section-title__title">{title}</h2>
              </div>
              <p className="benefits-one__text">{text}</p>
              <a href={buttonHref} className="thm-btn benefits-one__btn">{buttonText}</a>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="benefits-one__right">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="benefits-one__single wow fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
                      <div className="benefits-one__content">
                        <div className="benefits-one__icon icon-svg-large">
                          <span aria-hidden="true" className={benefit.icon}></span>
                        </div>
                        <div className="benefits-one__title">
                          <h3>
                            <a href={benefit.href}>{benefit.title}</a>
                          </h3>
                        </div>
                      </div>
                      <div className="benefits-one__arrow">
                        <a href={benefit.href}>
                          <i aria-hidden="true" className="fas fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-xl-6 col-lg-6">
                  {benefits.slice(3).map((benefit, index) => (
                    <div key={index} className="benefits-one__single wow fadeInUp" data-wow-delay={`${(index + 4) * 100}ms`}>
                      <div className="benefits-one__content">
                        <div className="benefits-one__icon icon-svg-large">
                          <span aria-hidden="true" className={benefit.icon}></span>
                        </div>
                        <div className="benefits-one__title">
                          <h3>
                            <a href={benefit.href}>{benefit.title}</a>
                          </h3>
                        </div>
                      </div>
                      <div className="benefits-one__arrow">
                        <a href={benefit.href}>
                          <i aria-hidden="true" className="fas fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;