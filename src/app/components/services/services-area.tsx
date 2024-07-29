"use client";
import React, { useState } from "react";
import Image from "next/image";
import service_img_1 from "@/assets/img/others/char1.png";
import service_img_2 from "@/assets/img/others/char2.png";
import service_img_3 from "@/assets/img/others/char3.png";
import service_img_4 from "@/assets/img/others/char4.png";
import Link from "next/link";

// service images
const service_images = [
  service_img_1,
  service_img_2,
  service_img_3,
  service_img_4,
];
const service_items: {
  id: number;
  icon: string;
  title: string;
  desc: string;
}[] = [
  {
    id: 1,
    icon: "flaticon-user-profile",
    title: "Captain Blue",
    desc: "Captain Blue is a strategic mastermind known for their calm demeanor and sharp intellect. As a seasoned leader, they excel in devising complex plans and outsmarting opponents.",
  },
  {
    id: 2,
    icon: "flaticon-user-profile",
    title: "Captain Pink",
    desc: "Captain Pink is a charismatic and compassionate leader who brings energy and enthusiasm to their team. They are known for their ability to inspire and unite players, fostering a sense of camaraderie and teamwork.",
  },
  {
    id: 3,
    icon: "flaticon-user-profile",
    title: "Captain Green",
    desc: "Captain Green is an eco-warrior and defender of nature within the crypto game world. They are deeply connected to the environment and possess unique abilities to harness natural elements. ",
  },
  {
    id: 4,
    icon: "flaticon-user-profile",
    title: "Captain Orange",
    desc: "Captain Orange is a bold and adventurous leader who thrives on action and excitement. With a fiery spirit and a penchant for taking risks, they lead their team with unwavering confidence.",
  },
];

const ServicesArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleMouseOver = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseOut = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <section className="services-area services__bg-color section-pt-120 section-pb-120">
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-6">
            <div className="section__title text-start mb-65">
              <span className="sub-title tg__animate-text">
                powerful services
              </span>
              <h3 className="title">Our Powerful Services Done on time</h3>
            </div>
            <div className="services__wrapper">
              {service_items.map((item, i) => (
                <div
                  key={item.id}
                  className="services__item"
                  onMouseOver={() => handleMouseOver(i)}
                  onMouseOut={() => handleMouseOut(i)}
                >
                  <div className="services__icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="services__content">
                    <h4 className="title">
                      <Link href="/service-details">{item.title}</Link>
                    </h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="services__images">
              {service_images.map((s, i) => (
                <div
                  key={i}
                  className={`services__images-item ${
                    activeIndex === i ? "active" : ""
                  }`}
                >
                  <Image
                    src={s}
                    alt="img"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <Link href="/service-details" className="services__link">
                    <i className="flaticon-next"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
