import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import DropDown from "./Components/DropDown";
import Home from "./Components/Home";
import MegaMenu from "./Components/MegaMenu";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import React from 'react'

import ResponsiveAppBar from "./Components/Navbar"
import Portfolio from "./Components/Portfolio";
import Servises from "./Components/Servises";
function App() {
  return (
    
    <div>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Servises" element={<Servises />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="MegaMenu" element={<MegaMenu />} />
        <Route path="DropDown" element={<DropDown />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
      
  );
}

export default App;












// const styles = {
//   wrapper: {
//     textAlign:"center",
//     maxWidth:"950px",
//     margin:"0 auto",
//     border:"1px solid blue",
//     padding: "40px 25px",
//     marginTop:"50px",
//   }
// }

// function App() {
//   return (
//     <section style={styles.section}>
//       <div style={styles.wrapper}>
//           hello
//       </div>
//     </section>
//   )
// }

// export default App;

// <section
//   style={{
//     fontFamily: "-apple-system",
//     fontSize: "1rem",
//     fontWeight: 1.5,
//     lineHeight:2.5,
//     color:"#292b2c",
//     backgroundColor: "red",
//     padding:"0 5em"
//   }}
// >hello</section>
