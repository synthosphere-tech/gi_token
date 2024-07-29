import React from "react";
import Link from "next/link";
import ContactForm from "../forms/contact-form";

const ContactArea = () => {
  return (
    <section className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="contact__content">
              <h2 className="overlay-title">
                <span>join us</span>
              </h2>
              <h2 className="title">CONTACT US AND FIND YOUR GI Token</h2>
              <p>
                Our project is dedicated to revolutionizing the gaming industry
                by introducing a unique crypto token designed specifically for
                enhancing artificial intelligence (AI) in gaming
              </p>
              <div className="footer-el-widget">
                <h4 className="title">information</h4>
                <ul className="list-wrap">
                  <li>
                    <Link href="mailto:info@gamingintelligence.com">
                      info@gamingintelligence.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-10">
            <div className="contact__form-wrap">
              {/* form start */}
              <ContactForm />
              {/* form end */}
              <p className="ajax-response"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
