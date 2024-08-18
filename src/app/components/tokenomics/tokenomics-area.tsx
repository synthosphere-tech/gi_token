"use client";
import tokenomicsData from '@/data/tokenomics-data';
import React from 'react'
import TokennomicsBox from '../tournaments/tokenomics-box';

const TokenomicsArea = () => {
  return (
    <div>
        <section className="about__area-two section-pt-120 section-pb-150">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
                {tokenomicsData.map((items) => (
                    <div key={items.id} className="col-xl-8 col-lg-8 col-md-8 col-sm-9">
                        <TokennomicsBox items={items}  />
                    </div>
                    ))}
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TokenomicsArea