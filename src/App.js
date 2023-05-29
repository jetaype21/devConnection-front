import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/container/navbar/Navbar";
import FooterHome from "./components/container/footerHome/FooterHome";
import { getUser } from "./utils/requestHttp";
import { sharingInformationService } from "./services/shring-information.service";

function App() {
  const [user, setUser] = useState(null);

  const [notFund, setNotFund] = useState(false);

  useEffect(() => {
    const subscription$ = sharingInformationService.getSubject();
    subscription$.subscribe((data) => {
      setNotFund(data);
    });
    const user = getUser();
    console.log("recibiendo");
    setUser(user);
  }, []);

  //! USAR USER Y LA SECCION DE USER._JSON

  return (
    <div className="App">
      {/* <Navbar user={user} /> */}
      {console.log("user home: ", user)}
      {!notFund && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        /> */}

        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!notFund && <FooterHome />}
    </div>
  );
}

export default App;
