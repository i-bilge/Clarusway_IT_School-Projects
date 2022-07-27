import React, {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from './Card'
let API_key="&api_key=5e5ba60b460ceadbd75b3baff60a87de";
let base_url="https://api.themoviedb.org/3";
let url= base_url+"/discover/movie?sort_by=popularity.desc"+API_key;

function Main() {
    const [movieData, setData] = useState([]);
    const [url_set, setUrl] = useState(url);

    useEffect(() => {
        fetch(url_set).then(res=>res.json()).then(data => {
            // console.log(data.results)
            setData(data.results);
        })
    }, [url_set])
  return (
    <>
    <div className='header'>
        <nav>
            <ul>
                <li><a href='#'>Popular</a></li>
                <li><a href='#'>Theatre</a></li>
                <li><a href='#'>Kids</a></li>
                <li><a href='#'>Drama</a></li>
                <li><a href='#'>Comedie</a></li>
            </ul>
        </nav>
        <form>
            <div className='search-btn'>
                <input type="text" placeholder="Enter Movie Name..." className='inputText'>
                </input>
                <button>SEARCH</button>
            </div>
        </form>
    </div>
    <div className='container'>
        {
          (movieData.length==0)?<p className='notfound'>Not Found</p>:
          movieData.map(()=> {
            return(
                <Card/>
            )
          })
        }
    </div>
    </>
  )
}

export default Main