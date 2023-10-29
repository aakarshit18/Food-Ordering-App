import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext)

    function addHandeler(item) { 
        cartCtx.addItem({...item ,amount:1})
    }
    function removeHandeler(id) { 
        cartCtx.removeItem(id);
    }


    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.item.map(item => (
                <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={removeHandeler.bind(null, item.id)} onAdd={addHandeler.bind(null, item)} />))}
        </ul>);

    const orderButtonStatus = cartCtx.item.length > 0

    return (
        <Modal onHide={props.onHide}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartCtx.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHide} className={classes['button--alt']}>Go back</button>
                {orderButtonStatus && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}
export default Cart;


