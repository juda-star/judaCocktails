import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktails } from "../../redux/feature/cocktailSlice";
import { Link } from "react-router-dom";
import "./CocktailsList.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const CocktailsList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  const [modifiedCocktails, setModifiedCocktails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCocktails());
  }, [dispatch]);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      setModifiedCocktails(newCocktails);
    } else {
      setModifiedCocktails([]);
    }
  }, [cocktails]);

  if (loading) {
    return (
      <div className="spinner">
        <CircularProgress disableShrink />
      </div>
    );
  }

  if (!cocktails) {
    return (
      <div className="pageNotFound">
        <img src="https://wallpapercave.com/wp/wp8639682.jpg" alt="" />
      </div>
    );
  }

  return (
    <div className="bigCard">
      {modifiedCocktails.map((item, index) => {
        const { id, name, image, glass, info } = item;

        return (
          <div className="Card">
            <Card>
              <img src={image} alt="" />
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {name}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {info}
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  {glass}
                </Typography>
              </CardContent>
              <Link to={`/cocktail/${id}`}>
                <Button>Deatils</Button>
              </Link>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CocktailsList;
