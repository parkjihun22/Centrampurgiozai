import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

// 1) 입지 카드 데이터 교체
const LocationSection = [
  {
    img: section2Image1,
    titleText: "원도심 재개발 축 중심<br />미래가치 높은 핵심 입지",
    contentText:
      "사직1구역 랜드마크 단지로 도심 주거 타운 형성<br />재정비·생활 인프라 확충으로 가치 상승 기대",
  },
  {
    img: section2Image2,
    titleText: "행정·의료 인프라 프리미엄<br />생활밀착 편의",
    contentText:
      "청주시청(예정)·청주의료원 인접<br />관공서·금융·문화시설 가까운 원스톱 생활권",
  },
  {
    img: section2Image3,
    titleText: "도심·광역 교통 우수<br />편리한 접근성",
    contentText:
      "사직대로·직지대로·1·2순환로 인접<br />청주IC·서청주IC·KTX/SRT 오송역 연계로 광역 이동 수월",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 밀집<br />도보 생활권",
    contentText:
      "홈플러스·CGV·예술의전당 이용권<br />성안길 상권 등 쇼핑·문화가 가까운 도심 라이프",
  },
  {
    img: section2Image5,
    titleText: "교육 프리미엄<br />초·중·고 학세권",
    contentText:
      "솔밭·한벌·흥덕초 등 도보 통학권(주변)<br />사직중·청주중 등 인근 배정권역·학원가 접근 용이",
  },
  {
    img: section2Image6,
    titleText: "자연·휴식 인프라<br />쾌적한 녹지 생활",
    contentText:
      "무심천 산책로·사직/운천공원 인접<br />단지 내 공원형 조경으로 일상 속 힐링",
  },
];

// 2) 페이지 컴포넌트(메타/OG/트위터/JSON-LD/히어로 카피 수정)
const LocationEnvironment1 = () => {
  const menuContents = [
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
        <title>청주 센텀 푸르지오 자이 - 입지환경</title>
        <meta
          name="description"
          content="청주 센텀 푸르지오 자이의 입지환경을 확인하세요. 사직1구역 최중심 입지, 사직대로·직지대로·1·2순환로, 청주IC·서청주IC·KTX/SRT 오송역 연계, 홈플러스·청주의료원·예술의전당 등 원스톱 생활 인프라."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.bunyang-114.com/LocationEnvironment/intro" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="청주 센텀 푸르지오 자이" />
        <meta property="og:title" content="청주 센텀 푸르지오 자이 - 입지환경" />
        <meta
          property="og:description"
          content="도심·광역 교통과 생활 인프라가 집약된 청주 센텀 푸르지오 자이의 핵심 입지 정보를 한눈에."
        />
        <meta property="og:url" content="https://www.bunyang-114.com/LocationEnvironment/intro" />
        <meta property="og:image" content="https://www.bunyang-114.com/img/og/location.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="청주 센텀 푸르지오 자이 - 입지환경" />
        <meta
          name="twitter:description"
          content="사직1구역 최중심, 사직대로·직지대로·순환로·IC·오송역까지 편리한 접근과 풍부한 도심 인프라."
        />
        <meta name="twitter:image" content="https://www.bunyang-114.com/img/og/location.jpg" />
        <meta name="twitter:url" content="https://www.bunyang-114.com/LocationEnvironment/intro" />

        {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "청주 센텀 푸르지오 자이 - 입지환경",
            url: "https://www.bunyang-114.com/LocationEnvironment/intro",
            description:
              "사직1구역 최중심 입지, 사직대로·직지대로·1·2순환로·청주IC·서청주IC·KTX/SRT 오송역 연계, 홈플러스·청주의료원·예술의전당 등 생활 인프라를 갖춘 입지환경.",
            primaryImageOfPage: {
              "@type": "ImageObject",
              contentUrl: "https://www.bunyang-114.com/img/og/location.jpg",
              width: 1200,
              height: 630
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "홈", item: "https://www.bunyang-114.com/" },
                { "@type": "ListItem", position: 2, name: "입지환경", item: "https://www.bunyang-114.com/LocationEnvironment/intro" }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />

      {/* SEO: 페이지 제목/설명 */}
      <h1 className={styles.screenReaderOnly}>청주 센텀 푸르지오 자이 - 입지환경</h1>
      <p className={styles.screenReaderOnly}>
        청주 센텀 푸르지오 자이의 입지 정보를 확인하세요.
        사직대로·직지대로·1·2순환로 및 청주IC·서청주IC로 도심과 광역 이동이 편리하며,
        KTX/SRT 오송역 연계로 수도권 접근이 수월합니다.
        홈플러스, 청주의료원, 예술의전당, 성안길 상권 등 도심 인프라를 누리는 원스톱 생활 입지입니다.
      </p>

      {/* 히어로 카피 교체 */}
      <div className={styles.textBox}>
        <div>원도심 최중심, 삶이 가까워지는 곳</div>
        <div>청주 센텀 푸르지오 자이에서 누리는 도심 프리미엄</div>
      </div>


      <img
        src={page1}
        className={styles.image2}
        alt="청주센텀푸르지오자이입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 청주센텀푸르지오자이 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
