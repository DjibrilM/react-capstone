import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: false,
    data: {},
    detailLoading: false,
    detailError: false,
    detailData: null,
    searchString: ""
}

const currencySlice = createSlice({
    name: "currency",
    initialState: initialState,
    reducers: {
        search: (state, action) => {
            action.payload;
            state.searchString = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrency.pending, (state) => {
            state.loading = true;
            state.error = false;
        })

        builder.addCase(fetchCurrency.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })

        builder.addCase(fetchCurrency.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload;
        })


        builder.addCase(fetchCurrencyDetails.pending, (state) => {
            state.detailLoading = true;
            state.detailError = false;
        })

        builder.addCase(fetchCurrencyDetails.rejected, (state) => {
            state.detailError = true;
            state.detailLoading = false;
        })

        builder.addCase(fetchCurrencyDetails.fulfilled, (state, action) => {
            state.detailData = action.payload;
            state.detailLoading = false

        })
    }

})

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '20',
        offset: '0',
    },
    headers: {
        'X-RapidAPI-Key': '20598545e7msh83bf76483587c65p18414bjsnd64281e41fef',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
};


export const fetchCurrency = createAsyncThunk('fetch/currencies', async (thunkApi) => {
    try {
        const request = await axios(options);
        return request.data;
    } catch (error) {
        return thunkApi.rejectWithValue('Something went wrong');
    }

});

export const fetchCurrencyDetails = createAsyncThunk('fetch/currency', async (id, thunkApi) => {
    try {
        const request = await axios({
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coin/' + id,
            params: {
                referenceCurrencyUuid: 'yhjMzLPhuIDl',
                timePeriod: '24h'
            },
            headers: {
                'X-RapidAPI-Key': '20598545e7msh83bf76483587c65p18414bjsnd64281e41fef',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        });
        return request.data;
    } catch (error) {
        return thunkApi.rejectWithValue('Something went wrong');
    }
})


export default currencySlice.reducer;
export const currencySelector = (state) => state.currency;
export const { search } = currencySlice.actions;