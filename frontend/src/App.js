import Main from "./components/page/Main";
import "./App.css";
import { useLoginCheck } from "./hooks/useLoginCheck";

function App() {
  const setLogin = useLoginCheck();
  // 쿠키 값을 가지고 요청 보내는 로직
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
