import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
import { store } from "../../../State/store";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector(store => store);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart());
  },[cart.updateCartItem,cart.deleteCartItem]);

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative pt-5">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => (
            <CartItem item={item}/>
          ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
          <div className="shadow-lg border rounded-md">
            <p className="uppercase font-bold opacity-60 pb-4 text-center mt-5">
              Price Details
            </p>

            <div className="space-y-1 font-semibold mb-10 px-10">
              <Divider />
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-600">₹{cart.cart?.discount}</span>
              </div>
              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-600">FREE</span>
              </div>
              <Divider />
              <div className="flex justify-between pt-3 text-black font-bold ">
                <span>Total Amount</span>
                <span>₹{cart.cart?.totalDiscountedPrice}</span>
              </div>
              <br></br>
              <Button
                onClick={handleCheckout}
                variant="contained"
                className="w-full "
                sx={{ px: "2.5rem", py: "0.6rem", bgcolor: "#9155fd" }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
