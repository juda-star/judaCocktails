import React from "react";
import {useSelector} from "react-redux"
import {selectUser} from "../../redux/feature/userSlice"
import CocktailsList from "../cocktails/CocktailsList";
import Footer from "../footer/Footer";
import Navbar from "../navBar/NavBar";
import LogIn from './LogIn/LogIn'
const Home = () => {
  const user = useSelector(selectUser)
  return (
    <div>
      <Navbar />
      { user ? <CocktailsList />:<LogIn/>}
      <Footer />
    </div>
  );
};

export default Home;
