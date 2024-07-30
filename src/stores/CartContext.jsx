import { useReducer, createContext } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (id) => { },
    clearCart: () => { }
});

function cartReducer(state, action) {
    if (action.type === 'ADD_ITEM') {
        // checking if the item is already exist or not return index or -1
        const existingCartItemIndex = state.items.findIndex(
            (item) => action.item.id === item.id
        );

        const updateItems = [...state.items];

        if (existingCartItemIndex > -1) {
            const existedItem = state.items[existingCartItemIndex];
            const updateItem = {
                ...existedItem,
                quantity: existedItem.quantity + 1,
            };
            updateItems[existingCartItemIndex] = updateItem;
        } else {
            updateItems.push({ ...action.item, quantity: 1 });
        }
        return { ...state, items: updateItems };
    }
    if (action.type === 'REMOVE_ITEM') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => action.id === item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];
        if (existingCartItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updateItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
            };
            updatedItems[existingCartItemIndex] = updateItem;
        }
        return { ...state, items: updatedItems };
    }
    if (action.type == 'CLEAR_CART') {
        return { ...state, items: [] }
    }
    return state;
}

export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    }
    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    }
    function clearCart() {
        dispatchCartAction({ type: 'CLEAR_CART' })
    }
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart
    };
    console.log(cartContext);
    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    );
}

export default CartContext;