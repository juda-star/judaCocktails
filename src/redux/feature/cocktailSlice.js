import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const REACT_APP_FETCH_COCKTAIL = process.env.REACT_APP_FETCH_COCKTAIL;
const REACT_APP_SINGLE_COCKTAIL = process.env.REACT_APP_SINGLE_COCKTAIL;
const REACT_APP_SEARCH_COCKTAIL = process.env.REACT_APP_SEARCH_COCKTAIL;

export const fetchCocktails = createAsyncThunk(
  "cocktails/fetchCocktails",
  async () => {
    return fetch(`${REACT_APP_FETCH_COCKTAIL}`).then((res) => res.json());
  }
);

export const fetchSingelCocktail = createAsyncThunk(
  "cocktails/fetchSingelCocktail",
  async (id) => {
    return fetch(`${REACT_APP_SINGLE_COCKTAIL}${id}`).then((res) => res.json());
  }
);

export const fetchSearchCocktail = createAsyncThunk(
  "cocktails/fetchSearchCocktail",
  async (searchText) => {
    return fetch(`${REACT_APP_SEARCH_COCKTAIL}${searchText}`).then((res) =>
      res.json()
    );
  }
);

const cocktailSlice = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    /////////////////////fetchSingelCocktail///////////////////////////
    [fetchSingelCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingelCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks;
    },
    [fetchSingelCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //////////////////////////fetchSearchCocktail//////////////////////
    [fetchSearchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSearchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default cocktailSlice.reducer;
