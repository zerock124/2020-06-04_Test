define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetOrderStatus = function (date) {
        switch (date) {
            case 0:
                return 'Payment completed';
            case 1:
                return 'To be shipped';
            default:
                return '-';
        }
    };
});
//# sourceMappingURL=Enum.js.map