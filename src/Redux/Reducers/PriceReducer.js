import { SET_STOCK_PRICE_LIST } from "../Constants/PriceConstants";

const stateDefault = {
    stockPriceList: [],
};

export const PriceReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_STOCK_PRICE_LIST: {
            return { ...state, stockPriceList: action.stockPriceList };
        }
        default: return { ...state };
    };
};