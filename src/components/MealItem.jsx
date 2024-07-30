import { useContext } from 'react';
import { CurrencyFormatter } from '../util/formatting.js'
import Button from './UI/Button.jsx';
import CartContext from '../stores/CartContext.jsx';

export default function MealItem({ meal }) {
    const cartCtx = useContext(CartContext);

    function handleAddMealItem(){
        cartCtx.addItem(meal);
    }
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">
                        {CurrencyFormatter.format(meal.price * 80)}
                    </p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealItem}>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}