import HomeSlide from "../../components/HomeSlide/HomeSlide";
import style from './Home.module.css'

const Home = () => {
	return (
			<>
				<HomeSlide></HomeSlide>
				<div className={style.homeContainer}>
				</div>
			</>
	);
}
export default Home;