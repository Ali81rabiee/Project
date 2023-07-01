import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle, getPosts } from "./redux/action";

function App() {
  const [select, setSelect] = useState(0);
  const [text, setText] = useState("");
  const { data } = useSelector((state) => state.posts);
  const disptach = useDispatch();

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("posts"));
    if (!posts?.length) {
      disptach(getPosts());
    }
  }, []);

  return (
    <div className="App">
      {data.map((item, index) => (
        <div key={item.id}>
          {select === item.id ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSelect(0);
                disptach(changeTitle(index, text));
              }}>
              <input value={text} onChange={(e) => setText(e.target.value)} />
              <button>edit</button>
            </form>
          ) : (
            <p
              onClick={() => {
                setSelect(item.id);
                setText(item.title);
              }}>
              {item.title}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
