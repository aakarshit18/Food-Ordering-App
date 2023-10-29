import { useRef } from "react";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const inputRef = useRef();

    function submitHandeler(event) {
        event.preventDefault();
        const enteredAmount = inputRef.current.value;
        const amount = +enteredAmount;
        if (amount === 0 || amount < 1 || amount > 5) { return }
        props.addAmountHandeler(amount);
    }

    return (
        <form onSubmit={submitHandeler}>
            <div className={classes.form} >
                <Input ref={inputRef} label='Amount' item={{
                    id: props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
                />
                <button >+ Add</button>
            </div>
        </form>);
}
export default MealItemForm;