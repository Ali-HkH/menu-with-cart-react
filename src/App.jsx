import Footer from "./Footer";

function App() {
   return (
      <div className="bg-rose-100 min-h-[100vh] w-[100vw] py-16">
         <div className="container">
            <h1 className="inline-block text-rose-900 text-4xl font-bold py-5">
               Desserts
            </h1>
            <div className="flex flex-col sm:flex-row">
               <div className="w-full sm:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"></div>
               <div className="w-full sm:w-[30%]"></div>
            </div>
            <Footer />
         </div>
      </div>
   );
}

export default App;


