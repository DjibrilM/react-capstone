import React from 'react';
import { Link } from 'react-router-dom';

const Coin = (props) => {
    const index = props.index;
    let bgColor = '';
    const variedIndices = [0, 3, 4, 7, 8, 11, 12, 15, 16, 19, 20];
    const nonVariedIndices = [1, 2, 5, 6, 9, 10, 13, 14, 17, 18];

    if (variedIndices.includes(index)) {
        bgColor = 'odd';
    } else if (nonVariedIndices.includes(index)) {
        bgColor = 'even';
    }

    return (
        <Link  to={'detail/' + props.uuid}>
            <li className={' w-full h-[200px] flex-col flex items-center  pt-4 gap-2 ' + bgColor}>
                <img role='detail-image' className=' w-10' src={props.iconUrl} alt="" />
                <h3  role='detail-name' className=' text-2xl font-bold text-slate-200'>{props.name}</h3>
                <p className=' text-center relative z-10 text-slate-300'>{parseFloat(props.price).toFixed(2)}</p>
            </li>
        </Link>
    )
}

export default Coin