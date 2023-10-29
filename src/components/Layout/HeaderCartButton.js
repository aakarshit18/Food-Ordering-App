
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css"

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [buttonBump, setButtonBump] = useState(false);

    let buttonClass=`${classes.button} ${buttonBump ? classes.bump : ''} `

    useEffect(() => {
        if(cartCtx.item.length === 0)
        {return}
        setButtonBump(true)

        const timeOut =setTimeout(()=>{setButtonBump(false)},300)

        return ()=>{clearTimeout(timeOut)}
     }, [cartCtx.item])


    let totalItemsInCart = cartCtx.item.reduce((currentNum, item) => {
        return currentNum + item.amount;
    }, 0)

    return (
        <button className={buttonClass} onClick={props.onShow}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {totalItemsInCart}
            </span>
        </button>
    );
}
export default HeaderCartButton;