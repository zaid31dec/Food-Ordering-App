import Header from "./components/Header.jsx";
import Meals from './components/Meals.jsx'
import { CartContextProvider } from "./stores/CartContext.jsx";
import Cart from "./components/Cart.jsx";
import { UserProgressProvider } from "./stores/UserProgressContext.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout/>
      </CartContextProvider>
    </UserProgressProvider>
  );
}

export default App;
