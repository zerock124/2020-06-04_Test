define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function AjaxReturn(_setting, _datatype) {
        if (_datatype === void 0) { _datatype = 'JSON'; }
        var headers = {};
        var token = $("input[name='__RequestVerificationToken']").val();
        headers["__RequestVerificationToken"] = token;
        var defSetting = {
            contentType: "application/json; charset=utf-8",
            cache: false,
            headers: headers
        };
        if (_datatype == 'JSON')
            _setting.data = JSON.stringify(_setting.data);
        if (_datatype == 'FormData') {
            defSetting.contentType = false;
            defSetting.processData = false;
        }
        return jQuery.ajax(Object.assign(defSetting, _setting));
    }
    exports.AjaxReturn = AjaxReturn;
    function AddAntiForgeryToken(data) {
        if ($.isEmptyObject(data)) {
            data = {};
        }
        data.__RequestVerificationToken = $('input[name=__RequestVerificationToken]').val();
        return data;
    }
    exports.AddAntiForgeryToken = AddAntiForgeryToken;
});
//# sourceMappingURL=PublicFunction.js.map