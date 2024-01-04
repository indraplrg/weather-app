import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weather from "./pages/Weather";
import Maps from "./pages/Maps";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const App = () => {
   const [dataFromChild, setDataFromChild] = useState();
   const reciveDataFromChild = (data) => {
      setDataFromChild(data);
      console.log(data);
   };
   return (
      <div className="flex">
         <Navbar />
         <div className="p-2 w-screen flex flex-col gap-y-2">
            <Search sendDataToParent={reciveDataFromChild} />
            <Router>
               <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/" element={<Weather data={dataFromChild} />} />
                  <Route path="/maps" element={<Maps />} />
                  <Route path="/about" element={<About />} />
               </Routes>
            </Router>
         </div>
      </div>
   );
};

export default App;
