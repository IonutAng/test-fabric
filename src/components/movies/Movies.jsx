import { useSelector } from "react-redux";

import { useMediaQuery, ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import { SearchImg } from './MoviesElements';
import SearchImage from '../../assets/svg/search-movies.svg';

const Movies = () => {
    const { moviesList } = useSelector((state) => ({ ...state.movie }));

    const matches = useMediaQuery('(min-width:600px)');

    if (moviesList) {
        if( moviesList.Search){
            const movies = moviesList.Search.filter(movie => movie.Poster !== "N/A")
            return (
                <ImageList variant="masonry" cols={matches? 3 : 1} gap={20}>
                    {movies?.map((item, index) => (
                        <ImageListItem key={index}>
                            <img
                            src={item.Poster}
                            alt={item.Title}
                            loading="lazy"
                            />
                            <ImageListItemBar
                                title={item.Title}
                                subtitle={`${item.Year} - ${item.Type}`}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            )
        }
    }else {
        return <SearchImg src={SearchImage} alt="Search Img" />
    }
}

export default Movies;