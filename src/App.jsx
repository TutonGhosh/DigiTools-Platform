import "./App.css";
import InfoBadge from "./Components/banner/InfoBadge";
import Banner from "./Components/banner/Banner";
import Navbar from "./Components/navbar/Navbar";
import { Suspense } from "react";
import AllProducts from "./Components/products_and_carts/AllProducts";

const fetchCardData = async() => {
  const res = await fetch("/data.json")
  return res.json();
}
function App() {
  const cardPromise = fetchCardData();
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <InfoBadge></InfoBadge>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AllProducts cardPromise={cardPromise}></AllProducts>
      </Suspense>
    </>
  );
}

export default App;
