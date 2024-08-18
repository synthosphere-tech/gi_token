"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import banner_bg from "@/assets/img/bg/background.png";
import shape from "@/assets/img/icons/shape.svg";
import SvgIconCom from "../common/svg-icon-anim";
import { Line } from "rc-progress";
import { Tooltip } from "@nextui-org/tooltip";

const HeroBannerTwo = () => {
  return (
    <section className="banner__area banner__padding">
      <div
        className="banner__bg tg-jarallax"
        style={{ backgroundImage: `url(${banner_bg.src})` }}
      ></div>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="banner__content slider__content text-center">
              <h2 className="title wow bounceInLeft" data-wow-delay=".2s">
                gaming intelligence
              </h2>
              <p className="wow bounceInLeft" data-wow-delay=".4s">
                play games, earn crypto
              </p>
              <div
                className="banner__btn wow bounceInLeft"
                data-wow-delay=".6s"
              >
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="">
                      <div className="about__buttons">
                        <Link href="#" className="tg-btn-2">
                          Buy with BNB
                        </Link>
                        <Link href="#" className="tg-btn-2 -secondary">
                          Buy with matic
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row justify-content-center mt-20">
                  <div className="col-xl-6 col-lg-7 col-md-10">
                    <div className="section__title text-center mb-60">
                      <h2 className="">top rated steamers</h2>
                    </div>
                  </div>
                </div>
                <Tooltip content="20% presale">
                  <div className="swiper-scrollbar">
                    <Line percent={20} strokeWidth={2} strokeColor="#FFBE18" />
                  </div>
                </Tooltip>
                <h1 className="text-2xl mt-8 md:text-4xl font-bold font-redhat text-rose-500 font-bold text-center mx-auto pt-50 ">
                  Ongoing Private Sale
                </h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBannerTwo;
