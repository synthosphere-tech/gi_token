import React from 'react';
import Image from 'next/image';
import TextAnimation from '../common/text-animation';
import AboutDots from '../svg/about-dots';
import Circle from '../svg/circle';
import circle_img from '@/assets/img/icons/circle.svg';
import logo from '@/assets/img/logo/GI2.png'
import mask_img from '@/assets/img/others/vector 2.png';
import mask_img_2 from '@/assets/img/others/519x362.png';
import { auto } from '@popperjs/core';

const AboutAreaThree = () => {
  return (
    <section className="about__area-three section-pt-130 section-pb-130">
    <div className="container">
        <div className="row">
            <div className="col-xl-4">
                <div className="about__title-wrap">
                    <h2 className="title">
                        <i>Play</i>
                        <span>Game</span>
                        <i>and earn</i>
                        <i><b>Crypto</b></i>
                    </h2>
                    <div className="about__content-circle">
                        <Image src={circle_img} alt="logo"/>
                        <Circle/>
                    </div>
                </div>
            </div>
            <div className="col-xl-8">
                <div className="about__three-images">
                    <Image src={mask_img} alt="img" className="left"/>
                    <Image src={mask_img_2} alt="img" className="right"/>
                    <div className="about__dots">
                        <AboutDots/>
                    </div>
                </div>
                <div className="about__three-paragraph">
                  <TextAnimation style_2={true} title='At Gaming Intelligence, we blend innovation and passion to create immersive gaming experiences. Our mission is to push the boundaries of virtual worlds, crafting unforgettable adventures for players everywhere. With a team of dedicated visionaries, we harness the power of technology to bring your gaming dreams to life. Join us on this thrilling journey, where imagination knows no limits and every player is a hero.' />
                </div>
            </div>
        </div>
    </div>
    <h2 className="big-title">online</h2>
</section>
  );
};

export default AboutAreaThree;