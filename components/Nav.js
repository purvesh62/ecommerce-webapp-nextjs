import Link from "next/link";
import { NavStyles, NavItems } from "@/styles/NavStyles";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "./Carts";
const Nav = () => {
  return (
    <NavStyles>
      <Link href={"/"}>Styled.</Link>
      <NavItems>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      <Cart />
    </NavStyles>
  );
};

export default Nav;
