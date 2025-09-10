import React from "react";
import CartItem from "./CartItem";

function Cart({ cartItems, setCartItems, setIsShowOrder, total }) {
   return (
      <div className="w-full lg:w-[40%] xl:w-[30%] h-fit p-6 bg-white rounded-lg">
         <h2 className="text-2xl text-red font-bold pb-5">
            Your Cart ({cartItems.length})
         </h2>
         {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center pb-5">
               <img
                  className="aspect-auto w-fit h-fit"
                  src="./assets/images/illustration-empty-cart.svg"
                  alt="emty-cart-img"
               />
               <p className="text-rose-500 font-semibold pt-5">
                  Your added itmes will apear here.
               </p>
            </div>
         ) : (
            <div>
               <div className="pb-3">
                  {cartItems.map((item) => (
                     <CartItem
                        deleteFn={() =>
                           setCartItems((prev) =>
                              prev.filter(
                                 (prevItem) => item.name !== prevItem.name
                              )
                           )
                        }
                        key={item.name}
                        name={item.name}
                        price={item.price}
                        count={item.count}
                     />
                  ))}
               </div>
               <div className="flex items-center justify-between text-rose-900 pb-6">
                  <span className="">Order Total</span>{" "}
                  <span className="text-3xl font-bold">${total}</span>
               </div>
               <div className="w-full py-3 mb-6 bg-rose-100 text-rose-900 flex items-center justify-center gap-x-2 rounded-lg">
                  <img
                     src="./assets/images/icon-carbon-neutral.svg"
                     alt="carbon-neutral"
                  />
                  <p>
                     This is a{" "}
                     <span className="font-semibold">carbon neutral</span>{" "}
                     delivery
                  </p>
               </div>
               <button
                  className="w-full bg-red/90 text-rose-50 rounded-4xl py-3.5 cursor-pointer hover:bg-red"
                  onClick={() => setIsShowOrder(true)}
               >
                  Confirm Order
               </button>
            </div>
         )}
      </div>
   );
}

export default Cart;
