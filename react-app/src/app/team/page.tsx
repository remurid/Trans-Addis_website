export default function Team() {
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
      <main>
        <section className="page-header page-header-bg">
          <div className="container">
            <div className="page-header__inner">
              <h2>Team</h2>
              <p>Meet the professionals dedicated to your luxury travel experience</p>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="container">
            <div className="section-title text-center">
              <span className="section-title__tagline">aircraft crew</span>
              <h2 className="section-title__title">Meet the professional <br /> private jet crew</h2>
            </div>
            <div className="row">
              {teamMembers.map((member, index) => (
                <div key={index} className={`col-xl-4 col-lg-6 col-md-6 wow fadeInUp`} data-wow-delay={`${(index + 1) * 100}ms`}>
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
    </div>
  );
}