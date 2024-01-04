import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";
import { callWeatherApi } from "../../libs/callApi";

const Search = ({ sendDataToParent }) => {
   const inputRef = useRef();
   const handleClick = async () => {
      const textValue = inputRef.current.value;
      const weather = await callWeatherApi("weather", textValue);
      sendDataToParent(weather);
   };

   return (
      <div className="flex bg-slate-700 rounded-sm w-full">
         <input
            type="text"
            placeholder="Enter Your City"
            className="bg-slate-700 placeholder:text-white w-full py-2 px-2 outline-none text-white rounded-sm"
            ref={inputRef}
         />
         <button
            type="submit"
            className="text-white p-2"
            onClick={() => {
               handleClick();
            }}
         >
            <MagnifyingGlass size={30} />
         </button>
      </div>
   );
};

export default Search;
