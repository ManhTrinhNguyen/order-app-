import Header from "./components/Header";
import Menu from "./components/Menu"
import EnterCardDetail from "./components/EnterCardDetail";
import { useContext } from "react";
import { Context } from "./Context";
import ThankYouPage from "./components/ThankYouPage";

function App() {

  const { isPlaceOrder, isPay } = useContext(Context)
  
  return (
    <div className="app">
      <Header />
      <Menu />
      {
        isPay ?
          <ThankYouPage />
        :
          isPlaceOrder && <>
          <div className="overlay"></div>
          <EnterCardDetail />
          </>
      }
    </div>
  );
}

export default App;
