import Wrapper from "@/layout/wrapper";
import Header from "@/layout/header/header";
import GalleryArea from "./components/gallery/gallery-area";
import area_bg from "@/assets/img/bg/area_bg01.jpg";
import VideoArea from "./components/video/video-area";
import RoadMapArea from "./components/road-map/road-map-area";
import Footer from "@/layout/footer/footer";
import HeroBannerTwo from "./components/hero-banner/hero-banner-2";
import AboutAreaTwo from "./components/about-area/about-area-2";
import BrandArea from "./components/brand/brand-area";
import TournamentArea from "./components/tournaments/tournament-area";

export default function Home() {
  return (
    <Wrapper>
      {/* header start */}
      <Header style_2={true}/>
      {/* header end */}

      {/* main area start */}
      <main className="main--area">
        {/* hero banner start */}
        <HeroBannerTwo />
        {/* hero banner end */}

        <TournamentArea />
        {/* <TokenomicsArea /> */}

        {/* nft item area start */}
        {/* <MatchResultArea /> */}
        {/* nft item area end */}

        {/* area-background-start */}
        <div
          className="area-background"
          style={{ backgroundImage: `url(${area_bg.src})` }}
        >
          {/* about-area */}
          <AboutAreaTwo />
          {/* about-area-end */}

          {/* gallery area start */}
          <GalleryArea />
          {/* gallery area end */}
        </div>
        {/* area-background-end */}

        {/* road map area start */}
        <RoadMapArea />
        {/* road map area end */}

        {/* trending nft items start */}
        <BrandArea  />
        {/* trending nft items end */}

        {/* team area start */}
        
        {/* team area end*/}

        {/* video area start */}
        <VideoArea />
        {/* video area end */}

      </main>
      {/* main area end */}

      {/* footer start */}
      <Footer/>
      {/* footer end */}
    </Wrapper>
  );
}
