export interface IOrderService {

    GetOrderList(): JQuery.jqXHR<ResponseViewModel<OrderViewModel[]>>;

    GetOrderDetail(OrderId: string): JQuery.jqXHR<ResponseViewModel<OrderDetailViewModel[]>>;

    ConfirmOrder(model: OrderViewModel[]): JQuery.jqXHR<ResponseViewModel<OrderDetailViewModel[]>>;
}

export interface OrderViewModel {
    Id: number;
    OrderId: string;
    Price: number;
    Cost: number;
    Status: number;
    CreateTime: Date;
    Check: boolean;
}

export interface OrderDetailViewModel {
    Id: number;
    OrderId: string;
    ProductId: number;
    Price: number;
    Cost: number;
    Qty: number;
    CreateTime: Date;
}

export interface ShippingOrderViewModel {
    Id: string;
    OrderId: string;
    Status: number;
    CreateTime: Date;
}
