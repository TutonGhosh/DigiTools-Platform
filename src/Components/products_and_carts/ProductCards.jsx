import { use } from "react";
import PCard from "./PCard";


const ProductCard = ({cardPromise}) => {
    const cards = use(cardPromise);
    console.log(cards);
    return (
        <div className="max-w-[1600px] mx-auto">
            <div className="my-10 lg:my-20 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
                {
                    cards.map((card) => {
                        return (
                        <PCard key={card.id} card={card}></PCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductCard;