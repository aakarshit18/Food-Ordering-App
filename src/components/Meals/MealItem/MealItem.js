import { useContext,} from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';


const MealsItem = (props) => {
    const price = `$ ${props.price.toFixed(2)}`

    const cartCtx=useContext(CartContext);

    function addAmountHandeler(amount){
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            price:props.price,
            amount:amount
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm addAmountHandeler={addAmountHandeler} id={props.id}/>
            </div>
        </li>);
}
export default MealsItem;
