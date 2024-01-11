import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

export const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const {data, loading} = useFetch("movie/upcoming");

    useEffect(() => {
        const bg = data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
        setBackground(bg)
    },[data])

    const searchQueryHandler= (e)=>{
        if(e.key === "Enter" && query.length >0) {
                navigate(`/search/${query}`)
        }
    }


  return (
    <div className='hero-banner'>
        <div className="wrapper">
            <div className="hero-banner-content">
                <span className="title">Welcome</span>
                <span className="subtitle">Here is the Movix website.</span>
                <div className='search-input'>
                    <input type="text" placeholder='Search for a movie or tv show...' onChange={(e)=>setQuery(e.target.value)} onKeyUp={searchQueryHandler} />
                    <button>Search</button>
                </div>
            </div>
        </div>
    </div>
  )
}
