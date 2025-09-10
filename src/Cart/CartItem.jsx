import React from "react";

function CartItem({ name, price, count, deleteFn }) {
   return (
      <div>
         <div className="flex items-center justify-between">
            <div>
               <h6 className="text-sm text-rose-900 font-bold pb-2">{name}</h6>
               <div className="text-sm flex items-center justify-between w-32">
                  <span className="font-bold text-red">{count}x</span>
                  <p>
                     <span className="pr-4 font-semibold text-rose-300">
                        @ ${price}
                     </span>
                     <span className="font-bold text-rose-400">
                        ${count * price}
                     </span>
                  </p>
               </div>
            </div>
            <button
               className="w-fit h-fit p-0.5 rounded-full border-2 border-rose-300 cursor-pointer hover:border-rose-400"
               onClick={deleteFn}
            >
               <img src="./assets/images/icon-remove-item.svg" alt="item" />
            </button>
         </div>
         <div className="w-full h-[1px] bg-rose-300/30 my-4 mx-auto"></div>
      </div>
   );
}

export default CartItem;
