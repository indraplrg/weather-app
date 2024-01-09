import Card from "../components/card/Card";
import Card2 from "../components/card/Card2";

const Weather = ({ data }) => {
   return (
      <div className="h-full">
         <h2 className="mb-2 text-xl font-semibold">Cuaca</h2>
         <section className="h-2/6 flex gap-4">
            {data ? (
               <>
                  <Card data={data.weather} />
               </>
            ) : null}
         </section>

         <h2 className="mb-2 mt-8 text-xl font-semibold">Ramalan Cuaca</h2>
         <section>
            {data ? (
               <>
                  <Card2 data={data.forecast} />
               </>
            ) : null}
         </section>
      </div>
   );
};

export default Weather;
