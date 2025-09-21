// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>청주 센텀 푸르지오 자이</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>충청북도 청주시 서원구 사직동 247-1번지 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 2층 ~ 지상 29층, 22개 동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 59·84·99·114·145㎡</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 2,271세대 (일반분양 1,538세대)</span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="청주 센텀 푸르지오 자이 입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="청주 센텀 푸르지오 자이 입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            사직1구역 최중심 입지와 행정·의료·생활 인프라를 누리는<br />
            청주 센텀 푸르지오 자이 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];


function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "원도심 최중심 재개발 프리미엄",
      desc:
        "사직1구역 재개발 랜드마크<br/>22개동 2,271세대 대단지(일반 1,538세대)<br/>대우건설·GS건설 컨소시엄",
    },
    {
      img: slide2,
      title: "행정·의료·생활 인프라 원스톱",
      desc:
        "청주시청(예정)·청주의료원 인접<br/>홈플러스·CGV·예술의전당 등 생활·문화 풍부<br/>무심천·사직/운천공원으로 쾌적한 일상",
    },
    {
      img: slide3,
      title: "도심·광역 교통 접근성",
      desc:
        "사직대로·직지대로·1·2순환로 인접<br/>청주IC·서청주IC로 광역 이동 수월<br/>KTX/SRT 오송역 이용 편리",
    },
    {
      img: slide4,
      title: "교육·학세권 프리미엄",
      desc:
        "솔밭·한벌·흥덕초 등 도보 통학권(주변)<br/>사직중·청주중 등 인근 배정권역(예정)<br/>학원가·도서관 등 교육 인프라 풍부",
    },
    {
      img: slide5,
      title: "프리미엄 커뮤니티",
      desc:
        "피트니스·실내골프·다목적체육관<br/>작은도서관·스터디룸·공유오피스<br/>스카이라운지·맘스카페 등 특화시설",
    },
    {
      img: slide6,
      title: "조경·설계 가치",
      desc:
        "법정 대비 2배 이상 녹지 확보(계획)<br/>남향 위주·4Bay 중심 설계<br/>지상 차 없는 공원형 단지",
    },
  ];

  // ... 기존 컴포넌트 렌더링 로직 유지

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
