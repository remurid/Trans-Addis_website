import React from 'react';

interface WeFlyProps {
  backgroundImage: string;
  badgeImage: string;
  title: string;
  count: string;
  text: string;
  button1Text: string;
  button1Href: string;
  button2Text: string;
  button2Href: string;
}

const WeFly: React.FC<WeFlyProps> = ({
  backgroundImage,
  badgeImage,
  title,
  count,
  text,
  button1Text,
  button1Href,
  button2Text,
  button2Href,
}) => {
  return (
    <section className="we-fly">
      <div className="we-fly-bg-box">
        <div className="we-fly__bg" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </div>
      <div className="container">
        <img decoding="async" src={badgeImage} alt="we-fly-badge" className="we-fly__badge" />
        <div className="row">
          <div className="col-xl-7 col-lg-8">
            <div className="we-fly__left">
              <h3 className="we-fly__title count-box">
                {title} <span className="count-text we-fly__count" data-stop={count} data-speed="1500">0</span> destinations world wide
              </h3>
              <p className="we-fly__text">{text}</p>
              <div className="we-fly__btn-boxes">
                <div className="we-fly__btn-one-box">
                  <a href={button1Href} className="thm-btn we-fly__btn-one">{button1Text}</a>
                </div>
                <div className="we-fly__btn-two-box">
                  <a href={button2Href} className="thm-btn we-fly__btn-two">{button2Text}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeFly;