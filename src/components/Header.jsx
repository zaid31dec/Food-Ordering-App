import { useContext } from 'react';

import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import CartContext from '../stores/CartContext';
import UserProgressContext from '../stores/UserProgressContext';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItem = cartCtx.items.reduce((totalNumberOfItem, item) => {
        return totalNumberOfItem + item.quantity;
    }, 0);

    function handleOnClick() {
        userProgressCtx.showCart();
    }
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Food Logo" />
                <h1>Zaid corner</h1>
            </div>
            {/* here this 0 will be replace with the length of different itmes you have selected */}
            <nav>
                <Button textOnly onClick={handleOnClick}>
                    Cart ({totalCartItem})
                </Button>
            </nav>
        </header>
    );
}