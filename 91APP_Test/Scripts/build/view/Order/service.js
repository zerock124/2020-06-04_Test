define(["require", "exports", "../Share/PublicFunction"], function (require, exports, PublicFunction_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrderService = (function () {
        function OrderService() {
        }
        OrderService.prototype.GetOrderList = function () {
            var setting = {
                url: '/Order/GetOrderList',
                type: 'GET',
            };
            return PublicFunction_1.AjaxReturn(setting);
        };
        OrderService.prototype.GetOrderDetail = function (OrderId) {
            var setting = {
                url: "/Order/GetOrderDetail?OrderId=" + OrderId,
                type: 'GET',
            };
            return PublicFunction_1.AjaxReturn(setting);
        };
        OrderService.prototype.ConfirmOrder = function (model) {
            var setting = {
                url: "/Order/ConfirmOrder",
                type: 'POST',
                data: {
                    model: model
                }
            };
            return PublicFunction_1.AjaxReturn(setting);
        };
        return OrderService;
    }());
    var order_service = new OrderService();
    exports.default = order_service;
});
//# sourceMappingURL=service.js.map