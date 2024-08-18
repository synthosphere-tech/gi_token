"use client"
import React from 'react'
import { Itim } from 'next/font/google'
import img from "../../../../public/assets/img/others/about_img02.jpg"
import Image from 'next/image'
import Link from 'next/link'
import SvgIconCom from '../common/svg-icon-anim'
import circel from "@/assets/img/logo/GI2.png";
import fun_fact_shape from "@/assets/img/others/fun_fact_shape.png";
import fun_fact from "@/assets/img/others/graphics front.png";
import trophy from "@/assets/img/icons/trophy.png";
import shape from "@/assets/img/icons/shape.svg";
import tournament_data from '@/data/tournament-data'
import TournamentBox from '../tournaments/tournament-box'

const itim = Itim({weight: ["400"], subsets: ["latin"]})
const imgStyle = { height: "auto", width: "auto" };

const Countdown = () => {
  return (
    <section className="about__area-two section-pt-120 section-pb-150">
        <div className="container">
          <div className="row justify-content-center align-items-center">
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
                  
                </div>
                <div className="about__funFact-wrap">
                  <div className="about__content-btns">
                    <Link href="/contact" className="tg-btn-3 tg-svg">
                      <SvgIconCom icon={shape} id="svg-6" />
                      <span>read more</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-1 order-lg-2 justify-start mt-10 gap-3 insert-x-0">
              
            </div>
          </div>
        </div>
      </section>
  )
}

export default Countdown