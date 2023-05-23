import { useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);

  //const data = { name: "Tansu" };
  //data yı function dışında yazarsak sürekli render olmaz.
  const data = useMemo(() => {
    return { name: "Tansu", number };
    //object ve array ler {} === {} false verir (referansı farklıdır, render edilince değişir) bu yüzden tekrar tekrar render olur.
    //Bunun önüne geçmek için useMemo kullanırız.
  }, [number]);

  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} />
      <hr />
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Click</button>
    </div>
  );
}

export default App;
