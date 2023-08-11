import React, { useEffect } from 'react'
import Showcase from '../components/showcase/Showcase';
import Coins from '../components/coins/Coins';
import { useDispatch } from 'react-redux';
import { goBack } from '../redux/ui/uiSlice';


const Home = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(goBack());
    }, [])

    return (
        <main className=' w-full min-h-screen'>
            <Showcase />
            <Coins />
        </main>
    )
}

export default Home