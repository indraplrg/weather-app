export const callWeatherApi = (source, city) => {
   fetch(
      `https://api.openweathermap.org/data/2.5/${source}?q=${city}&appid=f02a58c355c2a42fb63b2c5684031c6f`
   )
      .then((res) => {
         return res.json();
      })
      .then((res) => {
         const weather = res;
         return weather;
      });
};
