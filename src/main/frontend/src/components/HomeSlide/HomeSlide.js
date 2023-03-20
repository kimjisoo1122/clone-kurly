import homeSlide1 from '../../img/homeSlide1.jpg'
import homeSlide2 from '../../img/homeSlide2.jpg'
import style from './HomeSlide.module.css'
import {useEffect, useRef, useState} from "react";

const HomeSlide = () => {

	const homeSlideContainerRef = useRef();
	const homeSlideImgRef = useRef();
	const [swiperCurrentPosition, setSwiperCurrentPosition] = useState(0);
	const [loop, setLoop] = useState(null);
	let [imgSize, setImgSize] = useState(0);

	useEffect(() => {
		setImgSize(homeSlideImgRef.current.childElementCount);
		homeSlideContainerRef.current.style.width = `${imgSize * 100}vw`;
	}, []);

	useEffect(() => {

		const swiperLoop = setTimeout(() => {
			setSwiperCurrentPosition(prev => {
				if (prev < homeSlideImgRef.current.childElementCount - 1) {
					return prev + 1;
				} else return 0;
			})
		}, 3000);

		setLoop(swiperLoop);
		return clearTimeout(loop);
	}, [setSwiperCurrentPosition, swiperCurrentPosition])

	useEffect(() => {
		homeSlideContainerRef.current.style.transform =
				swiperCurrentPosition === 0
					? `translate(000vw)`
					: `translate(-${swiperCurrentPosition}00vw)`
	}, [swiperCurrentPosition])

	function prev() {
		setSwiperCurrentPosition(prev => prev - 1);
	}
	function next() {
		setSwiperCurrentPosition(prev => prev + 1);
	}

	return (
			<div className={style.container}>
				<div ref={homeSlideContainerRef} className={style.homeSlideContainer}>
					<div ref={homeSlideImgRef} className={style.homeSlideImg}>
						<img src={homeSlide1} alt="Home슬라이드1"/>
						<img src={homeSlide2} alt="Home슬라이드2"/>
						<img src={homeSlide2} alt="Home슬라이드2"/>
					</div>
				</div>
				{
					swiperCurrentPosition + 1 > 1
						?
							<div
								onClick={prev}
								className={`${style.homeSlideBtn} ${style.homeSlideLeftBtn}`}>
								<span>&lt;</span>
							</div>
						: null
				}
				{
					swiperCurrentPosition + 1 < imgSize
						?
						<div
							onClick={next}
							className={`${style.homeSlideBtn} ${style.homeSlideRightBtn}`}>
							<span>&gt;</span>
						</div>
						: null
				}
				<div className={style.homeSlideIndex}>{swiperCurrentPosition + 1} / {imgSize}</div>
			</div>
	);
}


export default HomeSlide;