import { render, screen } from "@testing-library/react";
import Coin from "../components/coins/Coins";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from 'redux-mock-store';
import { currencies } from "./currencies.data";

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
    currency: { data: currencies, searchString: "" },
});


const Mock = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Coin />
        </BrowserRouter>
    </Provider>
);


describe("test coins list", () => {
    it("should render coins fetched currencies", async () => {
        render(<Mock />)
        const getList = screen.getByTestId("list-element");
        expect(getList.children.length).not.toBeLessThan(10);
    })
})