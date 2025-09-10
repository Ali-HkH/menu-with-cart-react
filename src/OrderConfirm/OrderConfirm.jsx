import React from "react";
import OrderItem from "./OrderItem";

function OrderConfirm({ cartItems, isShowOrder, total, newOrderFn }) {
   return (
      <div
         className={`absolute left-0 top-0 w-full h-full bg-black/50 ${
            isShowOrder ? "flex" : "hidden"
         } items-start justify-center`}
      >
         <div className="bg-white p-8 rounded-2xl  bottom-0 absolute sm:bottom-auto sm:top-[20%] sm:left-[50%] sm:translate-x-[-50%] w-full sm:w-[550px]">
            <img
               className="w-fit h-fit pb-4"
               src="./assets/images/icon-order-confirmed.svg"
               alt="order-confirmed"
            />
            <h2 className="text-3xl font-bold ">Order Confirmed</h2>
            <p className="text-rose-500 pt-2">We hope you enjoy your food!</p>
            <div className="w-full bg-rose-100 my-4 rounded-xl">
               {cartItems.map((item, index) => (
                  <OrderItem
                     key={item.name}
                     image={item.image.thumbnail}
                     name={item.name}
                     price={item.price}
                     count={index + 1}
                  />
               ))}

               <div className="flex items-center justify-between p-5">
                  <span>Order Total</span>
                  <span className="text-3xl text-rose-900 font-bold">
                     ${total}
                  </span>
               </div>
            </div>
            <button
               className="w-full p-3 text-white bg-red/90 text-lg font-semibold rounded-3xl mt-3 cursor-pointer hover:bg-red"
               onClick={newOrderFn}
            >
               Start New Order
            </button>
         </div>
      </div>
   );
}

export default OrderConfirm;
