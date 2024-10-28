import React from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieList from './MovieList';

const SearchMovie = () => {

  const [search] = useSearchParams();
  const name = search.get('q');
  // console.log(name);
  
  // document.title=`Search results for ${name} / Cinemate`

  return (
    <>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white"> Result for {name}</p>
      </section>
      <MovieList apiPath={`https://api.themoviedb.org/3/search/movie?api_key=3868a677a7e8eb5a58f10397573bd662&query=${name}`} search title={`Search results for ${name}`}/>
    </>

  )
}

export default SearchMovie;
