import { useEffect } from 'react'
import { fechDataFromApi } from './utils/api'
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfigration } from './store/homeSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import { Home } from './pages/home/Home';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { PageNotFound } from './pages/404/PageNotFound';
import { Explore } from './pages/explore/Explore';
import { Details } from './pages/details/Details';
import { SearchResult } from './pages/searchResult/SearchResult';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    apiTesting();
  },[])

  const apiTesting = () => {
    fechDataFromApi("/movie/popular")
      .then((res)=>{
        dispatch(getApiConfigration(res));
      })
  }

  const url = useSelector((state)=>state.home.url);

  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/:mediaType/:id' element={<Details />}></Route>
          <Route path='/search/:query' element={<SearchResult />}></Route>
          <Route path='/explore/:mediaType' element={<Explore />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
