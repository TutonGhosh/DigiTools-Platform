
const InfoBadge = () => {
    return (
        <div className="max-w-full my-10 lg:my-20">
            <div className="h-32 lg:h-48 bg-linear-to-r from-[#662df7] to-[#8c19f9]">
                <div className="h-full flex items-center justify-around gap-2">
                    <div className="flex flex-col items-center text-white space-y-2">
                        <h1 className="text-2xl lg:text-5xl font-bold">50K+</h1>
                        <p className="text-lg lg:text-3xl font-light">Active Users</p>
                    </div>
                    <div className="border-l-2 h-20 text-gray-300"></div>
                    <div className="flex flex-col items-center text-white space-y-2">
                        <h1 className="text-2xl lg:text-5xl font-bold">200+</h1>
                        <p className="text-lg lg:text-3xl font-light text-wrap">Premium Tools</p>
                    </div>
                    <div className="border-l-2 h-20 text-gray-300"></div>
                    <div className="flex flex-col items-center text-white space-y-2">
                        <h1 className="text-2xl lg:text-5xl font-bold">4.9</h1>
                        <p className="text-lg lg:text-3xl font-light">Ratings</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBadge;