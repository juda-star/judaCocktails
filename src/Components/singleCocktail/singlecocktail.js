import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingelCocktail } from "../../redux/feature/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import "./singleCocktail.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import { darkTheme, lightTheme, GlobalStyles } from "../theme/theme";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import styled, { ThemeProvider } from "styled-components";
const styledApp = styled.div`
color: ${(props)=>props.theme.fontColor};
`;


const SingleCocktail = () => {
  const [theme, setTheme] = useState("light");
  const themeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const { cocktail, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCockatil, setModifiedCockatil] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingelCocktail(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifiedCockatil(newCocktail);
    } else {
      setModifiedCockatil(null);
    }
  }, [id, cocktail]);
  if (!modifiedCockatil) {
    return (
      <div className="pageNotFound">
        <img src="https://wallpapercave.com/wp/wp8639682.jpg" />
      </div>
    );
  } else {
    const { name, image, info, category, glass, instructions, ingredients } =
      modifiedCockatil;
    return (
      <>
        {loading ? (
          <div className="spinner">
            <CircularProgress disableShrink />
          </div>
        ) : (
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <styledApp>
              <div className="Card">
                <Card>
                  <img src={image} alt={name} />
                  <div className="info">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Name: {name}
                      </Typography>

                      <Typography variant="h5" color="text.secondary">
                        Info: {info}
                      </Typography>

                      <Typography variant="h5" color="text.secondary">
                        Category: {category}
                      </Typography>

                      <Typography variant="h6" color="text.secondary">
                        Glass: {glass}
                      </Typography>

                      <Typography
                        variant="h6"
                        color="text.secondary"
                        style={{ maxWidth: 350 }}
                      >
                        Instructions:{instructions}
                      </Typography>

                      <Typography variant="h6" color="text.secondary">
                        ingredients:
                        {ingredients &&
                          ingredients.map((item, index) => {
                            return item ? (
                              <span key={index}>{item}</span>
                            ) : null;
                          })}
                      </Typography>
                    </CardContent>
                  </div>
                  <Link to="/">
                    <Button>Go Back</Button>
                  </Link>
                  <Stack direction="row" spacing={1} alignItems="center">
          <span>dark</span>
          <Switch
           onClick={() => themeToggle()}
          />
          <span>light</span>
        </Stack>
                </Card>
              </div>
            </styledApp>
          </ThemeProvider>
        )}
      </>
    );
  }
};

export default SingleCocktail;
