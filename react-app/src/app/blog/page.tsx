import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientScripts from '@/components/ClientScripts';

export default function Blog() {
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

  const exploreLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Team', href: '/team' },
  ];

  const links = [
    { label: 'Services', href: '/services' },
    { label: 'Charters', href: '/charters' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'News', href: '/news' },
  ];

  const footerContactInfo = [
    { icon: 'fa-phone', text: '+92 ( 8800 ) - 6780', href: 'tel:+9288006780' },
    { icon: 'fa-envelope', text: 'needhelp@company.com', href: 'mailto:needhelp@company.com' },
    { icon: 'fa-map-marker', text: '30 broklyn golden street. New York' },
  ];

  const blogPosts = [
    {
      id: 1727,
      title: "Flight's precautionary landing in dubai of Lorem ipsum",
      image: "/uploads/2023/01/blog-7-770x410.jpg",
      date: "January 24, 2023",
      author: "Jetly",
      comments: 2,
      excerpt: "There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
      link: "/flights-precautionary-landing-in-dubai"
    },
    {
      id: 34,
      title: "A first-time flyer's guide to rivate jets charters",
      image: "/uploads/2023/01/blog2-770x410.jpg",
      date: "January 19, 2023",
      author: "Jetly",
      comments: 2,
      excerpt: "There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
      link: "/few-reasons-people-choose-to-fly-private-jet-charter-copy-5"
    },
    {
      id: 33,
      title: "Rent a private jet everything you need to know about cost",
      image: "/uploads/2023/01/blog3-770x410.jpg",
      date: "January 19, 2023",
      author: "Jetly",
      comments: 2,
      excerpt: "There are many variations of passages of Lorem Ipsum available, but majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
      link: "/few-reasons-people-choose-to-fly-private-jet-charter-copy-4"
    }
  ];

  return (
    <div className="page-wrapper">
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
              <h2>Our Blog</h2>
              <ul className="thm-breadcrumb list-unstyled">
                <li><a href="/">Home</a></li>
                <li><span>Blog</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="news-sidebar">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="blog-sidebar__left">
                  {blogPosts.map((post) => (
                    <article key={post.id} className="news-sidebar__content">
                      <div className="news-sidebar__single">
                        <div className="news-sidebar__img">
                          <div className="news-sidebar__single">
                            <a className="post-thumbnail blog-single__content-img" href={post.link} aria-hidden="true" tabIndex={-1}>
                              <img width="770" height="410" src={post.image} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt={post.title} decoding="async" fetchPriority="high" />
                            </a>
                            <div className="news-sidebar__date">
                              <p><span className="posted-on"> <a href={post.link} rel="bookmark"><time className="entry-date published" dateTime="2023-01-24T06:03:49+00:00">{post.date}</time></a></span></p>
                            </div>
                          </div>
                          <div className="news-sidebar__date">
                            <p><span className="posted-on"> <a href={post.link} rel="bookmark"><time className="entry-date published" dateTime="2023-01-24T06:03:49+00:00">{post.date}</time></a></span></p>
                          </div>
                        </div>
                        <div className="news-sidebar__content-box">
                          <ul className="list-unstyled news-sidebar__meta ml-0">
                            <li><span className="byline"><i className="fas fa-user-circle"></i> <span className="author vcard"><a className="url fn n" href="/author/jetly">{post.author}</a></span></span></li>
                            <li><span className="comments-link"><i className="fas fa-comments"></i> <a href={`${post.link}#comments`}>{post.comments} Comments</a></span></li>
                          </ul>
                          <h3 className="news-sidebar__title">
                            <a href={post.link}>{post.title}</a>
                          </h3>
                          <p className="news-sidebar__text">{post.excerpt}</p>
                          <div className="news-sidebar__bottom">
                            <a href={post.link} className="news-sidebar__arrow"><span className="fa fa-arrow-right"></span></a>
                            <a href={post.link} className="news-sidebar__read-more">Read More</a>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="blog-sidebar__right">
                  <div className="blog-sidebar__single blog-sidebar__search">
                    <form action="#" method="post" className="blog-sidebar__search-form">
                      <input type="search" placeholder="Search..." name="s" />
                      <button type="submit"><i className="fa fa-search"></i></button>
                    </form>
                  </div>
                  <div className="blog-sidebar__single blog-sidebar__categories">
                    <h3 className="blog-sidebar__title">Categories</h3>
                    <ul className="list-unstyled blog-sidebar__categories-list">
                      <li><a href="#">Private Jets <span>(5)</span></a></li>
                      <li><a href="#">Luxury Travel <span>(3)</span></a></li>
                      <li><a href="#">Business Charters <span>(2)</span></a></li>
                      <li><a href="#">Destinations <span>(4)</span></a></li>
                      <li><a href="#">Aviation News <span>(6)</span></a></li>
                    </ul>
                  </div>
                  <div className="blog-sidebar__single blog-sidebar__posts">
                    <h3 className="blog-sidebar__title">Recent Posts</h3>
                    <ul className="list-unstyled blog-sidebar__posts-list">
                      <li>
                        <div className="blog-sidebar__posts-image">
                          <img src="/uploads/2023/01/blog-1.jpg" alt="Private Jet Travel" />
                        </div>
                        <div className="blog-sidebar__posts-content">
                          <h4><a href="#">Private Jet Travel: Luxury Redefined</a></h4>
                          <span>January 20, 2023</span>
                        </div>
                      </li>
                      <li>
                        <div className="blog-sidebar__posts-image">
                          <img src="/uploads/2023/01/blog-2.jpg" alt="Business Aviation" />
                        </div>
                        <div className="blog-sidebar__posts-content">
                          <h4><a href="#">The Future of Business Aviation</a></h4>
                          <span>January 18, 2023</span>
                        </div>
                      </li>
                      <li>
                        <div className="blog-sidebar__posts-image">
                          <img src="/uploads/2023/01/blog-3.jpg" alt="Luxury Destinations" />
                        </div>
                        <div className="blog-sidebar__posts-content">
                          <h4><a href="#">Top Luxury Destinations for 2023</a></h4>
                          <span>January 15, 2023</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-sidebar__single blog-sidebar__tags">
                    <h3 className="blog-sidebar__title">Tags</h3>
                    <div className="blog-sidebar__tags-list">
                      <a href="#">Private Jet</a>
                      <a href="#">Luxury</a>
                      <a href="#">Travel</a>
                      <a href="#">Business</a>
                      <a href="#">Aviation</a>
                      <a href="#">Charter</a>
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
        aboutText="Private jet charters save your time and give you comfort."
        exploreLinks={exploreLinks}
        links={links}
        contactInfo={footerContactInfo}
        copyrightText="© Copyright 2023 by"
        copyrightLink="#"
        socialLinks={socialLinks}
      />
      <ClientScripts />
    </div>
  );
}