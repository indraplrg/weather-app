import { MapTrifold, UsersThree } from "@phosphor-icons/react";
import { CloudRain } from "@phosphor-icons/react/dist/ssr";

const Navbar = () => {
   return (
      <div className="h-screen bg-slate-800">
         <ul className="flex flex-col gap-y-8 p-9">
            <li>
               <a href="/" className="text-xl font-semibold text-white">
                  Logo.
               </a>
               <hr className="mt-3" />
            </li>
            <li>
               <a
                  href="/"
                  className="flex text-sm items-center text-gray-400 hover:text-white transition-all ease-linear"
               >
                  <CloudRain size={32} />
                  Weather
               </a>
            </li>
            <li>
               <a
                  href="/maps"
                  className="flex text-sm items-center text-gray-400 hover:text-white transition-all ease-linear"
               >
                  <MapTrifold size={32} />
                  Maps
               </a>
            </li>
            <li>
               <a
                  href="/about"
                  className="flex text-sm items-center text-gray-400 hover:text-white transition-all ease-linear"
               >
                  <UsersThree size={32} />
                  About
               </a>
            </li>
         </ul>
      </div>
   );
};

export default Navbar;
