import React, { useEffect } from "react";
import Addresscard from "../AddressCard/Addresscard";
import { Button, Divider } from "@mui/material";
import CartItem from "../Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector(store => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    dispatch(getOrderById(orderId));
  },[orderId]);

  const handleCheckout=()=>{
    dispatch(createPayment(orderId))
  }
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <Addresscard address = {order.order?.shippingAddress} />
      </div>
      <div>
        <div className="lg:grid grid-cols-3 relative pt-5">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItem item={item} />
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
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">₹{order.order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">FREE</span>
                </div>
                <Divider />
                <div className="flex justify-between pt-3 text-black font-bold ">
                  <span>Total Amount</span>
                  <span>₹{order.order?.totalDiscountedPrice}</span>
                </div>
                <br></br>
                <Button
                  variant="contained"
                  className="w-full "
                  sx={{ px: "2.5rem", py: "0.6rem", bgcolor: "#9155fd" }}
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
