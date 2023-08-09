import React from 'react'
import chowcaseImg from '../../assets/images/cryptocurrencies.png';
import { useSelector, useDispatch } from 'react-redux';
import { currencySelector } from '../../redux/currencies/currencies';
import { RotatingLines } from "react-loader-spinner";
import { search as searchAction } from '../../redux/currencies/currencies';


const Showcase = () => {
    const state = useSelector(currencySelector);
    const dispatch = useDispatch();

    const search = (e) => {
        dispatch(searchAction(e.target.value));
    }

    return (
        <section className=' w-full h-[450px] bg-[#d04c73]'>
            <img src={chowcaseImg} className=' w-24 m-auto pt-[6rem]' alt="" />
            <h1 className=' text-center font-bold text-[1.3rem] text-slate-50 pt-6'>Crypto-Market showcase 2023</h1>
            <p className=' text-slate-300 w-7/12 mt-3 text-center m-auto'>Find the latest update about the crypto market</p>
            <div className="mx-5 mt-6">
                <input onChange={(e) => search(e)} placeholder='search...' type="text" className='w-full outline-slate-500 px-3 rounded-md border h-10 text-white  border-[#ffffff5f] bg-[#831f3d55]' />
            </div>

            {state.loading && !state.error && (
                <div className=" w-full flex items-center justify-center pt-5">
                    <RotatingLines width='30' strokeColor='#ffff' />
                </div>
            )}
            {!state.loading && state.data.data && (
                <div className=' w-full mt-5 flex justify-center'>
                    <h1 className=' font-bold text-slate-100 text-[1.2rem]'>Market Cap : {state.data.data.stats.totalMarketCap}</h1>
                </div>
            )}

        </section>
    )
}

{/* <h1>market cap:{state.data.data.stats.totalMarketCap}</h1> */ }


// totalMarketCap

export default Showcase