import React, { useEffect } from 'react'
import DetailShowcase from '../components/showcase/DetailShowcase';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { goForward } from '../redux/ui/uiSlice';
import { fetchCurrencyDetails } from '../redux/currencies/currencies';
import { LiaChevronCircleLeftSolid } from 'react-icons/lia';
import { useSelector } from 'react-redux';
import { currencySelector } from '../redux/currencies/currencies';

const Detail = () => {
    const dispatch = useDispatch();
    const state = useSelector(currencySelector);
    const { id } = useParams();

    useEffect(() => {
        dispatch(goForward());
        dispatch(fetchCurrencyDetails(id));
    }, [])

    return (
        <div>
            <DetailShowcase />
            {!state.detailLoading && state.detailData && !state.detailError &&
                <table className='w-full h-full text-slate-100   detail-table'>
                    <tr>
                        <td>
                            <h1>numberOfMarkets</h1>
                        </td>

                        <td>{state.data.data.stats.totalMarketCap}</td>

                        <td>Supply</td>

                        <td><LiaChevronCircleLeftSolid /></td>
                    </tr>

                    <tr>
                        <td>
                            <h1>price</h1>
                        </td>

                        <td>{parseFloat(state.detailData.data.coin.price).toFixed(3)}</td>

                        <td>Supply</td>

                        <td><LiaChevronCircleLeftSolid /></td>
                    </tr>


                    <tr>
                        <td>
                            <h1>btcPrice</h1>
                        </td>

                        <td>{parseFloat(state.detailData.data.coin.btcPrice).toFixed(3)}</td>

                        <td>Supply</td>

                        <td><LiaChevronCircleLeftSolid /></td>
                    </tr>


                    <tr>
                        <td>
                            <h1>marketCap</h1>
                        </td>

                        <td>{parseFloat(state.detailData.data.coin.marketCap).toFixed(3)}</td>

                        <td>Supply</td>

                        <td><LiaChevronCircleLeftSolid /></td>
                    </tr>
                </table>
            }
        </div>

    )
}

export default Detail