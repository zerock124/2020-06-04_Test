import { OrderViewModel, IOrderService, OrderDetailViewModel } from './model'
import { AjaxReturn } from '../Share/PublicFunction';

class OrderService implements IOrderService {
    GetOrderList(): JQuery.jqXHR<ResponseViewModel<OrderViewModel[]>> {
        const setting: JQueryAjaxSettings = {
            url: '/Order/GetOrderList',
            type: 'GET',
        }
        return AjaxReturn(setting);
    }

    GetOrderDetail(OrderId: string): JQuery.jqXHR<ResponseViewModel<OrderDetailViewModel[]>> {
        const setting: JQueryAjaxSettings = {
            url: `/Order/GetOrderDetail?OrderId=${OrderId}`,
            type: 'GET',
        }
        return AjaxReturn(setting);
    }

    ConfirmOrder(model: OrderViewModel[]): JQuery.jqXHR<ResponseViewModel<OrderDetailViewModel[]>> {
        const setting: JQueryAjaxSettings = {
            url: `/Order/ConfirmOrder`,
            type: 'POST',
            data: {
                model
            }
        }
        return AjaxReturn(setting);
    }

}

const order_service: IOrderService = new OrderService();
export default order_service;