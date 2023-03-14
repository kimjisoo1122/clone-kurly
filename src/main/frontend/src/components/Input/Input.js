import style from './Input.module.css'
import {Outlet} from "react-router-dom";

const Input = ({borderColor, placeHolder, hasBorder}) => {
	console.log(borderColor);
	return (
			<div className={style.inputContainer} style={{border: `1.5px solid ${hasBorder ? borderColor : null}`}} >
				<input type="text" placeholder={placeHolder} />
			</div>
	)
}
export default Input