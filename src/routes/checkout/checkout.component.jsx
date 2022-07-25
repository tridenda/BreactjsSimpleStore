import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import CheckoutTable from "../../components/checkout-table/checkout-table.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return <CheckoutTable products={cartItems} />;
};

export default Checkout;
