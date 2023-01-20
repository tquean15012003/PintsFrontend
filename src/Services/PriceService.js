import { BaseService } from "./BaseService";

export class PriceService extends BaseService {
    getAllStockPriceService = () => {
        return this.get('/price');
    }
}

export const priceService = new PriceService()