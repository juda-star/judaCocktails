import React, { useState, useRef } from "react";
import { fetchSearchCocktail } from "../../redux/feature/cocktailSlice";
import "./navBar.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { FaCocktail } from "react-icons/fa";
///////////////////////navbar///////////////////////////////
import Paper from "@material-ui/core/Paper";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../theme/theme";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
///////////////////////////////////////////////////////////
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from 'react-redux';
import {logout,selectUser} from "../../redux/feature/userSlice"
import LogOutComponents from "../pages/LogOut/LogOut";
const StyleIcon = { color: "#FEC94A", font: "larger" };

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Navbar = () => {
  // const user =useSelector(selectUser)

  // const handleLogOut = (e) => {
  //   e.preventDefault();
  //   dispatch(logout());
  // };

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };
  const [theme, setTheme] = useState("light");
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const searchValue = useRef();
  const dispatch = useDispatch();

  const handleChange = () => {
    const searchText = searchValue.current.value;
    dispatch(fetchSearchCocktail(searchText));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bigContainer">
    
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <StyledApp>
          <AppBar position="sticky">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                <div className="centertext">
                  <h2>judaCocktailss</h2>
                    <div><LogOutComponents/></div>
                  <p>
                    <FaCocktail style={StyleIcon} />
                  </p>
                  <input
                    name="name"
                    type="text"
                    ref={searchValue}
                    placeholder="Search Cocktail"
                    inputprops={{ "aria-label": "Search Cocktail" }}
                    onChange={handleChange}
                  />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="cocktailForm">
                    <Paper component="form">
                      <Stack direction="row" spacing={1}></Stack>
                    </Paper>
                  </div>
                </form>
              </Typography>

              {/* <Button color="inherit" onClick={(e)=>handleLogOut(e)}>
               LogOut
              </Button> */}

             

              
              <span>
                <Switch onClick={() => themeToggle()} />
              </span>
            </Toolbar>
            {/* <button open={open} handleClose={handleClose} /> */}
          </AppBar>
        </StyledApp>
      </ThemeProvider>
         </div>
  );
};

export default Navbar;
