import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>청주 센텀 푸르지오 자이 - 프리미엄</title>
        <meta
          name="description"
          content="청주 센텀 푸르지오 자이 프리미엄: 사직1구역 최중심 입지, 22개동 2,271세대 대단지(일반 1,538), 59·84·99·114·145㎡ 타입, 프리미엄 커뮤니티와 공원형 조경, 도심·광역 교통 접근성을 확인하세요."
        />

        <link rel="canonical" href="https://www.bunyang-114.com/LocationEnvironment/primium" />
        <meta name="robots" content="index,follow" />

      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />

      {/* SEO: 페이지 제목/설명 */}
      <h1 className={styles.screenReaderOnly}>청주 센텀 푸르지오 자이 - 프리미엄</h1>
      <p className={styles.screenReaderOnly}>
        청주 센텀 푸르지오 자이만의 차별화된 프리미엄을 만나보세요.
        사직1구역 최중심 입지와 22개동 2,271세대 규모, 프리미엄 커뮤니티와 공원형 조경,
        사직대로·직지대로·순환로·IC·오송역 연계로 완성되는 도심·광역 접근성까지
        새로운 주거 기준을 제시합니다.
      </p>

      {/* 히어로 카피 */}
      <div className={styles.textBox}>
        <div>도심 프리미엄의 정점</div>
        <div>청주 센텀 푸르지오 자이, 일상의 품격을 높이다</div>
      </div>

      <img
        src={page1}
        className={styles.image3}
        alt="청주센텀푸르지오자이-image1"
      />

      
      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
