import { Suspense, useState } from "react";
import ProductCard from "./ProductCards";
import Cart from "./Cart";


const AllProducts = ({cardPromise}) => {
    const [selectType, setSelectType] = useState("products");
    const [addCart, setAddCart] = useState([]);
    const [countBill, setCountBill] = useState(0);

    return (
        <div className="max-w-[1600px] mx-auto">
            <div className="my-10 lg:my-20 px-5">
                <div className="text-center space-y-5">
                    <h1 className="text-4xl lg:text-6xl font-bold">Premium Digital Tools</h1>
                    <p className="max-w-3/4 lg:max-w-2/5 mx-auto text-lg text-gray-500">Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                    {/* Buttons */}
                    <div className="flex items-center justify-center join">
                        <button onClick={() => setSelectType("products")} className={`btn rounded-l-full join-item ${selectType === "products" ? "bg-linear-to-r from-[#662df7] to-[#8c19f9] text-white" : "bg-white"}`}>Products</button>
                        <button onClick={() => setSelectType("cart")} className={`btn rounded-r-full join-item ${selectType === "cart" ? "bg-linear-to-r from-[#662df7] to-[#8c19f9] text-white" : "bg-white"}`}>Cart ({addCart.length})</button>
                    </div>
                    <Suspense fallback={
                        <div className="my-10 lg:my-20">
                            <span className="loading loading-ring loading-xl text-purple-600"></span>
                        </div>
                    }>
                        {selectType === "products" ? <ProductCard cardPromise={cardPromise} addCart={addCart} setAddCart={setAddCart} countBill={countBill} setCountBill={setCountBill}></ProductCard> : <Cart addCart={addCart} setAddCart={setAddCart} countBill={countBill} setCountBill={setCountBill}></Cart>}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;