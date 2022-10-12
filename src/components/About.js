import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>trainee software developer</b> at {" "}<a href="https://northcoders.com/">Northcoders</a>. I studied {" "}<a href="https://eng.ssu.ac.kr/">Media Arts and Computer Science</a> at <b>Soongsil University</b> in Seoul, South Korea. Before I started on this journey, I worked as a marketer and data operator. These experiences gave me a unique perspective on solving complex problems and a strong background in design, communication and knowledge of the technology industry.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in editing videos, painting, traveling, going to the art museum and studying English.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="jeeann.kim@gmail.com">
        jeeann.kim@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "HTML & CSS",
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={require('../assets/me.jpg')} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
