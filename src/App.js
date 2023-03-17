import "./styles.css";
import useFetch from "./useFetch";
export default function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className="App">
      {data && data.map((item, i) => <h1 key={i}>{item.title}</h1>)}
    </div>
  );
}
