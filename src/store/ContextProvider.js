import { useReducer } from "react";
import CartContext from "./cart-context";

function cartReducer(state, actions) {

    if (actions.type === 'ADD') {
        let totalAmount = state.amount + actions.item.amount * actions.item.price;

        const sameItemindex = state.item.findIndex((item) => item.name === actions.item.name);
        const sameItem = state.item[sameItemindex];
        let newItem;
        if (sameItem) {
            let item = { ...sameItem, amount: sameItem.amount + actions.item.amount };
            newItem = [...state.item];
            newItem[sameItemindex] = item;
        }
        else {
            newItem = state.item.concat(actions.item);
        }
        return ({ item: newItem, amount: totalAmount });
    }


    if (actions.type === 'Del') {
        const itemIndex = state.item.findIndex(item => item.id === actions.id);
        const item = state.item[itemIndex];

        const newAmount = state.amount - item.price;

        let newItem;
        if (item.amount > 1) {
            let tempItem = { ...item, amount: item.amount - 1 }
            newItem =[...state.item]
            newItem[itemIndex]=tempItem;
        }else{
            newItem=state.item.filter(item => item.id !== actions.id)
        }
        return ({ item: newItem, amount: newAmount });
    }
}

const ContextProvider = (props) => {

    const [cartData, cartDispatcher] = useReducer(cartReducer, { item: [], amount: 0 });

    function addItemToCartHandeler(item) {
        cartDispatcher({ type: 'ADD', item: item });
    };

    function removeItemFromCartHandeler(id) {
        cartDispatcher({ type: 'Del', id: id })
    };

    let cartItems = {
        item: cartData.item,
        totalAmount: cartData.amount,
        addItem: addItemToCartHandeler,
        removeItem: removeItemFromCartHandeler
    }

    return (
        <CartContext.Provider value={cartItems}>{props.children}</CartContext.Provider>
    );
}
export default ContextProvider;