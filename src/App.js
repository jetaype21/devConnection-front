import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Signup from "./pages/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/container/navbar/Navbar";
import FooterHome from "./components/container/footerHome/FooterHome";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const url = "http://localhost:8080/auth/login/success";
      const { data } = await axios.get(url, {
        method: "GET",
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      });

      if (data.error) throw new Error("authentication has been failed!");

      setUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  //! USAR USER Y LA SECCION DE USER._JSON

  return (
    <div className="App">
      {/* <Navbar user={user} /> */}
      {console.log("user home: ", user)}
      <Navbar />
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
      <FooterHome />
    </div>
  );
}

export default App;
