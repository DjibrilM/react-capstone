import React from 'react';
import Coin from './Coin';
import { useSelector } from 'react-redux';
import { currencySelector } from '../../redux/currencies/currencies';


const Coins = () => {
    const state = useSelector(currencySelector);
    return <>
        <ul className='w-full coins-list grid grid-cols-2'>
            {state.data.status === 'success' && state.data.data.coins.filter(cr => cr.name.toUpperCase().includes(state.searchString.toUpperCase())).map((currency, index) => <Coin {...currency} index={index} key={index} />)}
        </ul>
    </>

}

export default Coins