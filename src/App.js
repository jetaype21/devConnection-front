import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/container/navbar/Navbar";
import FooterHome from "./components/container/footerHome/FooterHome";
import { sharingInformationService } from "./services/shring-information.service";
import { DataAuth } from "./context/authContext";
import { helpHttp } from "./utils/helpHttp";
import { baseApiUrl } from "./utils/keysSession";
import Tools from "./pages/tools/Tools";
import ToolsMenu from "./components/container/toolsMenu/ToolsMenu";

const { get } = helpHttp();

function App() {
  const [notFund, setNotFund] = useState(false);
  const { setTools } = DataAuth();

  useEffect(() => {
    const subscription$ = sharingInformationService.getSubject();
    subscription$.subscribe((data) => {
      setNotFund(data);
    });

    // get(`${baseApiUrl}/tools`)
    //   .then((tools) => {
    //     setTools(tools.data.data);
    //   })
    //   .catch((err) => {
    //     setTools([]);
    //     // throw new Error(err);
    //   });
  }, []);

  //! USAR USER Y LA SECCION DE USER._JSON

  return (
    <div className="App">
      {!notFund && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Signup />} />
        <Route path="/tools">
          <Route index element={<Tools />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!notFund && <FooterHome />}
    </div>
  );
}

export default App;
