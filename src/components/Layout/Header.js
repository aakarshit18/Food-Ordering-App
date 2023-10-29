import { Fragment } from "react";
import mealsImage from '../Assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Food Cart</h1>
                <HeaderCartButton onShow={props.onShow}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Exotic food items' />
            </div>
        </Fragment>

    );
}
export default Header;