import Admin from "./components/page/Admin";
import "./App.css";
import Comments from "./components/organisms/comments/Comments";

function App() {
    return (
        <div className="App">
            {/* <Login /> */}
            <Admin />
            <Comments />
        </div>
    );
}

export default App;
