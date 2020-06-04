var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "vue-property-decorator", "./service", "../Share/Enum"], function (require, exports, vue_property_decorator_1, service_1, Enum_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    service_1 = __importDefault(service_1);
    var OrderManagement = (function (_super) {
        __extends(OrderManagement, _super);
        function OrderManagement() {
            var _this_1 = _super !== null && _super.apply(this, arguments) || this;
            _this_1.ListItem = [];
            _this_1.DetailListItem = [];
            _this_1.ConfirmListItem = [];
            return _this_1;
        }
        OrderManagement.prototype.created = function () {
            var _this = this;
            _this.GetOrderList();
        };
        OrderManagement.prototype.GetOrderList = function () {
            var _this = this;
            service_1.default.GetOrderList().then(function (res) {
                if (!res.Success) {
                    console.log(res);
                }
                if (res.Data) {
                    console.log(res.Data);
                    _this.ListItem = res.Data;
                }
            }).catch(function (err) {
                console.log(err);
            });
        };
        OrderManagement.prototype.ShowOrderDetail = function (OrderId) {
            var _this = this;
            _this.$bvModal.show("OrderDetail");
            service_1.default.GetOrderDetail(OrderId).then(function (res) {
                if (!res.Success) {
                    console.log(res);
                }
                if (res.Data) {
                    _this.DetailListItem = res.Data;
                }
            }).catch(function (err) {
                console.log(err);
            });
        };
        OrderManagement.prototype.CheckStatus = function (Status) {
            if (Status == 1) {
                return true;
            }
            else {
                return false;
            }
        };
        OrderManagement.prototype.ConfirmItem = function (OrderId) {
            var _this = this;
            if (_this.ListItem) {
                var Item = _this.ListItem.find(function (item) {
                    return item.OrderId == OrderId;
                });
                if (Item) {
                    var index = _this.ConfirmListItem.indexOf(Item);
                    if (index != -1)
                        _this.ConfirmListItem.splice(index, 1);
                    else {
                        _this.ConfirmListItem.push(Item);
                    }
                }
            }
        };
        OrderManagement.prototype.ConfirmOrder = function () {
            var _this = this;
            if (_this.ConfirmListItem) {
                this.$bvModal.msgBoxConfirm('Please confirm that you want to submit order.', {
                    title: 'Please Confirm',
                    size: 'sm',
                    buttonSize: 'sm',
                    okVariant: 'danger',
                    okTitle: 'YES',
                    cancelTitle: 'NO',
                    footerClass: 'p-2',
                    hideHeaderClose: false,
                    centered: true
                }).then(function (value) {
                    if (value) {
                        service_1.default.ConfirmOrder(_this.ConfirmListItem).then(function (res) {
                            if (!res.Success) {
                                console.log(res);
                                _this.$bvToast.toast('Confirm Order Error', {
                                    title: 'Confirm Order',
                                    variant: 'warning',
                                });
                            }
                            if (res.Success) {
                                _this.$bvToast.toast('Confirm Order Success', {
                                    title: 'Confirm Order',
                                    variant: 'success',
                                });
                                _this.GetOrderList();
                            }
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                }).catch(function (err) {
                    console.log(err);
                });
            }
        };
        OrderManagement = __decorate([
            vue_property_decorator_1.Component({
                template: '#OrderManagement',
                filters: {
                    GetOrderStatus: Enum_1.GetOrderStatus
                }
            })
        ], OrderManagement);
        return OrderManagement;
    }(vue_property_decorator_1.Vue));
    exports.default = OrderManagement;
});
//# sourceMappingURL=OrderManagement.js.map