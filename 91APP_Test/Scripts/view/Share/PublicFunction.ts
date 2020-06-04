/**
 * 設置ajax
 * @param _setting 設定內容
 * @param _datatype 送出時的資料型態(postbody時的header修改)
 */
export function AjaxReturn(_setting: JQueryAjaxSettings, _datatype: AjaxConvertDataType = 'JSON'): JQuery.jqXHR {

	var headers = {};
	var token = $("input[name='__RequestVerificationToken']").val();
	headers["__RequestVerificationToken"] = token;

	const defSetting: JQueryAjaxSettings = {
		contentType: "application/json; charset=utf-8",
		cache: false,
		headers: headers
	}
	if (_datatype == 'JSON')
		_setting.data = JSON.stringify(_setting.data);
	if (_datatype == 'FormData') {
		defSetting.contentType = false;
		defSetting.processData = false;
	}

	return jQuery.ajax(Object.assign(defSetting, _setting));
}

export function AddAntiForgeryToken(data) {
	if ($.isEmptyObject(data)) {
		data = {};
	}
	//回傳防偽基元得值
	data.__RequestVerificationToken = $('input[name=__RequestVerificationToken]').val();
	return data;
}