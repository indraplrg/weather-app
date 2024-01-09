const Card2 = ({ data }) => {
   const forecast = data?.list.slice(0, 7);
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

   let countryName = data?.city.name;

   return (
      <div className="h-full p-1 flex gap-4">
         {forecast &&
            forecast.map((item, index) => {
               const iconUrl = weatherIcons[item.weather[0].description];
               return (
                  <div
                     className="bg-slate-200 w-fit h-fit py-2 px-3 hover:bg-slate-300 transition-all ease-linear rounded-md shadow-md gap-8 flex flex-col"
                     key={index}
                  >
                     <div className="flex flex-col justify-between">
                        <div>
                           <h2 className="text-xl font-semibold">
                              {countryName}
                           </h2>
                           <span className="text-sm">
                              {item.weather[0].description}
                           </span>
                        </div>
                        <div>
                           <h2 className="text-xl">
                              {parseInt(item.main.temp - 273.15)}C
                           </h2>
                           <span className="text-sm">{item.dt_txt}</span>
                        </div>
                     </div>
                     <div>
                        <img
                           src={iconUrl}
                           alt={item.weather[0].description}
                           width="150px"
                           className="p-2"
                        />
                     </div>
                  </div>
               );
            })}
      </div>
   );
};

export default Card2;
