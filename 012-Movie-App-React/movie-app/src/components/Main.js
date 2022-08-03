import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Container from './Container';

let API_key="api_key=5e5ba60b460ceadbd75b3baff60a87de";
let base_url="https://api.themoviedb.org/3";
let url= base_url+"/discover/movie?"+API_key;
let imageBaseUrl = "http://image.tmdb.org/t/p/w500/";

function Main() {
    const [movieData, setMovieData] = useState([]);
    const [url_set, setUrl] = useState(url);
    const [search, setSearch] = useState("");

    const updateSearch = (e) => {
        setSearch(e.target.value);
      };

    useEffect(() => {
        fetch(url_set).then(res=>res.json()).then(data => {
            console.log(data.results)
            setMovieData(data.results);
        })
    }, [url_set])
  return (
    <>
      <Header 
      search={search}
      updateSearch={updateSearch}
      />
      <Container 
      movieData={movieData}
      search={search} 
      imageBaseUrl={imageBaseUrl}
    />
    </>
  )
}

export default Main