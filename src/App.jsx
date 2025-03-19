import { Toaster } from "react-hot-toast";
import TaskContainer from "./components/TaskContainer.jsx";
Toaster;

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <TaskContainer />
    </>
  );
}

export default App;
