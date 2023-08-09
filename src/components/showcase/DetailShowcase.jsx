import React from 'react'
import { useSelector } from 'react-redux';
import { currencySelector } from '../../redux/currencies/currencies';
import { RotatingLines } from "react-loader-spinner";


const DetailShowcase = () => {
    const state = useSelector(currencySelector);

    console.log(state.detailData)

    return (
        <section className=' w-full flex h-[350px] bg-[#d04c73]'>
            {state.detailData  !== null && !state.detailLoading && <div className="mt-24 justify-between w-full flex px-4">
                <img src={state.detailData.data.coin.iconUrl} className=' w-32 relative top-5 h-32 ' alt="" />

                <div className="pr-5 text-right">
                    <h1 className='  font-bold text-[1.4rem] text-slate-50 pt-6'>{state.detailData.data.coin.name}</h1>
                    <h4 className=' font-bold text-[1.2rem] text-slate-50 '>{state.detailData.data.coin.priceAt}</h4>
                    <p className=' text-slate-200'>Supply</p>
                </div>
            </div>
            }

            {
                state.detailLoading && (
                    <div className=" w-full flex items-center justify-center pt-5">
                        <RotatingLines width='30' strokeColor='#ffff' />
                    </div>
                )
            }
        </section>
    )
}

export default DetailShowcase