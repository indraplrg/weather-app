import Card from "../components/card/Card";

const Weather = ({ data }) => {
   return (
      <div className="w-full h-full">
         <h2 className="mb-2 text-xl font-semibold">Weather</h2>
         <section className="h-2/5 flex gap-4">
            {data ? (
               <>
                  <Card data={data} />
               </>
            ) : null}
         </section>

         <section className="h-2/4">
            <h2 className="mb-2 text-xl font-semibold">Forecast</h2>
            <div></div>
         </section>
      </div>
   );
};

export default Weather;
