import React, { useEffect, useState } from 'react';
import Card from './Card';

const MovieList = ({apiPath,search,title}) => {
    console.log("MovieList.js rendering");


    const [movies, setMovies] = useState([]);

    let url='';
    // if search is true, then we have a full path in apiPath sent as a prop from the search component, else the apiPath is just the endpoint sent from the different routes
    
    search ? url=apiPath : url=`https://api.themoviedb.org/3/${apiPath}?api_key=3868a677a7e8eb5a58f10397573bd662`

    async function getMovies() {
        const res = await fetch(url)
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results);
    }

    //runs on every render
    document.title=`${title} / Cinemate`

    //useEffect only when apiPath is changed
    useEffect(() => {
        getMovies(url);
    }, [apiPath])

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {
                        movies.map(movie=>{
                            return <Card key={movie.id}  movie={movie} />
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default MovieList