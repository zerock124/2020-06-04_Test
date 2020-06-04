import { Vue, Component } from 'vue-property-decorator'
import { OrderViewModel, OrderDetailViewModel } from './model'
import service from './service'
import { GetOrderStatus } from '../Share/Enum'
@Component({
    template: '#OrderManagement',
    filters: {
        GetOrderStatus
    }
})

export default class OrderManagement extends Vue {
    ListItem: OrderViewModel[] = [];
    DetailListItem: OrderDetailViewModel[] = [];

    ConfirmListItem: OrderViewModel[] = [];

    created() {
        const _this = this;
        _this.GetOrderList();
    }

    GetOrderList() {
        const _this = this;
        service.GetOrderList().then(res => {
            if (!res.Success) {
                console.log(res);
            }
            if (res.Data) {
                console.log(res.Data);
                _this.ListItem = res.Data;
            }
        }).catch(err => {
            console.log(err);
        })
    }

    ShowOrderDetail(OrderId: string) {
        const _this = this;
        _this.$bvModal.show("OrderDetail");
        service.GetOrderDetail(OrderId).then(res => {
            if (!res.Success) {
                console.log(res);
            }
            if (res.Data) {
                _this.DetailListItem = res.Data;
            }
        }).catch(err => {
            console.log(err);
        })
    }

    CheckStatus(Status: number) {
        if (Status == 1) {
            return true;
        }
        else {
            return false;
        }
    }

    ConfirmItem(OrderId: string) {
        const _this = this;
        if (_this.ListItem) {
            const Item = _this.ListItem.find(function (item) {
                return item.OrderId == OrderId;
            });
            if (Item) {
                const index = _this.ConfirmListItem.indexOf(Item)
                if (index != -1)
                    _this.ConfirmListItem.splice(index, 1);
                else {
                    _this.ConfirmListItem.push(Item);
                }
            }
        }
    }

    ConfirmOrder() {
        const _this = this;
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
            }).then(value => {
                if (value) {
                    service.ConfirmOrder(_this.ConfirmListItem).then(res => {
                        if (!res.Success) {
                            console.log(res);
                            _this.$bvToast.toast('Confirm Order Error', {
                                title: 'Confirm Order',
                                variant: 'warning',
                            })
                        }
                        if (res.Success) {
                            _this.$bvToast.toast('Confirm Order Success', {
                                title: 'Confirm Order',
                                variant: 'success',
                            })
                            _this.GetOrderList();
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
}