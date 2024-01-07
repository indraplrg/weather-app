import {
   DropHalfBottom,
   HourglassLow,
   ThermometerSimple,
   Wind,
} from "@phosphor-icons/react";

const Card = ({ data }) => {
   const weatherIcons = {
      "overcast clouds": "./src/assets/img/overcast clouds.png",
      "scattered clouds": "./src/assets/img/overcast clouds.png",
      "few clouds": "./src/assets/img/overcast clouds.png",
      "broken clouds": "./src/assets/img/overcast clouds.png",
      "clear sky": "./src/assets/img/clear sky.png",
      mist: "./src/assets/img/mist.png",
      rain: "./src/assets/img/rain.png",
      "light rain": "./src/assets/img/rain.png",
      "moderate rain": "./src/assets/img/rain.png",
      snow: "./src/assets/img/snow.png",
      "light snow": "./src/assets/img/snow.png",
      "moderete snow": "./src/assets/img/snow.png",
      thunderstorm: "./src/assets/img/thunderstorm.png",
   };

   const iconUrl = weatherIcons[data?.weather[0].description];

   const offsetInSeconds = data?.timezone;
   const hours = Math.floor(offsetInSeconds / 3600);
   const minutes = Math.floor((offsetInSeconds % 3600) / 60);

   const offset = `${(hours < 10 ? "0" : "") + hours} : ${
      (minutes < 10 ? "0" : 0) + minutes
   }`;
   return (
      <>
         <div className="grid grid-cols-2 shadow-md bg-slate-200 w-fit h-fit hover:bg-slate-300 transition-all ease-linear rounded-md overflow-hidden text-slate-900">
            <div className="p-3 flex flex-col justify-between">
               <div>
                  <h2 className="text-xl font-semibold">{data?.name}</h2>
                  <h6 className="text-sm">{data?.weather[0].description}</h6>
               </div>
               <h4 className="text-lg">
                  {parseInt(data?.main.temp - 273.15)}C
               </h4>
            </div>
            <div>
               <img
                  src={iconUrl}
                  alt={data?.weather[0].description}
                  width="190px"
                  className="p-3"
               />
            </div>
         </div>
         <div className="grid w-4/6 h-fit gap-2 grid-cols-4 text-slate-900">
            <div className="p-5 col-span-2 flex justify-between items-center bg-slate-200 hover:bg-slate-300 transition-all ease-linear rounded-md overflow-hidden h-fit shadow-md">
               <div>
                  <h1 className="text-xl">Humidity</h1>
                  <h4 className="text-sm">{data?.main.humidity}</h4>
               </div>
               <div className="text-gray-600">
                  <DropHalfBottom size={32} />
               </div>
            </div>
            <div className="p-5 col-span-2 flex justify-between items-center bg-slate-200 hover:bg-slate-300 transition-all ease-linear rounded-md overflow-hidden h-fit shadow-md">
               <div>
                  <h1 className="text-xl">Reel Feel</h1>
                  <h4 className="text-sm">
                     {parseInt(data?.main.feels_like - 273.15)}
                  </h4>
               </div>
               <div className="text-gray-600">
                  <ThermometerSimple size={40} />
               </div>
            </div>
            <div className="p-5 col-span-2 flex justify-between items-center bg-slate-200 hover:bg-slate-300 transition-all ease-linear rounded-md overflow-hidden h-fit shadow-md">
               <div>
                  <h1 className="text-xl">Wind Speed</h1>
                  <h4 className="text-sm">{data?.wind.speed}</h4>
               </div>
               <div className="text-gray-600">
                  <Wind size={40} />
               </div>
            </div>
            <div className="p-5 col-span-2 flex justify-between items-center bg-slate-200 hover:bg-slate-300 transition-all ease-linear rounded-md overflow-hidden h-fit shadow-md">
               <div>
                  <h1 className="text-xl">Time Zone</h1>
                  <h4 className="text-sm">{offset}</h4>
               </div>
               <div className="text-gray-600">
                  <HourglassLow size={40} />
               </div>
            </div>
         </div>
      </>
   );
};

export default Card;
