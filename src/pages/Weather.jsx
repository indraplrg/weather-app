const Weather = ({ data }) => {
   return (
      <div className="w-full h-full">
         <section className="h-2/5">
            <h2 className="mb-2 text-xl font-semibold">Weather</h2>
            <div className="bg-slate-200 w-fit">
               <h3>{data?.name}</h3>
            </div>
         </section>
         <section className="h-2/4">
            <h2 className="mb-2 text-xl font-semibold">Forecast</h2>
            <div></div>
         </section>
      </div>
   );
};

export default Weather;
