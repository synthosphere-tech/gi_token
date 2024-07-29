"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import shape from "@/assets/img/icons/shape.svg";
import SvgIconCom from "../common/svg-icon-anim";
import circel from "@/assets/img/logo/GI2.png";
import fun_fact_shape from "@/assets/img/others/fun_fact_shape.png";
import fun_fact from "@/assets/img/others/graphics front.png";
import trophy from "@/assets/img/icons/trophy.png";
import VideoPopup from "../common/video-popup";
import CounterUp from "../common/counter-up";

const AboutAreaTwo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const imgStyle = { height: "auto", width: "auto" };
  return (
    <>
      <section className="about__area-two section-pt-120 section-pb-150">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
              <div className="about__funFact-images">
                <Image
                  src={fun_fact_shape}
                  alt="background"
                  className="bg-shape"
                />
                <Image
                  src={fun_fact}
                  className="main-img"
                  alt="image"
                  style={{ height: "75vh", width: "auto" }}
                />
              </div>
              <div className="about__funFact-trophy">
                <div className="icon">
                  <Image src={trophy} alt="trophy" style={imgStyle} />
                </div>
                <div className="content">
                  <h5>Tournament</h5>
                  <span>Development</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-10">
              <div className="section__title text-start mb-30">
                <h3 className="title">
                  Future of Gaming with <br /> AI and Blockchain
                </h3>
              </div>
              <div className="about__content-two">
                <p>
                  Welcome to Gaming Intelligence, where the future of gaming
                  meets the cutting-edge advancements in artificial intelligence
                  and blockchain technology. Our project is dedicated to
                  revolutionizing the gaming industry by introducing a unique
                  crypto token designed specifically for enhancing artificial
                  intelligence (AI) in gaming
                </p>
              </div>
              <div className="about__content-bottom">
                <div className="about__content-circle">
                  <Image src={circel} alt="img" style={imgStyle} />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                  </svg>
                </div>
                <div className="about__funFact-wrap">
                  {/* <div className="about__funFact-lists">
                    <div className="about__funFact-item">
                      <h2 className="count">
                        <CounterUp number={40} text="K" />
                      </h2>
                      <p>Active Players</p>
                    </div>
                    <div className="about__funFact-item">
                      <h2 className="count">
                        <CounterUp number={12} text="K" />
                      </h2>
                      <p>NFT</p>
                    </div>
                    <div className="about__funFact-item">
                      <h2 className="count">
                        <CounterUp number={30} text="K" />
                      </h2>
                      <p>Artist</p>
                    </div>
                  </div> */}
                  <div className="about__content-btns">
                    <Link href="/contact" className="tg-btn-3 tg-svg">
                      <SvgIconCom icon={shape} id="svg-6" />
                      <span>read more</span>
                    </Link>
                    <a
                      className="popup-video cursor-pointer"
                      href="https://youtu.be/Ana5iM6D7oo?si=rzoXfN9TXSiT9c7B"
                      target="blank"
                    >
                      <i className="fas fa-play"></i>
                      <span className="text">How It Work</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"ssrNcwxALS4"}
      />
      {/* video modal end */}
    </>
  );
};

export default AboutAreaTwo;
