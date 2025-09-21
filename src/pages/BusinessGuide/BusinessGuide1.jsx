import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";



const projectData = [
	{ label: '사업명', value: '청주 센텀 푸르지오 자이' },
	{ label: '사업위치', value: '충청북도 청주시 서원구 사직동 247-1번지 일원' },
	{ label: '대지면적', value: '100,172.50㎡' },
	{ label: '건축면적', value: '16,954.1034㎡' },
	{ label: '연면적', value: '398,106.9690㎡' },
	{ label: '용적률', value: '247.26%' },
	{ label: '건폐율', value: '16.92%' },
	{ label: '건축규모', value: '지하 2층 ~ 지상 29층, 22개동' },
	{ label: '세대수', value: '총 2,271세대 (일반분양 1,538세대)' },
	{ label: '주차대수', value: '3,423대 (세대당 약 1.5대)' },
	{ label: '주택형', value: '전용 59·84·99·114·145㎡' },
  ];
  
const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		// { title: "공급안내", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

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
			{/* 페이지별 메타: title/description/og/canonical 만 관리 */}
			<title>청주 센텀 푸르지오 자이 - 사업안내</title>
			<meta
				name="description"
				content="충북 청주시 서원구 사직동 247-1번지 일원, 지하2~지상29층 22개 동 2,271세대(일반 1,538세대). 전용 59·84·99·114·145㎡, 2028년 12월 입주 예정. 원도심 최중심 입지와 풍부한 생활 인프라를 갖춘 사업 개요와 입지를 확인하세요."
			/>
			<meta name="robots" content="index,follow" />
			<link rel="canonical" href="https://www.bunyang-114.com/BusinessGuide/intro" />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="청주 센텀 푸르지오 자이" />
			<meta property="og:title" content="청주 센텀 푸르지오 자이 - 사업안내" />
			<meta
				property="og:description"
				content="사직1구역 최중심, 22개동 2,271세대 대단지. 남향 위주·4Bay 특화, 프리미엄 커뮤니티와 도심 인프라까지 사업 핵심 정보를 한눈에."
			/>
			<meta property="og:url" content="https://www.bunyang-114.com/BusinessGuide/intro" />
			<meta property="og:image" content="https://www.bunyang-114.com/img/og/business.jpg" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="청주 센텀 푸르지오 자이 - 사업안내" />
			<meta
				name="twitter:description"
				content="22개동 2,271세대(일반 1,538), 전용 59~145㎡, 프리미엄 커뮤니티와 원도심 인프라를 갖춘 청주 센텀 푸르지오 자이의 사업 개요."
			/>
			<meta name="twitter:image" content="https://www.bunyang-114.com/img/og/business.jpg" />
			<meta name="twitter:url" content="https://www.bunyang-114.com/BusinessGuide/intro" />

			{/* JSON-LD (대표 이미지/브레드크럼 포함) */}
			<script type="application/ld+json">
				{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebPage",
				name: "청주 센텀 푸르지오 자이 - 사업안내",
				url: "https://www.bunyang-114.com/BusinessGuide/intro",
				description:
					"충북 청주시 서원구 사직동 247-1번지 일원, 지하2~지상29층 22개 동 2,271세대(일반 1,538세대). 전용 59·84·99·114·145㎡, 2028년 12월 입주 예정. 원도심 최중심 입지와 풍부한 생활 인프라를 갖춘 사업 개요와 입지 정보.",
				primaryImageOfPage: {
					"@type": "ImageObject",
					contentUrl: "https://www.bunyang-114.com/img/og/business.jpg",
					width: 1200,
					height: 630
				},
				breadcrumb: {
					"@type": "BreadcrumbList",
					itemListElement: [
					{ "@type": "ListItem", position: 1, name: "홈", item: "https://www.bunyang-114.com/" },
					{ "@type": "ListItem", position: 2, name: "사업안내", item: "https://www.bunyang-114.com/BusinessGuide/intro" }
					]
				}
				})}
			</script>
			</Helmet>

			<Header isChanged={isScroll} />
			<FixIcon />

			<Bener title="사업개요" />

			<MenuBar contents={menuContents} />

			{/* SEO: 페이지 제목/설명 (스크린리더용) */}
			<h1 className={styles.screenReaderOnly}>청주 센텀 푸르지오 자이 - 사업안내</h1>
			<p className={styles.screenReaderOnly}>
			청주 센텀 푸르지오 자이는 충북 청주시 서원구 사직동 247-1번지 일원에 들어서는
			지하 2층부터 지상 29층까지 22개 동, 총 2,271세대(일반 1,538세대) 대단지입니다.
			전용 59·84·99·114·145㎡로 구성되며 남향 위주·4Bay 특화 설계와 프리미엄 커뮤니티를 갖추었습니다.
			원도심 최중심 입지의 생활 인프라와 더불어 2028년 12월 입주 예정입니다.
			</p>

			{/* 히어로 카피 */}
			<div className={styles.textBox}>
			<div>원도심 최중심 프리미엄</div>
			<div>청주 센텀 푸르지오 자이, 새로운 주거 기준</div>
			</div>


			<img className={styles.img3} src={page1} alt="청주센텀푸르지오자이-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
