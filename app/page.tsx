import Image from "next/image";
import Navbar from "./navbar/page";
import FirstSection from "./FirstSection/page";
import SecondSection from "./SecondSection/page";
import Footer from "./footer/page";


export default function Home() {
  return (
 <div className="">
  <Navbar/>
  <FirstSection/>
    <SecondSection/>
    <Footer/>
 </div>
  );
}
