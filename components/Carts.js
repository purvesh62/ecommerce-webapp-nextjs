import useStateContext from "lib/context";
import { CartWrapper } from "@/styles/CartStyles";

const Cart = () => {
  const { cartItems } = useStateContext();
  
  return (
    <CartWrapper>
      <div>
        <div>
          <h1>You've more shopping to do 😉</h1>
        </div>

        <div>
          <img src="" alt="" />
          <div>
            <h3>Title</h3>
            <h3>Price</h3>
          </div>
        </div>
      </div>
    </CartWrapper>
  );
};

export default Cart;
