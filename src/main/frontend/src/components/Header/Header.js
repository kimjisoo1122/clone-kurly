import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping, faGripLines, faLocationDot, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import style from './Header.module.css'
import logo from '../../img/kurlyLogo.svg'
import Input from "../Input/Input";
const Header = () => {
	return (
			<header className={style.headerContainer}>
				{/*탑링크*/}
				<div className={style.topLinkContainer}>
					<ul className={style.topLinkList}>
						<li className={`${style.sign} ${style.topLink}`}>회원가입</li>
						<li className={`${style.login} ${style.topLink}`}>로그인</li>
						<li className={`${style.faq} ${style.topLink}`}>고객센터
							<div className={style.faqListContainer}>
								<ul className={style.faqList}>
									<li className={style.faq}>공지사항</li>
									<li className={style.faq}>자주하는질문</li>
									<li className={style.faq}>1:1문의</li>
									<li className={style.faq}>대량주문 문의</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>

				{/*메인*/}
				<div className={style.mainContainer}>
					<div className={style.mainLogo}>
						<img src={logo} alt="마켓컬리로고" />
						<h1>마켓컬리</h1>
					</div>

					<div className={style.mainSearch}>
						<Input placeHolder="검색어를 입력해주세요" borderColor="rgb(95, 0, 128)" hasBorder={false} />
						<FontAwesomeIcon className={style.mainSearchIcon} icon={faMagnifyingGlass}/>
					</div>
					<div className={style.mainIconContainer}>
						<div className={`${style.mainIconLocation} ${style.mainIcon}`}>
							<FontAwesomeIcon icon={faLocationDot}/>
						</div>
						<div className={`${style.mainIconHeart} ${style.mainIcon}`}>
							<FontAwesomeIcon icon={faHeart}/>
						</div>
						<div className={`${style.mainIconShopping} ${style.mainIcon}`}>
							<FontAwesomeIcon icon={faCartShopping}/>
						</div>
					</div>
				</div>

				{/* 카테고리 */}
				<div className={`${style.categoryContainer}`}>
					<div className={style.categoryTitleContainer}>
						<div className={style.categoryTitleIcon}>
							<FontAwesomeIcon icon={faGripLines}/>
						</div>
						<span className={style.categoryTitle}>카테고리</span>
					</div>
					<div>
						<ul className={style.categoryList}>
							<li>신상품</li>
							<li>베스트</li>
							<li>알뜰쇼핑</li>
							<li>특가/혜택</li>
						</ul>
					</div>
					<div className={style.categoryDeliveryContainer}>
						<span className={style.categoryDelivery}>샛별・택배 </span>
						<span className={style.categoryDeliveryGuide}>배송안내</span>
					</div>
				</div>
			</header>
	);
}
export default Header;