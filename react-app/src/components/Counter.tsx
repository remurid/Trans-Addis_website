import React from "react";
import AnimatedCounter from "./AnimatedCounter";

interface CounterItem {
  count: number;
  text: string;
  delay: string;
}

interface CounterProps {
  shape: string;
  counters: CounterItem[];
}

const Counter: React.FC<CounterProps> = ({ shape, counters }) => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-c1d1621 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
      data-id="c1d1621"
      data-element_type="section"
      data-settings='{"stretch_section":"section-stretched"}'
      style={{
    marginBottom: '50px', 
    minHeight: 'auto',
  }}
    >
      <div className="elementor-container elementor-column-gap-no">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4b165bb"
          data-id="4b165bb"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-0930be6 elementor-widget elementor-widget-jetly-counter"
              data-id="0930be6"
              data-element_type="widget"
              data-widget_type="jetly-counter.default"
            >
              <div className="elementor-widget-container">
                {/*Counter Two Start*/}
                <section className="counter-two">
                  <div
                    className="counter-two__shape-1"
                    style={{ backgroundImage: `url(${shape})` }}
                  ></div>
                  <div className="container">
                    <ul className="list-unstyled counter-two__list ml-0">
                      {counters.map((counter, index) => (
                        <li
                          key={index}
                          className={`counter-two__single wow fadeInUp`}
                          data-wow-delay={counter.delay}
                        >
                          <div className="counter-two__count-box count-box">
                            {/* <h3 className="count-text" data-stop={counter.count} data-speed="1500">00</h3> */}
                            <h3>
                              {" "}
                              <AnimatedCounter
                                end={counter.count}
                                duration={1.5}
                                delay={0.3}
                              />{" "}
                            </h3>
                          </div>
                          <p className="counter-two__text">{counter.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
                {/*Counter Two End*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
