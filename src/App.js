import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchMovie from './components/SearchMovie';
import PageNotFound from './components/PageNotFound';


function App() {
  console.log("App.js rendering");
  return (
    <div className="App">
      <Header />
      <div className='dark:bg-slate-800'>
        <Routes>
          <Route path='/' element={<MovieList apiPath='movie/now_playing' title='Home'/>} />
          <Route path='/movies/popular' element={<MovieList apiPath='movie/popular' title='Popular'/>} />
          <Route path='/movies/top' element={<MovieList apiPath='movie/top_rated' title='Top Rated'/>} />
          <Route path='/movies/upcoming' element={<MovieList apiPath='movie/upcoming' title='Upcoming'/>} />
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/search' element={<SearchMovie />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// class App extends React.Component{
//   render() {
//     console.log("App.js rendering");
//     return (
//       <div className="App">
//       <Header />
//       <div className='dark:bg-slate-800'>
//         <Routes>
//           <Route path='/' element={<MovieList apiPath={'movie/now_playing'} />} />
//           <Route path='/movies/popular' element={<MovieList apiPath={'movie/popular'} />} />
//           <Route path='/movies/top' element={<MovieList apiPath={'movie/top_rated'} />} />
//           <Route path='/movies/upcoming' element={<MovieList apiPath={'movie/upcoming'} />} />
//           <Route path='/movie/:id' element={<MovieDetail />} />
//           <Route path='/search' element={<SearchMovie />} />
//           <Route path='*' element={<PageNotFound />} />
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//     )
//   }
// }
// export default App;