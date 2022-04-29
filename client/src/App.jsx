
import React, { useState, useEffect, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion/dist/framer-motion'
import { GlobalStyles } from "./GlobalStyles.style.jsx"
import { StyledAppContainer }from "./components/Container/Container.style"
import Fallback from "./components/Fallback"


const Nav = lazy(() => import("./components/Nav/Nav"));
const Landing= lazy(() => import("./pages/Landing/Landing"));
const Login = lazy(() => import("./pages/Login/Login"));
// import Login from "./pages/Login/Login";
const Explore = lazy(() => import("./pages/Explore/Explore"));
// import Explore from "./pages/Explore/Explore";
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard"));
// import Dashboard from "./pages/Dashboard/Dashboard";
const Account = lazy(() => import("./pages/Account/Account"));
// import Account from "./pages/Account/Account";

const App = () => {
  const [header, setHeader] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState(false)
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(true)
      setHeader(true);
    } else if (user) {
        setHeader(false);
      
    }
  }, []);
  
  //CONDITIONALLY RENDER NAV OR HEADER

    

  return (
    <Suspense fallback={<Fallback/>}>
      <StyledAppContainer>
        <GlobalStyles />
   
        <AnimatePresence exitBeforeEnter initial={true}>          
          <Routes location={location} key={location.pathname}>
            <Route path="/login" exact element={<Login/>} />
            <Route path="/dashboard" exact element={<Dashboard/>} />
            <Route path="/explore" exact element={<><Nav/><Explore/></>} />
            <Route path="/account" exact element={<><Nav/><Account/></>} />  
            <Route path="*" element={<Landing />} />
          </Routes>
        </AnimatePresence>
      </StyledAppContainer>
    </Suspense>
  );
};

export default App;

