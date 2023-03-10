import './Header.module.css'
import mealsImage from '../../assets/meals.jpeg'
import classes from "./Header.module.css"
import HeaderCartButton from './HeaderCartButton'
const Header = (props) =>{
    return <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img alt='A table full of delicious food'src={mealsImage}/>
        </div>
    </>
}

export default Header;