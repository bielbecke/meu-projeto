import React, {useEffect, useState} from 'react';
import './App.css';
import tmdb from "./tmdb"; 
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';

export default () => {

  const[movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(()=>{
    const loadAll = async () => {
      //Pegando a lista dos filmes
      let list = await tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].itens.results.length - 1))
      let chosen = originals[0].itens.results[randomChosen];

      console.log(chosen);
    }
    loadAll();
  }, []);

  return (
    <div className="page">

        {featuredData &&
          <FeaturedMovie item={featuredData} />
        }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} itens={item.itens} />
        ))}
      </section>
      
    </div>
  )
}
  