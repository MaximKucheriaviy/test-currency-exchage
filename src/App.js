import { convert, exchanges } from "./services/currencyApi";
import { useState, useEffect } from "react"
import { Header } from "./components/Header/header";

function App() {
  
  const [rates, setRates] = useState({});

  useEffect(() => {
    (async () => {
      try{
        const {data = {}, status} = await exchanges("UAH", "USD, GBP, EUR");
        if(status !== 200){
          return;
        }
        for (const key in data.rates) {
          data.rates[key] = (1 / data.rates[key]).toFixed(2);
        }
        setRates(data.rates);
      }
      catch(err){
        console.log(err);
      }
    })();
  }, []);
   
  return (
    <div className="App">
      <Header rates={rates}/>
    </div>
  );
}

export default App;
