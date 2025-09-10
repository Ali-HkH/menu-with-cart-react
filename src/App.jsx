import { useEffect, useState } from "react";
import DessertsContainer from "./DessertsContainer/DessertsContainer";
import Cart from "./Cart/Cart";
import OrderConfirm from "./OrderConfirm/OrderConfirm";
import Footer from "./Footer";

function App() {
   
   const [cartItems, setCartItems] = useState([]);
   const [total, setTotal] = useState(0);
   const [isShowOrder, setIsShowOrder] = useState(false);

   useEffect(() => {
      const newTotal = cartItems.reduce((totalCount, currentItem) => {
         return totalCount + currentItem.price * currentItem.count;
      }, 0);
      setTotal(newTotal);
   }, [cartItems]);

   function startNewOrder() {
      setCartItems([]);
      setTotal(0);
      setIsShowOrder(false);
   }

   return (
      <div className="bg-rose-100 min-h-[100vh] w-[100vw] py-16 relative">
         <div className="container">
            <div className="flex flex-col items-center lg:flex-row lg:items-start gap-10 pb-14">
               <DessertsContainer setCartItems={setCartItems} cartItems={cartItems}/>
               <Cart
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  setIsShowOrder={setIsShowOrder}
                  total={total}
               />
            </div>
            <Footer />
         </div>
         <OrderConfirm
            cartItems={cartItems}
            isShowOrder={isShowOrder}
            total={total}
            newOrderFn={startNewOrder}
         />
      </div>
   );
}

export default App;
