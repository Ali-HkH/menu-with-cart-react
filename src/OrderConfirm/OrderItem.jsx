import React from "react";

function OrderItem({ image, name, price, count }) {
   return (
      <div>
         <div className="flex items-center justify-between p-5">
            <div className="flex items-center gap-x-3">
               <div className="w-16 rounded-lg overflow-hidden">
                  <img
                     className="w-full aspect-square"
                     src={image}
                     alt="product-thumbnail"
                  />
               </div>
               <div>
                  <h3 className="font-semibold text-rose-900 text-sm pb-2">{name}</h3>
                  <div className="text-sm font-semibold flex gap-x-5">
                     <span className="text-red  ">{count}x</span>{" "}
                     <span className="text-rose-400">@ ${price}</span>
                  </div>
               </div>
            </div>

            <span className="font-semibold text-rose-900 text-lg">
               ${price * count}
            </span>
         </div>
         <div className="w-[95%] h-[1px] bg-rose-300/30 my-1 mx-auto"></div>
      </div>
   );
}

export default OrderItem;
