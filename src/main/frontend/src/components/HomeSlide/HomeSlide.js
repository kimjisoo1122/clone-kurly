import style from './HomeSlide.module.css'
import {useEffect, useRef, useState} from "react";

const HomeSlide = () => {

	const homeSlideContainerRef = useRef();
	const homeSlideImgRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [imgSize, setImgSize] = useState(0);

	useEffect(() => {
		setImgSize(homeSlideImgRef.current.childElementCount);
		homeSlideContainerRef.current.style.width = `${imgSize * 100}vw`;
	}, []);

	useEffect(() => {

		const imgSlideLoop = setTimeout(() => {
			setCurrentIndex(prev => {
				if (prev < homeSlideImgRef.current.childElementCount - 1) {
					return prev + 1;
				} else return 0;
			})
		}, 3000);

		return clearTimeout(imgSlideLoop);
	}, [currentIndex])

	useEffect(() => {
		homeSlideContainerRef.current.style.transform =
				currentIndex === 0
						? `translate(000vw)`
						: `translate(-${currentIndex}00vw)`
	}, [currentIndex])

	const handlePrev = () => {
		setCurrentIndex(prev => {
			if (currentIndex === 0) {
				setCurrentIndex(imgSize - 1)
			} else {
				setCurrentIndex(prev - 1);
			}

		});
	}
	const handleNext = () => {
		setCurrentIndex(prev => {
			if (currentIndex === imgSize - 1) {
				setCurrentIndex(0)
			} else {
				setCurrentIndex(prev + 1);
			}
		});
	};

	return (
			<div className={style.container}>
				<div ref={homeSlideContainerRef} className={style.homeSlideContainer}>
					<div ref={homeSlideImgRef} className={style.homeSlideImg}>
						<img src="/img/homeSlides/homeSlide1.jpg" alt="Home슬라이드1"/>
						<img src="/img/homeSlides/homeSlide2.jpg" alt="Home슬라이드2"/>
						<img src="/img/homeSlides/homeSlide3.png" alt="Home슬라이드3"/>
					</div>
				</div>
				<div
						onClick={handlePrev}
						className={`${style.homeSlideBtn} ${style.homeSlideLeftBtn}`}>
					<span>&lt;</span>
				</div>
				<div
						onClick={handleNext}
						className={`${style.homeSlideBtn} ${style.homeSlideRightBtn}`}>
					<span>&gt;</span>
				</div>
				<div className={style.homeSlideIndex}>{currentIndex + 1} / {imgSize}</div>
			</div>
	);
}

export default HomeSlide;