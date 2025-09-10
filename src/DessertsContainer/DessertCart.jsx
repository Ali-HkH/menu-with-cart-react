import React, { useEffect, useState } from "react";

function DessertCart({
   name,
   image,
   category,
   price,
   cartItems,
   setCartItems,
}) {
   const [countInCart, setCountInCart] = useState(0);

   function addToCart() {
      setCountInCart(1);
      const newItem = { name, category, price, image, count: 1 };
      setCartItems((prev) => [...prev, newItem]);
   }

   function decrementCartItem() {
      if (countInCart > 0) {
         setCountInCart((prev) => prev - 1);
         setCartItems((prev) =>
            prev.map((item) => {
               if (item.name === name) {
                  return { ...item, count: item.count - 1 };
               } else {
                  return item;
               }
            })
         );
      }
   }

   function incrementCartItem() {
      setCountInCart((prev) => prev + 1);
      setCartItems((prev) =>
         prev.map((item) => {
            if (item.name === name) {
               return { ...item, count: item.count + 1 };
            } else {
               return item;
            }
         })
      );
   }

   useEffect(() => {
      if (countInCart === 0) {
         setCartItems((prev) => prev.filter((item) => item.name !== name));
      }
   }, [countInCart]);

   useEffect(() => {
      const isItemInCard = cartItems.find((item) => item.name === name);
      if (!isItemInCard) {
         setCountInCart(0);
      }
   }, [cartItems]);

   return (
      <div>
         <div className="relative mb-8 ">
            <div
               className={`rounded-2xl overflow-hidden aspect-auto ${
                  countInCart > 0 && "border-2 border-red"
               }`}
            >
               <picture>
                  <source media="(min-width: 1200px)" srcSet={image.desktop} />
                  <source media="(min-width: 768px)" srcSet={image.tablet} />
                  <source media="(min-width: 375px)" srcSet={image.mobile} />
                  <img src={image.mobile} alt={name} />
               </picture>
            </div>
            {countInCart === 0 ? (
               <button
                  className="bg-white w-44 h-11 rounded-3xl font-semibold flex items-center justify-center gap-x-2 absolute -bottom-5 left-[50%] translate-x-[-50%] border border-rose-400 text-rose-900 cursor-pointer hover:text-red"
                  onClick={addToCart}
               >
                  <img
                     src="./assets/images/icon-add-to-cart.svg"
                     alt="add-cart"
                  />
                  Add to Cart
               </button>
            ) : (
               <div className="bg-red text-white w-44 h-11 px-4 rounded-3xl font-semibold flex items-center justify-between absolute -bottom-5 left-[50%] translate-x-[-50%] border border-rose-400">
                  <button
                     className="cursor-pointer px-1 py-2 rounded-full border border-white"
                     onClick={decrementCartItem}
                  >
                     <img
                        src="./assets/images/icon-decrement-quantity.svg"
                        alt="decrement-icon"
                     />
                  </button>
                  <span className="text-lg">{countInCart}</span>
                  <button
                     className="cursor-pointer p-1 rounded-full border border-white"
                     onClick={incrementCartItem}
                  >
                     <img
                        src="./assets/images/icon-increment-quantity.svg"
                        alt="increment-icon"
                     />
                  </button>
               </div>
            )}
         </div>

         <div className="pl-1">
            <p className="text-rose-400 text-sm pb-0.5">{category}</p>
            <h3 className="text-[16px] text-rose-900 font-semibold pb-0.5">
               {name}
            </h3>
            <p className="font-bold text-red">${price}</p>
         </div>
      </div>
   );
}

export default DessertCart;
