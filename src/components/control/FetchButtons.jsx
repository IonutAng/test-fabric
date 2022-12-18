import {useState} from "react";
import { useDispatch} from "react-redux";
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import { useMediaQuery } from "@mui/material";

import { getMovies } from "../../redux/feature/movieSlice";

const FetchButtons = () => {
  const matches = useMediaQuery('(min-width:600px)');

  const [isLoading, setLoading] = useState(false);

  const dispatch = useDispatch();

  function handleClick(searchedName) {
    setLoading(true);

    // it's just too fast...
    setTimeout(() => {
      dispatch(getMovies(searchedName));
      setLoading(false);
    }, 1000);
    
    
    
  }
  return(
    <Stack direction={matches? "row": "column"} spacing={2}>
      <LoadingButton
          size="large"
          onClick={() => handleClick("Matrix")}
          loading={isLoading}
          variant="outlined"
        >
          Get First Movies
        </LoadingButton>
        <LoadingButton
          size="large"
          onClick={() => handleClick("Matrix%20Reloaded")}
          loading={isLoading}
          variant="outlined"
        >
          Get Second Movies
        </LoadingButton>
        <LoadingButton
          size="large"
          onClick={() => handleClick("Matrix%20Revolutions")}
          loading={isLoading}
          variant="outlined"
        >
          Get Third Movies
        </LoadingButton>
    </Stack>
  )
}

export default FetchButtons;