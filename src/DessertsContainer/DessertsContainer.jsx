import React from "react";
import dessertsList from "../../public/data";
import DessertCart from "./DessertCart";

function DessertsContainer({setCartItems, cartItems}) {
   return (
      <div className="w-full lg:w-[60%] xl:w-[70%] ">
         <h1 className="inline-block text-rose-900 text-[42px] font-bold pt-3 pb-8">
            Desserts
         </h1>
         <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            {dessertsList.map((item) => (
               <DessertCart key={item.name} {...item} setCartItems={setCartItems} cartItems={cartItems}/>
            ))}
         </div>
      </div>
   );
}

export default DessertsContainer;
