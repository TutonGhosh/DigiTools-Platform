import { useState } from "react";
import remove from "../../assets/Logo and Icons/remove.png"

const Cart = ({addCart, setAddCart, countBill, setCountBill}) => {
    // console.log(addCart.length)

    const handleRemove = (c) => {
      const filteredCart = addCart.filter((item) => item !== c);
      setAddCart(filteredCart)
      setCountBill(countBill - c.price)
    }

    const [isCheckOut, setIsCheckOut] = useState(false);
    const handleCheckout = () => {
      setAddCart([]);
      setCountBill(0);
      setIsCheckOut(true)
    }
    return (
      isCheckOut ? (
    <div className="lg:w-3/4 mx-auto p-5 lg:p-10 rounded-2xl bg-green-50 text-center space-y-4">
        <h1 className="text-3xl font-bold text-green-700">
            🎉 Congratulations!
        </h1>

        <p className="text-lg font-medium text-gray-600">
            Your checkout was successful.
        </p>

        <p className="text-gray-500">
            Thank you for choosing our products.
        </p>
    </div>
) :
(<div>
        <div  className="border-2 border-gray-200 lg:w-3/4 mx-auto lg:p-10 rounded-2xl text-left">
          {addCart.length === 0 ? 
            <div className="bg-gray-200 rounded-xl h-auto lg:h-80 flex flex-col items-center justify-center gap-5 text-center p-5">
              <h1 className="text-3xl font-bold text-gray-700">
                No products selected yet.
              </h1>
              <p className="text-lg font-semibold text-gray-600">
                Go to products tab to select products.
              </p>
            </div>
           : 
            addCart.map((c) => 
              {
                return(
                    <div>
                      <div key={c.id} className="bg-gray-200 p-5 m-5 rounded-xl text-left">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                          <div className="flex items-start lg:items-center gap-2 lg:gap-5">
                            <img className="w-12" src={c.icon} alt="" />
                            <div>
                              <h1 className="text-lg lg:text-xl font-bold">{c.name}</h1>
                              <p className="text-[16px] lg:text-lg font-semibold">${c.price}</p>
                            </div>
                          </div>
                          <div onClick={() => handleRemove(c)} className="hover:bg-white hover:cursor-pointer w-10 mx-auto lg:mx-0 rounded-full p-2 btn btn-ghost border-0">
                            <img src={remove} alt="" />
                          </div>
                        </div>
                    </div>
                    </div>
                )
              }
          )}
          { addCart.length > 0 &&
            <div className="p-5 space-y-10">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold">Total Bill</h1>
                <h1 className="text-2xl font-bold">${countBill}</h1>
              </div>
              <div>
                <button onClick={() => handleCheckout()} className="btn text-lg lg:text-2xl font-semibold w-full py-6 border-0 text-white rounded-full bg-linear-to-r from-[#662df7] to-[#8c19f9]">Proceed to Checkout</button>
              </div>
            </div>
            
          }
        </div>
      </div>)
    );
};

export default Cart;