import { kanjiN5 } from "./data/n5.jsx";
import "./App.css";
import { KanjiCards } from "./components/KanjiCards";

function App() {
  return (
    <div className="App">
      <KanjiCards kanjiList={kanjiN5} />
    </div>
  );
}

export default App;
