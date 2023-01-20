import { priceService } from "../../Services/PriceService"
import { SET_STOCK_PRICE_LIST } from '../Constants/PriceConstants'

export const getAllStockPriceAction = () => {
    return async (dispatch, getState) => {
        try {
            const { data } = await priceService.getAllStockPriceService();
            dispatch({
                type: SET_STOCK_PRICE_LIST,
                stockPriceList: data.stockPriceList
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }
}