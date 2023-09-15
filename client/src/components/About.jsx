import React from "react";
import { useNavigate } from "react-router-dom";

import About1 from "./images/about1.png";
import About2 from "./images/about2.png";
import About3 from "./images/about3.png";

function About() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid nav_bg abtcls">
      <div className="row">
        <div className="col-10 mx-auto">
          <section id="values" className="values">
            <div className="container" data-aos="fade-up">
              <div className="section-title" data-aos="fade-up">
                <h2>About Us</h2>
              </div>

              <div className="row abtclssection">
                <div
                  className="col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="box">
                    <img src={About1} className="img-fluid" alt="" />
                    <h3>Dynamic Marketplace</h3>
                    <p>
                      Our platform serves as a vibrant online marketplace,
                      uniting buyers and sellers from around the world. Through
                      seamless digital auctions, we facilitate a diverse range
                      of transactions, bringing unique products and services to
                      a global audience.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 mt-4 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="box">
                    <img src={About2} className="img-fluid" alt="" />
                    <h3>User-Centric Experience</h3>
                    <p>
                      With a commitment to user satisfaction, we prioritize a
                      user-friendly interface that ensures ease of navigation
                      for both bidders and sellers. Our intuitive design
                      streamlines the auction process, making it accessible and
                      enjoyable for everyone.
                    </p>
                  </div>
                </div>

                <div
                  className="col-lg-4 mt-4 mt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="box">
                    <img src={About3} className="img-fluid" alt="" />
                    <h3>Innovative Solutions</h3>
                    <p>
                      Embracing technological advancements, we leverage
                      innovative tools to enhance the auction experience.
                      Real-time bidding updates, interactive listings, and
                      seamless bidding experience are just a few examples of how
                      we stay at the forefront of online commerce.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
