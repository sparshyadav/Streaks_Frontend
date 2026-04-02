import { AppRouter } from "./routes";
import { Toaster } from "react-hot-toast";

function App(){
  return(
    <>
    <AppRouter />
    <Toaster position="top-right" />
    </>
  )
};

export default App;