import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="청주센텀푸르지오자이-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

// 문구만 푸르지오자이 기준으로 전면 교체한 버전
const contents = (text, isLoaded) => { 
  if (text === '신영지웰' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내' || text === '청주센텀푸르지오자이') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청주 원도심의 새로운 랜드마크, 사직1구역 최중심 라이프.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청주의료원·시청·홈플러스·무심천이 가까운 원스톱 생활 인프라.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청주센텀푸르지오자이에서 누리는 1군 브랜드 프리미엄.
        </div>
      </>
    );
  } else if (text === '사업개요' || text === '세대안내' || text === '인테리어' || text === '청약안내' || text === '모집공고안내' || text === '인지세납부안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          충북 청주시 서원구 사직동, 지하2층~지상29층 22개동 2,271세대 대단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          전용 59~145㎡, 일반분양 1,538세대 · 2028년 12월 입주 예정.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          남향 위주 동배치와 4Bay 특화 설계로 채광·통풍 극대화.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          대우건설·GS건설 컨소시엄이 선보이는 프리미엄 브랜드 아파트.
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청주시청·청주의료원·홈플러스·예술의전당이 가까운 도심 인프라.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          무심천·사직공원·운천공원으로 완성되는 쾌적한 자연환경.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          충북 대표 1군 브랜드 대단지, 미래가치 높은 원도심 재개발 프리미엄.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          남향 위주 배치, 법정기준 대비 2배 이상 녹지 확보한 공원형 단지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          59㎡~145㎡ 다양한 타입 구성, 드레스룸·팬트리 등 수납 특화 설계.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          피트니스·실내골프·사우나·스카이라운지 등 최고급 커뮤니티.
        </div>
      </>
    );
  } else {
    // 기타 탭 대비 기본 문구 (필요 시 조정 가능)
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          청주 센텀 푸르지오 자이에서 시작하는 새로운 주거 기준.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          원도심 최중심, 프리미엄 라이프를 누리세요.
        </div>
      </>
    );
  }
};


