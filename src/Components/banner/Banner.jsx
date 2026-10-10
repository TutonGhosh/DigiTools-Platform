import bannerImg from "../../assets/Logo and Icons/banner.png"
const Banner = () => {
    return (
      <div className="max-w-[1600px] mx-auto">
        <div className="my-10 lg:my-20 px-5">
        <div className="Banner flex flex-col-reverse gap-10 lg:flex-row items-center justify-between">
          {/* Banner Content */}
          <div className="lg:max-w-160 space-y-5">
            <button className="btn border-0 rounded-full bg-[#d9e0ff] text-[#8203fa]">New: AI-Powered Tools Available</button>
            <h1 className="text-5xl lg:text-[72px] font-bold">
              Supercharge Your <span className="bg-linear-to-r from-[#662df7] to-[#8c19f9] bg-clip-text text-transparent">Digital Workflow</span>
            </h1>
            <p className="max-w-125 text-lg text-gray-500">
              Access premium AI tools, design assets, templates, and
              productivity software all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex items-center gap-3">
                <button className="btn border rounded-full text-white bg-linear-to-r from-[#662df7] to-[#8c19f9] hover:border hover:border-[#8c19f9] hover:bg-none hover:bg-white hover:text-black">Explore Products</button>
                <button className="btn border rounded-full text-white bg-linear-to-r from-[#662df7] to-[#8c19f9] hover:border hover:border-[#8c19f9] hover:bg-none hover:bg-white hover:text-black">Watch Demo</button>
            </div>
          </div>
          {/* Banner Image */}
          <div>
            <img src={bannerImg} alt="" />
          </div>
        </div>
      </div>
      </div>
    );
};

export default Banner;