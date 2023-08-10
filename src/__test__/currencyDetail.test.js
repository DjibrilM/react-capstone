import { screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from 'redux-mock-store';
import { currencyDetail } from './currencyDetail.data';
import { render } from "@testing-library/react";
import Coin from "../components/coins/Coin";

const mockStore = configureStore({
    currency: {
        loading: false,
        error: false,
        data: {},
        detailLoading: false,
        detailError: false,
        detailData: null,
        searchString: ""
    }
},
);

const store = mockStore({
    currency: { detailData: currencyDetail },
});

const Mock = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Coin />
            </BrowserRouter>
        </Provider>
    )
}


describe("test detail page", () => {
    it("check if detail information are rendered", () => {
        render(<Mock />)

        const getImage = screen.getByRole('detail-image');
        const getName = screen.getByRole('detail-name');
        expect(getImage).toBeInTheDocument();
        expect(getName).toBeInTheDocument();
    })
})