export const callWeatherApi = async (source, city) => {
   try {
      const response = await fetch(
         `https://api.openweathermap.org/data/2.5/${source}?q=${city}&appid=f02a58c355c2a42fb63b2c5684031c6f`
      );

      if (!response.ok) {
         throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      return data;
   } catch (error) {
      console.error(error);
      throw error;
   }
};
