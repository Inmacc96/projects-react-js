import { ToastContainer, toast } from "react-toastify";
import "./App.css";

function App() {
  const openToast = () => {
    toast("Este es mi toast!");
  };
  return (
    <div className="App">
      <button onClick={openToast}>Click</button>
      <ToastContainer />
    </div>
  );
}

export default App;
