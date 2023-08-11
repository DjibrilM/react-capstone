import React, { useEffect } from 'react';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { useDispatch } from 'react-redux';
import { fetchCurrency } from './redux/currencies/currencies';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  },[])

  return (
    <>
      <Header />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Detail />} path='detail/:id' />
        <Route p />
      </Routes>
    </>

  );
}

export default App;
