import { useContext } from "react";
import Modal from "./UI/Modal"
import CartContext from "../stores/CartContext";
import { CurrencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../stores/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (total, item) => total + item.quantity * item.price, 0
    );

    function handleOnClose() {
        userProgressCtx.hideCart();
    }
    function handleGoToCheckout(){
        userProgressCtx.showCheckout();
    }
    return (
        <Modal 
            className="cart" 
            open={userProgressCtx.progress == 'cart'}
            onClose={userProgressCtx.progress == 'cart'?handleOnClose:null}
        >
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onDecrease={() => cartCtx.removeItem(item.id)}
                        onIncrease={() => cartCtx.addItem(item)}
                    />
                ))}
            </ul>
            <p className="cart-total">{CurrencyFormatter.format(cartTotal * 80)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleOnClose} >Close</Button>
                {cartCtx.items.length > 0 && (<Button onClick={handleGoToCheckout}>Go to Checkout</Button>)}
            </p>
        </Modal>
    );
}