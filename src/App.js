import { useState } from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";

import Main from "./components/Main";
import Box from "./components/ListBox";
import MovieList from "./components/MovieList";
import WatchedSummary from "./components/WatchedSummary";
import WatchedMovieList from "./components/WatchedMovieList";

import StarRating from "./StarRating";

import tempMovieData from "./fixtures/TempMovieDate";
import tempWatchedData from "./fixtures/TempWatchedData";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <StarRating size={24} maxRating={10} color="red" />
      {/* <NavBar> */}
      {/*   <Search /> */}
      {/*   <NumResults movies={movies} /> */}
      {/* </NavBar> */}
      {/* <Main> */}
      {/*   <Box> */}
      {/*     <MovieList movies={movies} /> */}
      {/*   </Box> */}
      {/**/}
      {/*   <Box> */}
      {/*     <WatchedSummary watched={watched} /> */}
      {/*     <WatchedMovieList watched={watched} /> */}
      {/*   </Box> */}
      {/* </Main> */}
    </>
  );
}
