import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		{ title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false); 
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
			<Helmet>
			<title>청주 센텀 푸르지오 자이 - 홍보영상</title>
			<meta
				name="description"
				content="청주 센텀 푸르지오 자이 홍보영상: 사직1구역 최중심 입지, 22개동 2,271세대(일반 1,538세대), 59~145㎡ 타입, 특화 커뮤니티와 공원형 조경을 영상으로 만나보세요."
			/>
			<link rel="canonical" href="https://www.bunyang-114.com/Brand/video" />
			<meta name="robots" content="index,follow" />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="청주 센텀 푸르지오 자이" />
			<meta property="og:title" content="청주 센텀 푸르지오 자이 - 홍보영상" />
			<meta
				property="og:description"
				content="청주 원도심 랜드마크, 청주 센텀 푸르지오 자이. 22개동 2,271세대, 남향 위주·4Bay 특화, 프리미엄 커뮤니티와 풍부한 도심 인프라를 영상으로 확인하세요."
			/>
			<meta property="og:url" content="https://www.bunyang-114.com/Brand/video" />
			<meta property="og:image" content="https://www.bunyang-114.com/images/og/main.jpg" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="청주 센텀 푸르지오 자이 - 홍보영상" />
			<meta
				name="twitter:description"
				content="사직1구역 최중심, 2,271세대 대단지와 특화 커뮤니티를 담은 홍보영상을 만나보세요."
			/>
			<meta name="twitter:image" content="https://www.bunyang-114.com/images/og/main.jpg" />
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="홍보영상" />

			<MenuBar contents={menuContents} />

			{/* SEO: 접근성용 페이지 제목/보이스오버 텍스트 */}
			<h1 className={styles.screenReaderOnly}>청주 센텀 푸르지오 자이 - 홍보영상</h1>
			<p className={styles.screenReaderOnly}>
			청주 센텀 푸르지오 자이의 홍보영상을 통해 사직1구역 최중심 입지와 22개동 2,271세대 규모,
			전용 59·84·99·114·145㎡ 다양한 타입, 프리미엄 커뮤니티와 공원형 조경 등
			새로운 주거 기준을 영상으로 확인하세요.
			</p>

			{/* 히어로 카피 */}
			<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
			<div>원도심 최중심에서 빛나는 프리미엄</div>
			<div>청주 센텀 푸르지오 자이, 새로운 주거 기준을 제시합니다</div>
			</div>


			<div className={styles.videoContainer}>
				<YouTube
					videoId="SLYws5roV_Q"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
