using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace _91APP_ViewModel.Share
{
    /// <summary>
    /// 驗證結果
    /// </summary>
    public class VerityResult
    {
        /// <summary>
        /// 結果
        /// </summary>
        public bool Success { get; set; } = true;

        /// <summary>
        /// 訊息
        /// </summary>
        public string Message { get; set; } = string.Empty;

    }

    /// <summary>
    /// 回覆JSON統一格式
    /// </summary>
    public class ResponseViewModel : VerityResult
    {
        /// <summary>
        /// HttpStatusCode 狀態碼
        /// </summary>
        public HttpStatusCode HttpStatusCode { set; get; }

        /// <summary>
        /// SEVER回覆時間
        /// </summary>
        public string ResponseTime { get; set; }

        /// <summary>
        /// 例外訊息
        /// </summary>
        public Exception Exception { get; set; }

        /// <summary>
        /// 傳回資料
        /// </summary>
        public object Data { set; get; }
    }
}
