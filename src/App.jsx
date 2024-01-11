import React from "react"

// import './App.css'
// import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "./Baseline/Nav-Routing/About/About";
import { Route, Routes } from "react-router-dom";
import Home from "./Baseline/Home/Home";
import SeverciesRoute from "./Baseline/Nav-Routing/Service/SeverciesRoute";
import ContactPage from "./Baseline/Nav-Routing/Contact-page/ContactPage";
import Career from "./Baseline/Nav-Routing/Career/Career";
import Blog from "./Baseline/Nav-Routing/Blog/Blog";
import Webdevelopment from "./Baseline/Nav-Routing/ServiceHoverListRoute/Webdevelopment/Webdevelopment";
import WebdesignPage from "./Baseline/Nav-Routing/ServiceHoverListRoute/Webdesign/Webdesign";
import DigitalMarketing from "./Baseline/Nav-Routing/ServiceHoverListRoute/DigitalMarketing/DigitalMarketing";
import SEOPage from "./Baseline/Nav-Routing/ServiceHoverListRoute/SEOPage/SEOPage";
import CareerView from "./Baseline/Nav-Routing/Career/CareerPagebtn/CareerVew";

import SeoPPC from "./Baseline/Nav-Routing/Blog/Blogs/SeoPPC/SeoPPC";
import EComm from "./Baseline/Nav-Routing/Blog/Blogs/EComm/EComm";
import Cms from "./Baseline/Nav-Routing/Blog/Blogs/Cms/Cms";
import SearchEng from "./Baseline/Nav-Routing/Blog/Blogs/SearchEng/SearchEng";
import ItBusiness from "./Baseline/Nav-Routing/Blog/Blogs/ITBusiness/ItBusiness";
import SeoExpert from "./Baseline/Nav-Routing/Blog/Blogs/SeoExpert/SeoExpert";
import FrontEndWeb from "./Baseline/Nav-Routing/Blog/Blogs/FrontEndWeb/FrontEndWeb";
import DelopingWeb from "./Baseline/Nav-Routing/Blog/Blogs/Devloping/DelopingWeb";
import NavBar from "./Baseline/Navbar/Nav";
import Footer from "./Baseline/Footer/Footer";

function App() {


  return (
    <>
         <NavBar/>
      <Routes>
   
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<SeverciesRoute />}></Route>
        <Route path="/contactpage" element={<ContactPage />}></Route>
        <Route path="/Career" element={<Career />}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/Webdevelopment" element={<Webdevelopment />}></Route>
        <Route path="/WebdesignPage" element={<WebdesignPage />}></Route>
        <Route path="/DigitalMarketing" element={<DigitalMarketing />}></Route>
        <Route path="/SEOPage" element={<SEOPage />}></Route>
        <Route path="/CareerView" element={<CareerView />}></Route>


        <Route path="/seo-vs-ppc" element={<SeoPPC />}></Route>
        <Route path="/e-commerce-website-development" element={<EComm />}></Route>
        <Route path="/right-cms-for-your-website" element={<Cms />}></Route>
        <Route path="/website-for-search-engines" element={<SearchEng />}></Route>
        <Route path="/it-services-for-your-business" element={<ItBusiness />}></Route>
        <Route path="/hiring-an-seo-expert" element={<SeoExpert />}></Route>
        <Route path="/it-services-for-your-business" element={<FrontEndWeb />}></Route>
        <Route path="/consider-when-developing" element={<DelopingWeb />}></Route>
       
      </Routes>
      
    </>
  )
}

export default App
