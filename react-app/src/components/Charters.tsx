import React from 'react';

interface Charter {
  image: string;
  seats: string;
  title: string;
  text: string;
  href: string;
}

interface ChartersProps {
  shape: string;
  tagline: string;
  title: string;
  charters: Charter[];
}

const Charters: React.FC<ChartersProps> = ({ shape, tagline, title, charters }) => {
  return (
    <section className="charters">
      <img decoding="async" src={shape} alt="benefits-one-shape-1" className="charters__shape-1 float-bob-x" />
      <div className="container">
        <div className="section-title text-center">
          <span className="section-title__tagline">{tagline}</span>
          <h2 className="section-title__title">{title}</h2>
        </div>
        <div className="row">
          {charters.map((charter, index) => (
            <div key={index} className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
              <div className="charters__single">
                <div className="charters__img">
                  <img decoding="async" src={charter.image} alt={charter.title} />
                </div>
                <div className="charters__content">
                  <p className="charters__date">{charter.seats}</p>
                  <h3 className="charters__title">
                    <a href={charter.href}>{charter.title}</a>
                  </h3>
                  <p className="charters__text">{charter.text}</p>
                  <a href={charter.href} className="thm-btn charters__btn">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Charters;