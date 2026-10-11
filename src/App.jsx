import "./App.css";
import InfoBadge from "./Components/banner/InfoBadge";
import Banner from "./Components/banner/Banner";
import Navbar from "./Components/navbar/Navbar";
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
      <AllProducts cardPromise={cardPromise}></AllProducts>
    </>
  );
}

export default App;
