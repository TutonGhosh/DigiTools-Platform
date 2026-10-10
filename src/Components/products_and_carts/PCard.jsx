import greenTick from "../../assets/Logo and Icons/green tick.png";

const PCard = ({card}) => {
    return (
        <div>
            {/* Card */}
            <div className="text-left w-80 xl:w-96 border-2 border-gray-200 rounded-lg p-2.5 space-y-5">
                {/* Icon & Badge */}
                <div className="flex justify-between">
                    <img src={card.icon} alt="" />
                    <div>
                        <a className={`font-medium w-18 h-8 text-[12px] p-2 rounded-lg ${card.badge === "Best Seller" ? "text-yellow-700 bg-yellow-200" : card.badge === "Popular" ? "text-purple-700 bg-purple-200" : "text-green-700 bg-green-200"}`}>{card.badge}</a>
                    </div>
                </div>
                {/* Name & Description */}
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">{card.name}</h1>
                    <p className="text-sm font-medium text-gray-500">{card.description}</p>
                </div>
                {/* Price */}
                <div>
                    <h1 className="text-3xl font-bold">${card.price} <span className="text-lg font-medium text-gray-600"> / {card.billingType}</span></h1>
                </div>
                {/* Features */}
                <div>
                    <ul>
                        {card.features.map((f) => {
                        return (
                            <li key={f} className="flex items-center gap-2.5 text-sm font-medium text-gray-500"><img className="w-fit h-3" src={greenTick} alt="✓" />{f}</li>
                        )
                    })}
                    </ul>
                </div>
                {/* Button */}
                <div>
                    <button className="btn text-xl font-bold border w-full rounded-full text-white bg-linear-to-r from-[#662df7] to-[#8c19f9] hover:border hover:border-[#8c19f9] hover:bg-none hover:bg-white hover:text-black">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default PCard;